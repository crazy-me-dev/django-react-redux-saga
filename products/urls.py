from rest_framework import routers
from .api import ProductsViewSet

router = routers.DefaultRouter()
router.register('api/products', ProductsViewSet, 'products')

urlpatterns = router.urls
