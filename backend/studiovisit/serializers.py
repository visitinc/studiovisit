from .models import Field
from rest_framework import serializers
from django.conf import settings

class FieldSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Field
        fields = ('name', 'description')
