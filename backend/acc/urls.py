from django.urls import path, re_path
from . import views

urlpatterns = [
    path('create/', views.UserModelView.as_view(), name='user_model'),
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('profile/<str:user_id>/', views.UserProfileView.as_view(), name='user_profile'),

]