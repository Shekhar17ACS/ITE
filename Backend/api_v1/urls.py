from django.urls import path

from .views import *

urlpatterns = [
    path('signup/', SignupAPIView.as_view()),
    path('login/', LoginView.as_view()),
    path('forgot-password/', RequestPasswordResetAPIView.as_view()),
    path('reset-password/', ResetPasswordAPIView.as_view()),
    path('verify-otp/', VerifyOTPAPIView.as_view()),
    path('resend-otp/', ResendOTPAPIView.as_view()),
    # path('reset-password/', ResetPasswordView.as_view()),

]
