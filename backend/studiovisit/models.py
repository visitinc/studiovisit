from django.db import models

# Create your models here.
class Field(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=500)

