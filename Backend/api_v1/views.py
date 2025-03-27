from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str
from django.contrib.auth.tokens import default_token_generator
from django.contrib.auth.hashers import make_password

from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from .serializers import *
from datetime import timedelta
import random
from django.core.cache import cache

from django.utils import timezone
from rest_framework import serializers, status
from rest_framework.response import Response
from rest_framework.views import APIView
import random
from datetime import timedelta

from django.core.mail import send_mail
from django.conf import settings





def send_email_otp(email, otp_code):
    subject = "Your OTP Code"
    message = f"Your OTP for verification is: {otp_code}. It is valid for 5 minutes."
    from_email = settings.DEFAULT_FROM_EMAIL
    recipient_list = [email]

    send_mail(subject, message, from_email, recipient_list)


class SignupAPIView(APIView):
    def post(self, request):
        session = request.session
        serializer = SignupSerializer(data=request.data)

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        user = serializer.save()  # Save user with hashed password
        user.is_active = False  # User is inactive until OTP verification
        user.save(update_fields=["is_active"])

        # Generate OTP and store in session
        otp_code = str(random.randint(100000, 999999))
        now = timezone.now()
        session.update({
            "email": user.email,
            "otp": otp_code,
            "otp_expires_at": (now + timedelta(minutes=5)).isoformat(),  # Convert to string
            "otp_requests": [now.isoformat()]
        })
        session.modified = True

        # Send OTP email
        send_email_otp(user.email, otp_code)

        return Response({"message": "Signup successful. OTP sent to your email."}, status=status.HTTP_201_CREATED)


