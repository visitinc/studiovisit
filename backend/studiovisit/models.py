from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    pass

# Create your models here.
class Field(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    def __str__(self):
        return self.name

class Institution(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    location = models.ForeignKey('Location', on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class Location(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    # latlon
    def __str__(self):
        return self.name

class Discourse(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    def __str__(self):
        return self.name

class Discipline(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    def __str__(self):
        return self.name

class Influence(models.Model):
    name = models.CharField(max_length=100)
