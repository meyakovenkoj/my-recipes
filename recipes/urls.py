from django.urls import path

from .views import HomePageView, CreateRecipeView

urlpatterns = [
    path('', HomePageView.as_view(), name='home'),
    path('recipe/', CreateRecipeView.as_view(), name='add_recipe'),
]
