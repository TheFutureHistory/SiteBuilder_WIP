from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path("admin/", admin.site.urls),

    path('temp_homepage', views.homepage, name="homepage"),
    path('themes_market', views.themes_market, name="themes_market"),

    # APPS URL
    path('', include('Accounts.urls')),
    path('', include('Websites.urls')),
    
]
