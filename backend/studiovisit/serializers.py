from .models import Field
from rest_framework import serializers
import stripe
from django.conf import settings

class FieldSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Field
        fields = ('name', 'description')
