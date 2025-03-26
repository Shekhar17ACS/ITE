import random
from django.utils import timezone
from datetime import timedelta
from django.core.mail import send_mail


from django.core.mail import send_mail

def send_email_otp(user, otp_code):
    subject = "Your OTP Code"
    message = f"Your OTP code is: {otp_code}"
    from_email = 'shalender0101yaduvanshi@gmail.com'
    recipient_list = [user.email]
    send_mail(subject, message, from_email, recipient_list)



# def send_email_otp(user):
#
#     otp_code = str(random.randint(100000, 999999))
#     user.otp = otp_code
#     user.otp_expires_at = timezone.now() + timedelta(minutes=5)
#     user.save(update_fields=['otp', 'otp_expires_at'])
#
#     subject = "Your OTP Code"
#     message = f"Your OTP code is: {otp_code}"
#     from_email = 'shalender0101yaduvanshi@gmail.com'
#     recipient_list = [user.email]
#
#     send_mail(subject, message, from_email, recipient_list)