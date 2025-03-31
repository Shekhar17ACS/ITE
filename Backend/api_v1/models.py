from django.contrib.auth.base_user import BaseUserManager, AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
import random
import uuid
from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models
from django.db.models import SET_NULL, CASCADE


class Common(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

class UserManager(BaseUserManager):
    """Custom manager for User model with email-based authentication."""

    def create_user(self, email, password=None, **extra_fields):
        """Create and return a regular user with an email instead of a username."""
        if not email:
            raise ValueError("The Email field must be set")
        email = self.normalize_email(email)
        extra_fields.setdefault("is_active", True)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        """Create and return a superuser with all permissions."""
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        return self.create_user(email=email, password=password, **extra_fields)


class Title(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name

class Category(Common):
    name = models.CharField(max_length=30, unique=True)
    description = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return self.name

class QualificationType(Common):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.name

class QualificationBranch(Common):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.name


class User(AbstractBaseUser, PermissionsMixin):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    application_id = models.CharField(max_length=15, null=True, blank=True, unique=True, editable=False)
    title = models.OneToOneField("Title", on_delete=models.SET_NULL, null=True, blank=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    middle_name = models.CharField(max_length=50, null=True, blank=True)
    last_name = models.CharField(max_length=50, null=True, blank=True)
    mobile_number = models.CharField(max_length=20, blank=True)
    email = models.EmailField(unique=True)
    date_of_birth = models.DateField(null=True, blank=True)
    gender = models.CharField(max_length=10, null=True, blank=True)
    address = models.TextField(null=True, blank=True)
    highest_qualification = models.CharField(max_length=200, null=True, blank=True)
    father_name = models.CharField(max_length=200, null=True, blank=True)
    mother_name = models.CharField(max_length=200, null=True, blank=True)
    father_occupation = models.CharField(max_length=200, null=True, blank=True)
    mother_occupation = models.CharField(max_length=200, null=True, blank=True)
    
    # Document uploads
    aadhar_card = models.FileField(upload_to="documents/aadhar/", null=True, blank=True)
    pan_card = models.FileField(upload_to="documents/pan/", null=True, blank=True)
    
    eligibility = models.TextField(null=True, blank=True)
    payment_details = models.JSONField(null=True, blank=True)

    otp = models.CharField(max_length=6, null=True, blank=True)
    otp_expires_at = models.DateTimeField(null=True, blank=True)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    groups = models.ManyToManyField(Group, related_name="custom_user_groups", blank=True)
    user_permissions = models.ManyToManyField(Permission, related_name="custom_user_permissions", blank=True)

    request_otp = models.BooleanField(default=False)

    # Set email as the unique identifier instead of username
    username = None  
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []  # No additional required fields besides email and password

    objects = UserManager()

    def __str__(self):
        return self.email


    def generate_application_id(self):
        """Generates a unique application ID."""
        while True:
            app_id = f"APP{random.randint(100000, 999999)}"
            if not User.objects.filter(application_id=app_id).exists():
                return app_id

    def __str__(self):
        return self.email
    

class PersonalDetail(models.Model):
    user = models.OneToOneField("User", on_delete=CASCADE, related_name="personal_detail")
    father_name = models.CharField(max_length=200, null=True, blank=True)
    mother_name = models.CharField(max_length=200, null=True, blank=True)
    aadhar_card = models.FileField(upload_to="documents/aadhar/", null=True, blank=True)
    pan_card = models.FileField(upload_to="documents/pan/", null=True, blank=True)
    address = models.TextField(null=True, blank=True)


class Qualification(Common):
    user = models.ForeignKey(User, on_delete=CASCADE, related_name='qualifications')
    qualification_type = models.ForeignKey(QualificationType, on_delete=SET_NULL, null=True)
    branch = models.ForeignKey(QualificationBranch, on_delete=SET_NULL, null=True, blank=True)
    institute_name = models.CharField(max_length=255)
    board_university = models.CharField(max_length=255, null=True, blank=True)
    year_of_passing = models.PositiveIntegerField()
    percentage_cgpa = models.CharField(max_length=20)
    document = models.FileField(upload_to='documents/qualifications/')

    def __str__(self):
        return f"{self.user.email} - {self.qualification_type.name}"



class Payment(models.Model):
    order_id = models.CharField(max_length=255, unique=True)
    payment_id = models.CharField(max_length=255, null=True, blank=True)
    receipt = models.CharField(max_length=255, unique=True)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=20, choices=[("Created", "Created"), ("Success", "Success"), ("Failed", "Failed")], default="Created")
    created_at = models.DateTimeField(auto_now_add=True)

    def _str_(self):
        return self.order_id

# class User(AbstractUser, Common):
#     id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
#     application_id = models.CharField(max_length=15, null=True, blank=True, unique=True, editable=False)
#     title = models.OneToOneField(Title, on_delete=SET_NULL, null=True, blank=True)
#     name = models.CharField(max_length=200, null=True, blank=True)
#     middle_name = models.CharField(max_length=50, null=True, blank=True)
#     last_name = models.CharField(max_length=50, null=True, blank=True)
#     mobile_no = models.CharField(max_length=20, blank=True)
#     email = models.EmailField(unique=True)
#     password = models.CharField(max_length=100)
#     date_of_birth = models.DateField(null=True, blank=True)
#     gender = models.CharField(max_length=10, null=True, blank=True)
#     address = models.TextField(null=True, blank=True)
#     eligibility = models.TextField(null=True, blank=True)
#     payment_details = models.JSONField(null=True, blank=True)
#     otp = models.CharField(max_length=6, null=True, blank=True)
#     otp_expires_at = models.DateTimeField(null=True, blank=True)
#     is_active = models.BooleanField(default=True)
#     is_staff = models.BooleanField(default=False)
#     groups = models.ManyToManyField(Group, related_name="custom_user_groups", blank=True)
#     user_permissions = models.ManyToManyField(Permission, related_name="custom_user_permissions", blank=True)
#     request_otp = models.BooleanField(default=False)
#     experience = models.CharField(max_length=30, null=True, blank=True)
#     category = models.OneToOneField(Category, on_delete=SET_NULL, null=True, blank=True)
#
#     def generate_application_id(self):
#         """Generates a unique application ID."""
#         while True:
#             app_id = f"APP{random.randint(100000, 999999)}"
#             if not User.objects.filter(application_id=app_id).exists():
#                 return app_id
#
#     def __str__(self):
#         return self.email



class Experience(Common):
    user = models.ForeignKey(User, on_delete=CASCADE, related_name="experiences")
    organization_name = models.CharField(max_length=255)
    job_title = models.CharField(max_length=255)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)  # Leave blank if still working
    description = models.TextField(null=True, blank=True)

    def __str__(self):
        return f"{self.user.email} - {self.job_title} at {self.organization_name}"
