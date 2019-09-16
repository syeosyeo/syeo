from django.shortcuts import render, redirect, get_object_or_404
from django.db.models import Q
from rest_framework import generics, permissions, viewsets, mixins
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import HttpResponse, JsonResponse
from .models import *
from .serializers import *
from time import sleep

# Create your views here.
def home(request):
  return render(request, "core/home.html")

def privacypolicy(request):
	return render(request, 'core/privacypolicy.html')

def termsofservice(request):
	return render(request, 'core/termsofservice.html')

def stoRadar(request):
	return render(request, 'core/stoRadar.html')

def research(request):
	return render(request, 'core/research.html')

def tech(request):
	return render(request, 'core/tech.html')

def docs(request):
	return render(request, 'core/docs.html')

def api(request):
	sleep(1)
	return JsonResponse({"error": "Authorization failed. Please check your API key."})

def sitemap(request):
	return HttpResponse(open('core/sitemap.xml').read(), content_type='text/xml')

class ProjectViewSet(mixins.ListModelMixin,
                    mixins.CreateModelMixin,
                    viewsets.GenericViewSet):
  queryset = Project.objects.all()
  serializer_class = ProjectSerializer

  def list(self, request):
    q = request.query_params["q"]
    #progress
    progress = request.query_params.get("progress", False)
    #security type
    secEquity = request.query_params.get("secEquity", False)
    secRev = request.query_params.get("secRev", False)
    secEstate = request.query_params.get("secEstate", False)
    secFund = request.query_params.get("secFund", False)
    secBond = request.query_params.get("secBond", False)
    secOthers = request.query_params.get("secOthers", False)
    #regulation
    regD506b = request.query_params.get("regD506b", False)
    regD506c = request.query_params.get("regD506c", False)
    regS = request.query_params.get("regS", False)
    regCF = request.query_params.get("regCF", False)
    regA = request.query_params.get("regA", False)
    regOthers = request.query_params.get("regOthers", False)
    #protocol
    protocol = request.query_params.get("protocol", False)

    #progress
    queryset = Project.objects.filter(progress__progress=progress)
    #security type
    included_types = []
    if secEquity:
      included_types.append("Equity")
    if secRev:
      included_types.append("Revenue sharing")
    if secEstate:
      included_types.append("Real estate")
    if secFund:
      included_types.append("Fund")
    if secBond:
      included_types.append("Bond")
    if secOthers:
      regular_types = ["Equity", "Revenue sharing", "Real estate", "Fund", "Bond"]
      in_others = SecurityType.objects.exclude(name__in=regular_types)
      for other in in_others:
        included_types.append(other.name)
    if len(included_types) > 0:
      queryset = queryset.filter(security_type__name__in=included_types).exclude(security_type=None).distinct()

    # if secEquity:
    #   queryset = queryset.filter(security_type__name="Equity")
    # if secRev:
    #   queryset = queryset.filter(security_type__name="Revenue sharing")
    # if secEstate:
    #   queryset = queryset.filter(security_type__name="Real estate")
    # if secFund:
    #   queryset = queryset.filter(security_type__name="Fund")
    # if secBond:
    #   queryset = queryset.filter(security_type__name="Bond")
    # if secOthers:
    #   regular_security_types = ["Equity", "Revenue sharing", "Real estate", "Fund", "Bond"]
    #   in_others = SecurityType.objects.exclude(name__in=regular_security_types)
    #   queryset = queryset.filter(security_type__in=in_others).exclude(security_type=None).distinct()

    #regulation
    included_regulations = []
    if regD506b:
      included_regulations.append("Regulation D(506b)")
    if regD506c:
      included_regulations.append("Regulation D(506c)")
    if regS:
      included_regulations.append("Regulation S")
    if regCF:
      included_regulations.append("Regulation CF")
    if regA:
      included_regulations.append("Regulation A+")
    if regOthers:
      regular_regulations = ["Regulation D(506b)", "Regulation D(506c)", "Regulation S", "Regulation CF", "Regulation A+"]
      in_others = Regulation.objects.exclude(name__in=regular_regulations)
      for other in in_others:
        included_regulations.append(other.name)
    if len(included_regulations) > 0:
      queryset = queryset.filter(regulation__name__in=included_regulations).exclude(regulation=None).distinct()

    # if regD506b:
    #   queryset = queryset.filter(regulation__name="Regulation D(506b)")
    # if regD506c:
    #   queryset = queryset.filter(regulation__name="Regulation D(506c)")
    # if regS:
    #   queryset = queryset.filter(regulation__name="Regulation S")
    # if regCF:
    #   queryset = queryset.filter(regulation__name="Regulation CF")
    # if regA:
    #   queryset = queryset.filter(regulation__name="Regulation A+")
    # if regOthers:
    #   regular_regulations = ["Regulation D(506b)", "Regulation D(506c)", "Regulation S", "Regulation CF", "Regulation A+"]
    #   in_others = Regulation.objects.exclude(name__in=regular_regulations)
    #   queryset = queryset.filter(regulation__in=in_others).exclude(regulation=None).distinct()

    #protocol
    if protocol:
      queryset = queryset.filter(protocol__name=protocol)
    
    page_size = int(request.query_params.get('page_size', 1))
    page = int(request.query_params.get('page', 1))

    if page < 1:
      page = 1
    start = (page - 1) * page_size
    end = start + page_size

    data = ProjectSerializer(queryset.order_by('name')[start:end], many=True).data
    return Response({'count': queryset.count(), 'page_size': page_size, 'page': page, 'results': data})

  def perform_create(self, serializer):
    if self.request.user.is_superuser:
      serializer.save()
    else:
      raise serializers.ValidationError("You don't have authority to post.")

class SubscribeViewSet(viewsets.ModelViewSet):
  queryset = SubscribeMail.objects.all()
  serializer_class = SubscribeSerializer

  def list(self, request):
    if request.user.is_superuser:
      queryset = SubscribeMail.objects.all()
      data = SubscribeSerializer(queryset, many=True).data
      return Response({'subscribers': data})
    else:
      raise serializers.ValidationError("You don't have any authority to get.")

  def perform_create(self, serializer):
    inputEmail = self.request.data['email']
    givenEmail = SubscribeMail.objects.filter(email=inputEmail)
    if givenEmail.exists():
      raise serializers.ValidationError('""Already exist!')
    else:
      serializer.save()

