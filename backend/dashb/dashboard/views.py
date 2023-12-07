from django.shortcuts import render
from rest_framework import viewsets
from .serializer import DataSerializer,DataSerializer1,DataSerializer2,DataSerializer3,DataSerializer4,DataSerializer5,DataSerializer6,DataSerializer7,DataSerializer8,DataSerializer9,DataSerializer10,DataSerializer11,DataSerializer12,DataSerializer13
from .models import Data

# Create your views here.



class intensity(viewsets.ModelViewSet):
    queryset=Data.objects.all()
    serializer_class=DataSerializer

class likelihood(viewsets.ModelViewSet):
    queryset=Data.objects.all()
    serializer_class=DataSerializer1

class revelance(viewsets.ModelViewSet):
    queryset=Data.objects.all()
    serializer_class=DataSerializer2

class country(viewsets.ModelViewSet):
    queryset=Data.objects.all()
    serializer_class=DataSerializer3

class topic(viewsets.ModelViewSet):
    queryset=Data.objects.all()
    serializer_class=DataSerializer4

class region(viewsets.ModelViewSet):
    queryset=Data.objects.all()
    serializer_class=DataSerializer5

class city(viewsets.ModelViewSet):
    queryset=Data.objects.all()
    serializer_class=DataSerializer6

class start_year(viewsets.ModelViewSet):
    queryset=Data.objects.all()
    serializer_class=DataSerializer7

class end_year(viewsets.ModelViewSet):
    queryset=Data.objects.all()
    serializer_class=DataSerializer8

class published(viewsets.ModelViewSet):
    queryset=Data.objects.all()
    serializer_class=DataSerializer9

class double(viewsets.ModelViewSet):
    queryset=Data.objects.all()
    serializer_class=DataSerializer10

class inventry(viewsets.ModelViewSet):
    queryset=Data.objects.all()
    serializer_class=DataSerializer11

class resourse(viewsets.ModelViewSet):
    queryset=Data.objects.all()
    serializer_class=DataSerializer12

class insight(viewsets.ModelViewSet):
    queryset=Data.objects.all()
    serializer_class=DataSerializer13