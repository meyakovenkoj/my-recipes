from django.shortcuts import render


def frontend(request):
    return render(request, "../frontend/build/index.html")
