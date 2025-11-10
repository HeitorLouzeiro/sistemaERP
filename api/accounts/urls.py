# accounts/urls.py
from accounts.views.signin import Signin
from accounts.views.signup import Signup
from accounts.views.user import GetUser
from django.urls import path

urlpatterns = [

    path('signin', Signin.as_view(), name='signin'),
    path('signup', Signup.as_view(), name='signup'),
    path('user', GetUser.as_view(), name='get_user'),
]
