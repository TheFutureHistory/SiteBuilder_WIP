from django.db import models
from Accounts.models import Account

class Website(models.Model):
    THEMES = [
        ('basic', 'basic'),
        ('medium', 'medium'),
        ('pro', 'pro'),
    ]

    created_by = models.OneToOneField(Account, null=True, on_delete= models.CASCADE, verbose_name="user",)
    theme = models.CharField(max_length=20, choices=THEMES)
    date_created = models.DateTimeField(auto_now_add=True, verbose_name='date_created')

    def __str__(self):
            return self.created_by.username
