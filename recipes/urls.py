from django.urls import path

from . import views

urlpatterns = [
    path('', views.HomePageView.as_view(), name='home'),
    path('recipe/', views.CreateRecipeView.as_view(), name='add_recipe'),
    path('api/recipe/', views.RecipeListCreate.as_view()),
]
