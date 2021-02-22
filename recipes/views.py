from django.shortcuts import render
from django.views.generic import ListView, CreateView
from django.urls import reverse_lazy
from .models import Recipe
from .forms import RecipeForm
from .serializers import RecipeSerializer
from rest_framework import generics


class RecipeListCreate(generics.ListCreateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer


class HomePageView(ListView):
    model = Recipe
    template_name = 'home.html'


class CreateRecipeView(CreateView):  # новый
    model = Recipe
    form_class = RecipeForm
    template_name = 'recipe.html'
    success_url = reverse_lazy('home')
