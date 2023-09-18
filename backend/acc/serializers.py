from rest_framework import serializers
from .models import User, UserProfile
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
import datetime


class UserSerializer(serializers.ModelSerializer):

    email = serializers.EmailField(write_only=True)
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = [
            'email', 'password',
        ]

    def validate_password(self, value):
        if len(value) < 8:
            raise serializers.ValidationError("Password have to take min. 8 char.")
        
        if not any(char.isdigit() for char in value):
            raise serializers.ValidationError("Password have to take min. digit")

        return value
    
    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
        )
        user.set_password(validated_data['password'])
        user.save()

        return user
    

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['iat'] = datetime.datetime.now()
        token['user'] = user.email
        token['date'] = str(datetime.date.today())

        return token
        

class UserProfileSerializer(serializers.ModelSerializer):

    user_id = serializers.ReadOnlyField(source='user.id')

    class Meta:
        model = UserProfile
        fields = '__all__'

    def validate(self, data):
        if data['interested_area1'] == data['interested_area2']:
            raise serializers.ValidationError('Choose different interested areas..')
        return data
