from rest_framework import serializers
from jobitems.models import JobItems


class JobItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobItems
        fields = '__all__'
