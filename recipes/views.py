from django.shortcuts import render
from .models import Recipe
from rest_framework.response import Response
from .serializers import RecipeSerializer
from rest_framework.views import APIView
from rest_framework import status
from django.http import JsonResponse
from rest_framework.parsers import MultiPartParser, FormParser


class RecipeView(APIView):
    # permission_classes = (AllowAny,)
    # http_method_names = ["get"]
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request):
        Recipes = list(Recipe.objects.all().values())
        # print(Recipes)
        if Recipes != []:
            return Response({"Recipes": Recipes}, status=status.HTTP_200_OK)
        else:
            return Response({"Recipes": "There is no requested"}, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = RecipeSerializer(data=request.data)
        if serializer.is_valid():
            data = serializer.save()
            # [{'id': data.id, 'name': data.name, 'description': data.description, 'image': str(data.image)}]
            # print([data.id, data.name, data.description, str(data.image)])
            return Response({"Recipes": {'id': data.id, 'name': data.name, 'description': data.description, 'image': str(data.image)}}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request):
        # print(request.method)
        id = request.query_params.get('id', None)
        if id != None:
            id = int(id)
            item = Recipe.objects.all().filter(id=id)
            item.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)
