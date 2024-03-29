from types import NoneType
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager 
from django.db import models
from django.db import models
from datetime import timedelta, datetime

class MyAccountManager(BaseUserManager):
    def create_user(self, email, username, password=None):
        if not email:
            raise ValueError("Users must have a valid email address")
        if not username:
            raise ValueError("Users must have an username")

        user = self.model(
            email=self.normalize_email(email),
            username=username,
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    
    def create_superuser(self, email, username, password):
        user = self.create_user(
               email=self.normalize_email(email),
               password=password,
               username=username,
            )
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class Account(AbstractBaseUser):
    username     = models.CharField(max_length=20, unique=True)
    subdomain    = models.CharField(max_length=255, default="sub")
    email        = models.EmailField(verbose_name="email", max_length=60, unique=True)
    paid         = models.BooleanField(default=False)
    stripe       = models.CharField(max_length=67, default="empty", null=True)
    date_paid    = models.DateTimeField(blank=True, default=datetime.now)
    date_joined  = models.DateTimeField(verbose_name='date joined', auto_now_add=True)
    last_login   = models.DateTimeField(verbose_name='last login', auto_now_add=True)
    is_admin     = models.BooleanField(default=False)
    is_active    = models.BooleanField(default=True)
    is_staff     = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False) 

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    objects = MyAccountManager()

    def __str__(self):
        return self.username

    def has_perm(self,perm,obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return True

    @property
    def AccountExpiration(self):
        date_paid = self.date_paid.date() 
        expiration_time = timedelta(days=365)
        expiration_date = date_paid + expiration_time
        print('expiration date')
        return expiration_date


