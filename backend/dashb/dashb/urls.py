"""dashb URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from dashboard import views
from rest_framework.routers import DefaultRouter


router=DefaultRouter()
router.register('intensity',views.intensity,basename='intensity')
router.register('topic',views.topic,basename='topic')
router.register('city',views.city,basename='city')
router.register('region',views.region,basename='region')
router.register('revelance',views.revelance,basename='revelance')
router.register('start_year',views.start_year,basename='start_year')
router.register('end_year',views.end_year,basename='end_year')
router.register('country',views.country,basename='country')
router.register('likelihood',views.likelihood,basename='likelihood')
router.register('published',views.published,basename='published')
router.register('double',views.double,basename='double')
router.register('inventry',views.inventry,basename='inventry')
router.register('resourse',views.resourse,basename='resourse')
router.register('insight',views.insight,basename='insight')

urlpatterns = [
    path('admin/', admin.site.urls),
    path("",include(router.urls))
]
