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
from .forms import LoginForm
from django.contrib.auth import authenticate, login, logout, get_user_model
from django.contrib.auth.decorators import login_required
import requests
import json


# Create your views here.
def home(request):
  return render(request, "core/home.html")

def privacypolicy(request):
	return render(request, 'core/privacypolicy.html')

def termsofservice(request):
	return render(request, 'core/termsofservice.html')

def docs(request):
	return render(request, 'core/docs.html')

def sitemap(request):
	return HttpResponse(open('core/sitemap.xml').read(), content_type='text/xml')

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


def signin(request):
  if request.method == "POST":
    form = LoginForm(request.POST)
    username = request.POST['username']
    password = request.POST['password']

    headers = {'Content-Type': 'application/json; charset=utf-8'}
    payload = {"username": username, "password": password}
    auth_url = "http://localhost:5000/api/login"

    res = requests.post(auth_url, data=json.dumps(payload), headers=headers)

    if res.status_code != 200:
      return HttpResponse("Failed to login. Please try again.")

    request.session['access_token'] = res.json()['access_token']

    user = authenticate(username = username)
    
    login(request, user)
    request.session.set_expiry(900)   # same as access token's expiry age

    return redirect('/')

  else:
    logined_user = request.user.get_username()
    if logined_user == "":
      form = LoginForm()
      return render(request, 'core/login.html', {'form': form})
    else:
      return HttpResponse('Already logined as %s.' % logined_user)


@login_required
def profile(request):
  user = request.user
  profile_url = "http://localhost:5000/api/user/" + str(user)
  access_token = request.session.get('access_token', False)
  headers = {'Authorization': 'Bearer ' + access_token}
  res = requests.get(profile_url, headers=headers)

  # Server error or access token is expired.
  if res.status_code != 200:
    return HttpResponse("Server Error. Please try again.")

  data = res.json()

  return render(request, 'core/profile.html', {'data': data})