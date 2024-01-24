# Generated by Django 5.0.1 on 2024-01-03 23:34

import datetime
import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="AccountAwareModel",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Account",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("password", models.CharField(max_length=128, verbose_name="password")),
                ("username", models.CharField(max_length=20, unique=True)),
                ("subdomain", models.CharField(default="sub", max_length=255)),
                (
                    "email",
                    models.EmailField(max_length=60, unique=True, verbose_name="email"),
                ),
                ("paid", models.BooleanField(default=False)),
                ("stripe", models.CharField(default="empty", max_length=67, null=True)),
                (
                    "date_paid",
                    models.DateTimeField(blank=True, default=datetime.datetime.now),
                ),
                (
                    "date_joined",
                    models.DateTimeField(auto_now_add=True, verbose_name="date joined"),
                ),
                (
                    "last_login",
                    models.DateTimeField(auto_now_add=True, verbose_name="last login"),
                ),
                ("is_admin", models.BooleanField(default=False)),
                ("is_active", models.BooleanField(default=True)),
                ("is_staff", models.BooleanField(default=False)),
                ("is_superuser", models.BooleanField(default=False)),
            ],
            options={
                "abstract": False,
            },
        ),
        migrations.CreateModel(
            name="Member",
            fields=[
                (
                    "accountawaremodel_ptr",
                    models.OneToOneField(
                        auto_created=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        parent_link=True,
                        primary_key=True,
                        serialize=False,
                        to="Accounts.accountawaremodel",
                    ),
                ),
                ("username", models.CharField(max_length=20, unique=True)),
            ],
            bases=("Accounts.accountawaremodel",),
        ),
        migrations.AddField(
            model_name="accountawaremodel",
            name="account",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL
            ),
        ),
    ]
