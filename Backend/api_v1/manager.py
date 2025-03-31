# from django.contrib.auth.base_user import BaseUserManager



# class UserManager(BaseUserManager):
#     """Custom manager for User model with email-based authentication."""

#     def create_user(self, email, password=None, **extra_fields):
#         """Create and return a regular user with an email instead of a username."""
#         if not email:
#             raise ValueError("The Email field must be set")
#         email = self.normalize_email(email)
#         extra_fields.setdefault("is_active", True)
#         user = self.model(email=email, **extra_fields)
#         user.set_password(password)
#         user.save(using=self._db)
#         return user

#     def create_superuser(self, email, password=None, **extra_fields):
#         """Create and return a superuser with all permissions."""
#         extra_fields.setdefault("is_staff", True)
#         extra_fields.setdefault("is_superuser", True)

#         return self.create_user(email=email, password=password, **extra_fields)

