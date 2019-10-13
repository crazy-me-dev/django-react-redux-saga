from django.db import models

class Products(models.Model):
    productId = models.AutoField(primary_key=True)
    productName = models.CharField(max_length=200) 
    productUrl = models.URLField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
