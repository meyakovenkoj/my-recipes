from django.db import models


class Recipe(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=300)
    image = models.ImageField(default='default.png')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
