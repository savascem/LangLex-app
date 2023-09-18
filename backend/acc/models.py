from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractUser


# user creation & manage

class UserManager(BaseUserManager):

    def create_user(
            self, email, password, is_staff=False, is_superuser=False
            ):
        if not email:
            raise ValueError('User must have an email')
        
        user = self.model(email=self.normalize_email(email))
        user.set_password(password)
        user.is_active = True
        user.is_staff = is_staff
        user.is_superuser = is_superuser
        user.save()

        return user
    
    def create_superuser(
                self, email, password,
            ):
        user = self.create_user(
            email=email,
            password=password,
            is_staff=True,
            is_superuser=True,
        )
        user.save()

        return user


class User(AbstractUser):
    first_name = None
    last_name = None
    email = models.EmailField(max_length=250, verbose_name='Email', unique=True)
    password = models.CharField(max_length=250)
    username = None
    last_login = models.DateTimeField(auto_now=True)

    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ['password']


# user Profile create with signals


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, blank=True, null=True)
    first_name = models.CharField(max_length=15, blank=True)
    last_name = models.CharField(max_length=15, blank=True)
    native_language = models.CharField(max_length=30, blank=True)
    interested_area1 = models.CharField(max_length=20, blank=True)
    interested_area2 = models.CharField(max_length=20, blank=True)
    daily_goal = models.IntegerField(default=3)
    profile_picture = models.ImageField(blank=True, upload_to='user/picture')
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)