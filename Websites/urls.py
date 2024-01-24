from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.theme_basic, name="theme_basic"),
    path('theme_medium', views.theme_medium, name="theme_medium"),
    path('theme_pro', views.theme_pro, name="theme_pro"),
    
]
