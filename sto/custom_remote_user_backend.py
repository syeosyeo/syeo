from django.contrib.auth import get_user_model

import requests
import json

User = get_user_model()

auth_url = "http://localhost:5000/api/login"



class UserBackend(object):
    def authenticate(self, request, username=None, **kwargs):
        if not username or username=="":
            return None

        # headers = {'Content-Type': 'application/json; charset=utf-8'}
        # payload = {"username": username, "password": password}

        # res = requests.post(auth_url, data=json.dumps(payload), headers=headers)

        # if res.status_code != 200 or "access_token" not in res.json().keys():
        #     return None

        # # token = res.json()["access_token"]
        # request.session['access_token'] = res.json()["access_token"]

        try:
            user = User.objects.get(username=username)
        except User.DoesNotExist:
            user = User(username=username)
            user.is_staff = False
            user.is_superuser = False
            user.save()
        return user

    
    def get_user(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            return None