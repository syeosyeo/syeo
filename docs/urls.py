from django.urls import path
from django.conf.urls import include
from . import views

urlpatterns = [
    path('', views.docs, name='docs/'),
    path('v1/', views.api, name='v1/'),
]