from jobitems.models import JobItems
from rest_framework import viewsets, permissions
from .serializers import JobItemsSerializer

# JobItems Viewset


class JobItemsViewSet(viewsets.ModelViewSet):
    queryset = JobItems.objects.all()
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = JobItemsSerializer
