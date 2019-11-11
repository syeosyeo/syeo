from django.urls import path
from django.conf.urls import include
from django.views.generic import RedirectView
from . import views
from rest_framework.routers import DefaultRouter
from django.views.decorators.csrf import ensure_csrf_cookie
from django.contrib.auth import views as auth_views



router = DefaultRouter()
router.register(r'subscribe', views.SubscribeViewSet)
router.register(r'projects', views.ProjectViewSet)

urlpatterns = [
	path('', RedirectView.as_view(url='/home')),
	path('home/', views.home, name='home'),
	path('api/', include(router.urls)),
	path('terms_of_service/', views.termsofservice, name='termsofservice/'),
	path('privacy_policy/', views.privacypolicy, name='privacypolicy/'),
	path('sto_radar/', views.stoRadar, name='stoRadar/'),
	path('research/', views.research, name='research/'),
	path('tech/', views.tech, name='tech/'),
	path('docs/', views.docs, name='docs/'),
	path('sitemap.xml/',views.sitemap, name='sitemap.xml/'),
	path('v1/', views.api, name='v1/'),
	path('login/', ensure_csrf_cookie(views.signin), name='login'),
	path('logout/', ensure_csrf_cookie(auth_views.LogoutView.as_view(template_name="core/logout.html")), name='logout')
]