from django.contrib import admin

# Register your models here.
from .models import *

admin.site.register(Progress)
admin.site.register(Protocol)
admin.site.register(Project)
admin.site.register(Regulation)
admin.site.register(SecurityType)
admin.site.register(SubscribeMail)