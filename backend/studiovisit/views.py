from django.shortcuts import render
from django.conf import settings
from studiovisit.models import Field
from rest_framework import viewsets
from studiovisit.serializers import FieldSerializer

def index(request):
    return render(request, 'index.html')

class FieldViewSet(viewsets.ModelViewSet):
    """ API endpoint that allows customers to be viewed and edited """
    queryset = Field.objects.all()
    serializer_class = FieldSerializer
