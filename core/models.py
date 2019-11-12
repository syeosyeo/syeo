from django.db import models

# Create your models here.

class SubscribeMail(models.Model):
  email = models.EmailField()
  language = models.CharField(max_length=30, default='English')
  def __str__(self):
    return self.email
