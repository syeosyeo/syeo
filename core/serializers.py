from rest_framework import serializers

from .models import *

class ProgressSerializer(serializers.ModelSerializer):
  class Meta:
    model = Progress
    fields = ('progress',)
class SecurityTypeSerializer(serializers.ModelSerializer):
  class Meta:
    model = SecurityType
    fields = ('id', 'name',)
class RegulationSerializer(serializers.ModelSerializer):
  class Meta:
    model = Regulation
    fields = ('id', 'name',)
class ProtocolSerializer(serializers.ModelSerializer):
  class Meta:
    model = Protocol
    fields = ('name',)
    
class ProjectSerializer(serializers.ModelSerializer):
  progress = ProgressSerializer()
  security_type = SecurityTypeSerializer(many=True)
  regulation = RegulationSerializer(many=True)
  protocol = ProtocolSerializer()
  class Meta:
    model = Project
    fields = ('id', 'name', 'description', 'description_kr', 'progress', 'security_type', 'regulation', 'status', 'status_kr', 'protocol')

class SubscribeSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = SubscribeMail
    fields = ('id', 'email', 'language')