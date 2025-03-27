import random
import uuid

from django.contrib.auth.base_user import BaseUserManager, AbstractBaseUser
from django.contrib.auth.models import AbstractUser, PermissionsMixin, Group, Permission
from django.db import models



class Title(models.Model):
    name = models.CharField(max_length=30)

class User(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    application_id = models.CharField(max_length=15, null=True, blank=True, unique=True, editable=False)
    title = models.OneToOneField("Title", on_delete=models.SET_NULL, null=True, blank=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    middle_name = models.CharField(max_length=50, null=True, blank=True)
    last_name = models.CharField(max_length=50, null=True, blank=True)
    mobile_no = models.CharField(max_length=20, blank=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)
    date_of_birth = models.DateField(null=True, blank=True)
    gender = models.CharField(max_length=10, null=True, blank=True)
    address = models.TextField(null=True, blank=True)
    highest_qualification = models.CharField(max_length=200, null=True, blank=True)
    father_name = models.CharField(max_length=200, null=True, blank=True)
    mother_name = models.CharField(max_length=200, null=True, blank=True)
    father_occupation = models.CharField(max_length=200, null=True, blank=True)
    mother_occupation = models.CharField(max_length=200, null=True, blank=True)
    aadhar_card = models.FileField(upload_to="documents/aadhar/", null=True, blank=True)
    pan_card = models.FileField(upload_to="documents/pan/", null=True, blank=True)
    class_10_certificate = models.FileField(upload_to="documents/10th/", null=True, blank=True)
    class_12_certificate = models.FileField(upload_to="documents/12th/", null=True, blank=True)
    graduation_certificate = models.FileField(upload_to="documents/graduation/", null=True, blank=True)
    masters_certificate = models.FileField(upload_to="documents/masters/", null=True, blank=True)
    eligibility = models.TextField(null=True, blank=True)
    payment_details = models.JSONField(null=True, blank=True)
    otp = models.CharField(max_length=6, null=True, blank=True)
    otp_expires_at = models.DateTimeField(null=True, blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    groups = models.ManyToManyField(Group, related_name="custom_user_groups", blank=True)
    user_permissions = models.ManyToManyField(Permission, related_name="custom_user_permissions", blank=True)
    request_otp = models.BooleanField(default=False)

    def generate_application_id(self):
        """Generates a unique application ID."""
        while True:
            app_id = f"APP{random.randint(100000, 999999)}"
            if not User.objects.filter(application_id=app_id).exists():
                return app_id

    def __str__(self):
        return self.email
    

class Payment(models.Model):
    order_id = models.CharField(max_length=255, unique=True)
    payment_id = models.CharField(max_length=255, null=True, blank=True)
    receipt = models.CharField(max_length=255, unique=True)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=20, choices=[("Created", "Created"), ("Success", "Success"), ("Failed", "Failed")], default="Created")
    created_at = models.DateTimeField(auto_now_add=True)

    def _str_(self):
        return self.order_id
