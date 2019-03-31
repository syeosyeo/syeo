from django.db import models

# Create your models here.

class Progress(models.Model):
  progress = models.CharField(max_length=100)
  def __str__(self):
    return self.progress

class Protocol(models.Model):
  name = models.CharField(max_length=100)
  def __str__(self):
    return self.name

class Regulation(models.Model):
  name = models.CharField(max_length=100)
  def __str__(self):
    return self.name

class SecurityType(models.Model):
  name = models.CharField(max_length=100)
  def __str__(self):
    return self.name

class SubscribeMail(models.Model):
  email = models.EmailField()
  def __str__(self):
    return self.email

class Project(models.Model):
  name = models.CharField(max_length= 100)
  description = models.TextField()
  description_kr = models.TextField(blank=True, null=True)
  progress = models.ForeignKey(Progress, on_delete=models.CASCADE)
  security_type = models.ManyToManyField(SecurityType)
  regulation = models.ManyToManyField(Regulation)
  status = models.TextField()
  status_kr = models.TextField(blank=True, null=True)
  protocol = models.ForeignKey(Protocol, on_delete=models.CASCADE)

  def __str__(self):
    return self.name