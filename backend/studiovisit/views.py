from django.shortcuts import render
from django.conf import settings
from studiovisit.models import Practice
from rest_framework import viewsets
from studiovisit.serializers import PracticeSerializer

def index(request):
    return render(request, 'index.html')

class PracticeViewSet(viewsets.ModelViewSet):
    """ API endpoint that allows customers to be viewed and edited """
    queryset = Practice.objects.all()
    serializer_class = PracticeSerializer
