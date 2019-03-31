from django.urls import path
from django.conf.urls import include
from django.views.generic import RedirectView
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'subscribe', views.SubscribeViewSet)
router.register(r'projects', views.ProjectViewSet)

urlpatterns = [
	path('', RedirectView.as_view(url='/home')),
	path('home/', views.home, name='home'),
	path('api/', include(router.urls)),
	path('terms_of_service/', views.termsofservice, name='termsofservice/'),
	path('privacy_policy/', views.privacypolicy, name='privacypolicy/'),
]