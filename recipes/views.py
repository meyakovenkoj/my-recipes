from django.shortcuts import render
from django.views.generic import ListView, CreateView
from django.urls import reverse_lazy
from .models import Recipe
from .forms import RecipeForm


class HomePageView(ListView):
    model = Recipe
    template_name = 'home.html'


class CreateRecipeView(CreateView):  # новый
    model = Recipe
    form_class = RecipeForm
    template_name = 'recipe.html'
    success_url = reverse_lazy('home')
