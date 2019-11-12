from rest_framework import serializers

from .models import *


class SubscribeSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = SubscribeMail
    fields = ('id', 'email', 'language')