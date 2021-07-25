from django.urls import path

from core.views import frontend
from . import views

urlpatterns = [
    path('', frontend, name='home'),
    # path('recipe/', views.CreateRecipeView.as_view(), name='add_recipe'),
    path(r'api/recipe/', views.RecipeView.as_view()),
]
