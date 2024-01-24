from django.shortcuts import render, redirect
from django.contrib.auth import login, logout
from django.http import HttpResponse
from django.contrib.auth.hashers import make_password
from .models import Account
from django.utils import timezone
from uuid import uuid4 

# views.py
def my_site(request, username):
    context = {
        'username': username,
    }
    return render(request, "my_site.html", context)

def dashboard(request):
    context={}
    return render(request,"dashboard.html", context)

def logoutUser(request):
    print("entering logout")  # This print statement should be executed
    logout(request)
    return redirect('homepage')

def logginout(request):
    logout(request)
    return redirect('homepage')

def create_temp_user(request):
    if not request.user.is_authenticated:
        print("Creating a new user")
        # Create a new temporary user using your custom user model
        unique_id = str(uuid4())[:8]  # Get a unique identifier (e.g., first 8 characters of a UUID)
        timestamp = str(int(timezone.now().timestamp()))[-6:]  # Get the last 6 digits of the current timestamp

        email = f'new_user_{unique_id}_{timestamp}@example.com'
        new_user = Account.objects.create(
            username=f'new_user_{unique_id}',
            email=email,
            password=make_password('password1234')
        )

        # Log in the new user
        login(request, new_user)

        # Redirect the user to the themes_market page
        return redirect('http://127.0.0.1:8000/themes_market')
    else:
        return HttpResponse("User is already logged in")


    










