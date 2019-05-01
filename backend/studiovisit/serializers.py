from .models import Practice
from rest_framework import serializers
from django.conf import settings

class PracticeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Practice
        fields = ('name')
