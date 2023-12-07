from rest_framework import serializers
from .models import Data

class DataSerializer(serializers.ModelSerializer):
    class Meta:
        model=Data
        fields=['intensity']


class DataSerializer1(serializers.ModelSerializer):
    class Meta:
        model=Data
        fields=['likelihood']

class DataSerializer2(serializers.ModelSerializer):
    class Meta:
        model=Data
        fields=['relevance']

class DataSerializer3(serializers.ModelSerializer):
    class Meta:
        model=Data
        fields=['country']

class DataSerializer4(serializers.ModelSerializer):
    class Meta:
        model=Data
        fields=['topic']

class DataSerializer5(serializers.ModelSerializer):
    class Meta:
        model=Data
        fields=['region']

class DataSerializer6(serializers.ModelSerializer):
    class Meta:
        model=Data
        fields=['city']

class DataSerializer7(serializers.ModelSerializer):
    class Meta:
        model=Data
        fields=['start_year']

class DataSerializer8(serializers.ModelSerializer):
    class Meta:
        model=Data
        fields=['end_year']

class DataSerializer9(serializers.ModelSerializer):
    class Meta:
        model=Data
        fields=['published']

class DataSerializer10(serializers.ModelSerializer):
    class Meta:
        model=Data
        fields=['intensity','relevance']

class DataSerializer11(serializers.ModelSerializer):
    class Meta:
        model=Data
        fields=['intensity','relevance','published','end_year','region','topic','start_year','country']

class DataSerializer12(serializers.ModelSerializer):
    class Meta:
        model=Data
        fields=['title','added','url']

class DataSerializer13(serializers.ModelSerializer):
    class Meta:
        model=Data
        fields=['topic','sector','insight','end_year']