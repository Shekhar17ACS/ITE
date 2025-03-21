from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from .helper import send_email_otp
from .serializers import *
from datetime import timedelta
import random
from django.core.cache import cache




class SignupAPIView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        data = request.data.copy()

        if "otp" in data:
            email = data.get("email")
            otp_input = data.get("otp")
            if not email or not otp_input:
                return Response(
                    {"error": "Both email and OTP are required for verification."},
                    status=status.HTTP_400_BAD_REQUEST
                )
            try:
                user = User.objects.get(email=email)
            except User.DoesNotExist:
                return Response(
                    {"error": "User with this email does not exist."},
                    status=status.HTTP_400_BAD_REQUEST
                )

            if user.otp != otp_input:
                return Response(
                    {"error": "Invalid OTP."},
                    status=status.HTTP_400_BAD_REQUEST
                )
            if not user.otp_expires_at or timezone.now() > user.otp_expires_at:
                return Response(
                    {"error": "OTP has expired. Please request a new one."},
                    status=status.HTTP_400_BAD_REQUEST
                )

            user.otp = None
            user.otp_expires_at = None
            user.is_active = True
            user.save(update_fields=["otp", "otp_expires_at", "is_active"])

            token, _ = Token.objects.get_or_create(user=user)
            return Response({
                "message": "Signup complete and OTP verified successfully.",
                "token": token.key
            }, status=status.HTTP_200_OK)

        required_fields = ["name", "username", "email", "password", "confirm_password", "mobile_no"]
        for field in required_fields:
            if field not in data or not data[field]:
                return Response(
                    {"error": f"{field} is required."},
                    status=status.HTTP_400_BAD_REQUEST
                )

        if data["password"] != data["confirm_password"]:
            return Response(
                {"error": "Passwords do not match."},
                status=status.HTTP_400_BAD_REQUEST
            )

        if len(data["password"]) < 8:
            return Response(
                {"error": "Password must be at least 8 characters long."},
                status=status.HTTP_400_BAD_REQUEST
            )

        if User.objects.filter(username=data["username"]).exists():
            return Response(
                {"error": "Username already exists."},
                status=status.HTTP_400_BAD_REQUEST
            )
        if User.objects.filter(email=data["email"]).exists():
            return Response(
                {"error": "Email already registered."},
                status=status.HTTP_400_BAD_REQUEST
            )

        hashed_password = make_password(data["password"])
        data["password"] = hashed_password
        data.pop("confirm_password", None)

        serializer = SignupSerializer(data=data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        validated_data = serializer.validated_data
        user = User.objects.create(
            name=validated_data.get("name"),
            username=validated_data.get("username"),
            email=validated_data.get("email"),
            mobile_no=validated_data.get("mobile_no"),
            password=hashed_password,
            is_active=False
        )
        otp_code = str(random.randint(100000, 999999))
        user.otp = otp_code
        user.otp_expires_at = timezone.now() + timedelta(minutes=5)
        user.save(update_fields=["otp", "otp_expires_at"])

        send_email_otp(user, otp_code)

        return Response({
            "message": "Signup initiated. An OTP has been sent to your email. Please verify to complete signup."
        }, status=status.HTTP_201_CREATED)


def send_email_otp(email, otp_code):
    """Function to send OTP via email"""
    subject = "Your Login OTP Code"
    message = f"Your OTP code for login is: {otp_code}\n\nThis OTP is valid for 5 minutes."
    from_email = 'shalender0101yaduvanshi@gmail.com'
    recipient_list = [email]
    send_mail(subject, message, from_email, recipient_list, fail_silently=False)

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

# class ForgotPasswordView(APIView):
#     def post(self, request):
#         serializer = ForgotPasswordSerializer(data=request.data)
#         if serializer.is_valid():
#             email = serializer.validated_data['email']
#             user = User.objects.filter(email=email).first()
#             if user:
#                 send_otp(user)
#                 return Response({"message": "OTP sent to email, SMS, and WhatsApp"}, status=status.HTTP_200_OK)
#             return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)


# class ResetPasswordView(APIView):
#     def post(self, request):
#         serializer = ResetPasswordSerializer(data=request.data)
#         if serializer.is_valid():
#             email = serializer.validated_data['email']
#             otp = serializer.validated_data['otp']
#             new_password = serializer.validated_data['new_password']
#
#             user = User.objects.filter(email=email).first()
#             if user and validate_otp(user, otp):
#                 user.set_password(new_password)
#                 user.save()
#                 return Response({"message": "Password reset successful"}, status=status.HTTP_200_OK)
#             return Response({"error": "Invalid or expired OTP"}, status=status.HTTP_400_BAD_REQUEST)



from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str
from django.utils import timezone
from django.contrib.auth.tokens import default_token_generator
from django.contrib.auth.hashers import make_password
from django.core.mail import send_mail
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from .models import User
from .serializers import ResetPasswordSerializer


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
