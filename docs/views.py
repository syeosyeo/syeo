from django.shortcuts import render
from django.http import JsonResponse
from time import sleep

# Create your views here.

def docs(request):
	return render(request, 'core/docs.html')

def api(request):
	sleep(1)
	return JsonResponse({"error": "Authorization failed. Please check your API key."})