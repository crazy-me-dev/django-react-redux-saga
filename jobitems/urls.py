from rest_framework import routers
from .api import JobItemsViewSet

router = routers.DefaultRouter()
router.register('api/jobitems', JobItemsViewSet, 'jobitems')

urlpatterns = router.urls
