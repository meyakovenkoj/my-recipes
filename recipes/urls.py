from django.urls import path

from . import views

urlpatterns = [
    # path('', views.HomePageView.as_view(), name='home'),
    # path('recipe/', views.CreateRecipeView.as_view(), name='add_recipe'),
    path(r'api/recipe/', views.RecipeView.as_view()),
]
