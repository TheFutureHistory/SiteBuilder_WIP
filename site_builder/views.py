from django.shortcuts import render, redirect

def homepage(request):
    context={}
    return render(request,"homepage.html", context)

def themes_market(request):
    context={}
    return render(request,"themes_market.html", context)