class VerifyOTPAPIView(APIView):
    def post(self, request):
        session = request.session
        otp_input = request.data.get("otp")
        email = session.get("email")

        if not email or not otp_input:
            return Response({"error": "Both email and OTP are required."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({"error": "User with this email does not exist."}, status=status.HTTP_400_BAD_REQUEST)

        stored_otp = session.get("otp")
        otp_expiry_str = session.get("otp_expires_at")

        if not stored_otp or stored_otp != otp_input:
            return Response({"error": "Invalid OTP."}, status=status.HTTP_400_BAD_REQUEST)

        if not otp_expiry_str:
            return Response({"error": "OTP expiration time not found. Please request a new OTP."},
                            status=status.HTTP_400_BAD_REQUEST)

        # Convert string back to datetime
        otp_expiry = timezone.datetime.fromisoformat(otp_expiry_str)

        if timezone.now() > otp_expiry:
            return Response({"error": "OTP has expired. Request a new OTP."}, status=status.HTTP_400_BAD_REQUEST)

        # Activate user and generate application ID
        user.is_active = True
        if not user.application_id:
            user.application_id = user.generate_application_id()
        user.save(update_fields=["is_active", "application_id"])

        # Clear session data
        for key in ["otp", "otp_expires_at", "email"]:
            session.pop(key, None)
        session.modified = True

        # Send email to the user
        subject = "Your Application ID"
        message = f"Dear {user.username},\n\nYour application ID is: {user.application_id}.\n\nThank you for registering!"
        from_email = settings.DEFAULT_FROM_EMAIL
        recipient_list = [user.email]

        send_mail(subject, message, from_email, recipient_list)

        return Response({
            "message": "OTP verified. Signup complete. Application ID has been sent to your email.",
            "application_id": user.application_id
        }, status=status.HTTP_200_OK)

class ResendOTPAPIView(APIView):
    def post(self, request):
        session = request.session
        email = session.get("email") or request.data.get("email")  # Use session email or request body email

        if not email:
            return Response({"error": "Email is required."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({"error": "User with this email does not exist."}, status=status.HTTP_400_BAD_REQUEST)

        otp_requests = session.get("otp_requests", [])
        now = timezone.now()

        # Convert stored timestamp strings to datetime objects
        otp_requests = [timezone.datetime.fromisoformat(t) if isinstance(t, str) else t for t in otp_requests]

        # Remove expired requests (older than 10 minutes)
        otp_requests = [t for t in otp_requests if now - t < timedelta(minutes=10)]

        if len(otp_requests) >= 3:
            return Response({"error": "Too many OTP requests. Try again later."},
                            status=status.HTTP_429_TOO_MANY_REQUESTS)

        # Generate and send new OTP
        otp_code = str(random.randint(100000, 999999))
        session["email"] = email
        session["otp"] = otp_code
        session["otp_expires_at"] = (now + timedelta(minutes=5)).isoformat()  # Convert to string for JSON serialization
        otp_requests.append(now.isoformat())  # Store as string to prevent serialization error
        session["otp_requests"] = otp_requests
        session.modified = True

        send_email_otp(email, otp_code)

        return Response({"message": "New OTP sent to your email."}, status=status.HTTP_200_OK)

class LoginView(APIView):
    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")
        otp = request.data.get("otp")
        request_otp = request.data.get("request_otp", False)  # If true, send a new OTP

        if not email:
            return Response(
                {"error": "Email is required."},
                status=status.HTTP_400_BAD_REQUEST
            )

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response(
                {"error": "Invalid credentials or account does not exist."},
                status=status.HTTP_401_UNAUTHORIZED
            )

        # If user wants an OTP, generate and send it
        if request_otp:
            otp_code = str(random.randint(100000, 999999))  # Generate 6-digit OTP
            cache.set(f"otp_{email}", otp_code, timeout=300)  # Store OTP for 5 minutes
            send_email_otp(email, otp_code)

            return Response(
                {"message": "OTP sent to your email. Please enter the OTP to log in."},
                status=status.HTTP_200_OK
            )

        # OTP Login
        if otp:
            stored_otp = cache.get(f"otp_{email}")  # Retrieve stored OTP
            if not stored_otp or stored_otp != otp:
                return Response(
                    {"error": "Invalid or expired OTP."},
                    status=status.HTTP_401_UNAUTHORIZED
                )

            # Ensure account is active
            if not user.is_active:
                return Response(
                    {"error": "Account is not active. Please activate your account."},
                    status=status.HTTP_403_FORBIDDEN
                )

            # Clear OTP after successful login
            cache.delete(f"otp_{email}")

        # Password Login
        elif password:
            user = authenticate(request, username=user.username, password=password)
            if not user:
                return Response(
                    {"error": "Invalid credentials or account does not exist."},
                    status=status.HTTP_401_UNAUTHORIZED
                )

            if not user.is_active:
                return Response(
                    {"error": "Account is not active. Please check your email to activate."},
                    status=status.HTTP_403_FORBIDDEN
                )

        else:
            return Response(
                {"error": "Either password or OTP is required."},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Generate JWT tokens
        refresh = RefreshToken.for_user(user)
        return Response({
            "token": str(refresh.access_token),
            "refresh_token": str(refresh),
            "user_id": user.id,
            "email": user.email
        }, status=status.HTTP_200_OK)

class RequestPasswordResetAPIView(APIView):
    """ API to request password reset for logged-in user """

    permission_classes = [AllowAny]

    def post(self, request):
        email = request.data.get("email")
        if not email:
            return Response({"error": "Email is required."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({"error": "User with this email does not exist."}, status=status.HTTP_400_BAD_REQUEST)

        # Generate a password reset token and encode user ID
        token = default_token_generator.make_token(user)
        uid = urlsafe_base64_encode(force_bytes(user.pk))
        reset_url = f"{settings.FRONTEND_URL}/reset-password/?uid={uid}&token={token}"

        # Send email with reset link
        send_mail(
            subject="Password Reset Request",
            message=f"Click the link to reset your password: {reset_url}",
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[email],
            fail_silently=True,
        )

        return Response({"message": "Password reset link sent to your email."}, status=status.HTTP_200_OK)


class ResetPasswordAPIView(APIView):
    """ API to reset password using token from query params """

    permission_classes = [AllowAny]

    def post(self, request):
        uidb64 = request.query_params.get("uid")
        token = request.query_params.get("token")

        if not uidb64 or not token:
            return Response({"error": "Missing reset token or user ID."}, status=status.HTTP_400_BAD_REQUEST)

        # Decode user ID from base64
        try:
            uid = force_str(urlsafe_base64_decode(uidb64))
            user = User.objects.get(pk=uid)
        except (User.DoesNotExist, ValueError, TypeError):
            return Response({"error": "Invalid user ID."}, status=status.HTTP_400_BAD_REQUEST)

        # Validate the token
        if not default_token_generator.check_token(user, token):
            return Response({"error": "Invalid or expired token."}, status=status.HTTP_400_BAD_REQUEST)

        # Validate new password
        serializer = ResetPasswordSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        # Update user's password
        user.password = make_password(serializer.validated_data["new_password"])
        user.save(update_fields=["password"])

        return Response({"message": "Password has been reset successfully."}, status=status.HTTP_200_OK)



###########################################################################################################

import razorpay, time
from django.conf import settings
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Payment

razorpay_client = razorpay.Client(auth=(settings.RAZORPAY_KEY_ID, settings.RAZORPAY_KEY_SECRET))

class CreateOrderAPIView(APIView):
    def post(self, request):
        amount = request.data.get("amount")
        
        if not amount:
            return Response({"error": "Amount is required"}, status=status.HTTP_400_BAD_REQUEST)

        amount_paise = int(amount) * 100  

        receipt_number = f"receipt_{int(time.time())}"

        order_data = {
            "amount": amount_paise,
            "currency": "INR",
            "payment_capture": 1,
            "receipt": receipt_number, 
        }

        order = razorpay_client.order.create(order_data)

        Payment.objects.create(
            order_id=order["id"],
            receipt=receipt_number,
            amount=amount,
            status="Created"
        )

        return Response({
            "order_id": order["id"],
            "amount": order["amount"],
            "currency": order["currency"],
            "key": settings.RAZORPAY_KEY_ID,
            "receipt": receipt_number, 
        })

class VerifyPaymentAPIView(APIView):
    def post(self, request):
        razorpay_order_id = request.data.get("razorpay_order_id")
        razorpay_payment_id = request.data.get("razorpay_payment_id")
        razorpay_signature = request.data.get("razorpay_signature")

        try:
            razorpay_client.utility.verify_payment_signature({
                "razorpay_order_id": razorpay_order_id,
                "razorpay_payment_id": razorpay_payment_id,
                "razorpay_signature": razorpay_signature,
            })

            payment = Payment.objects.get(order_id=razorpay_order_id)
            payment.status = "Success"
            payment.payment_id = razorpay_payment_id
            payment.save()

            return Response({"message": "Payment successful!"})
        except:
            return Response({"message": "Payment verification failed!"}, status=400)