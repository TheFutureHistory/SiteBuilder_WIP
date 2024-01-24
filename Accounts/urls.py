from django.contrib import admin
from django.urls import path, include
from . import views
from django.conf import settings

urlpatterns = [
# urls.py
    path('<str:username>/', views.my_site, name="my_site"),
    path('dashboard/', views.dashboard, name="dashboard"),
    path('logginout', views.logginout, name="logginout"),
    path('create_temp_user', views.create_temp_user, name='create_temp_user')
]