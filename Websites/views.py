from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import Website
from django.shortcuts import get_object_or_404

@login_required
def theme_basic(request):
    user = request.user
    website_exists = Website.objects.filter(created_by=user).exists()
    if website_exists:
        context = {}
        return render(request, "theme_basic.html", context)
    else:
        website = Website.objects.create(created_by=user, theme='basic')
        context = {}
        return render(request, "theme_basic.html", context)

@login_required
def theme_medium(request):
    user = request.user
    website_exists = Website.objects.filter(created_by=user).exists()
    if website_exists:
        context = {}
        return render(request, "theme_medium.html", context)
    else:
        website = Website.objects.create(created_by=user, theme='medium')
        context = {}
        return render(request, "theme_medium.html", context)

@login_required
def theme_pro(request):
    user = request.user
    website_exists = Website.objects.filter(created_by=user).exists()
    if website_exists:
        context = {}
        return render(request, "theme_pro.html", context)
    else:
        website = Website.objects.create(created_by=user, theme='pro')
        context = {}
        return render(request, "theme_pro.html", context)
