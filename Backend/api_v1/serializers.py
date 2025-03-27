from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
from .models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'mobile_no', 'name']

class SignupSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ["name", "email", "password", "confirm_password", "mobile_no"]
        extra_kwargs = {"password": {"write_only": True}}

    def validate(self, data):
        """Validates user input before creating a user"""
        if data["password"] != data["confirm_password"]:
            raise serializers.ValidationError({"password": "Passwords do not match."})

        if User.objects.filter(email=data["email"]).exists():
            raise serializers.ValidationError({"email": "Email already registered."})

        return data

    def create(self, validated_data):
        """Creates a user and securely sets the password"""
        validated_data.pop("confirm_password")
        user = User(
            name=validated_data["name"],
            email=validated_data["email"],
            mobile_no=validated_data["mobile_no"],
            is_active=False  # User is inactive until OTP is verified
        )
        user.set_password(validated_data["password"])  # Securely set password
        user.save()
        return user

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

class ResetPasswordSerializer(serializers.Serializer):
    new_password = serializers.CharField(write_only=True, min_length=8, validators=[validate_password])
    confirm_password = serializers.CharField(write_only=True, min_length=8)

    def validate(self, data):
        if data["new_password"] != data["confirm_password"]:
            raise serializers.ValidationError({"confirm_password": "Passwords do not match."})
        return data


class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = "__all__"