from django.shortcuts import render
from rest_framework import generics, status
from .serializers import UserSerializer, MyTokenObtainPairSerializer, UserProfileSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.utils import timezone
from .models import UserProfile


class UserModelView(generics.CreateAPIView):
    serializer_class = UserSerializer


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
    
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        
        if response.status_code == status.HTTP_200_OK:
            user = self.request.user
            if user and user.is_authenticated:
                user.last_login = timezone.now()
                user.save()
        
        return response
    

class UserProfileView(generics.RetrieveUpdateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    lookup_field = 'user_id'
