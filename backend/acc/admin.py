from django.contrib import admin
from .models import User, UserProfile


class UserAdmin(admin.ModelAdmin):
    readonly_fields = ('password', 'last_login', 'date_joined')
    list_display = ['email', 'last_login']


class UserProfileAdmin(admin.ModelAdmin):
    list_display = ['user', 'first_name', 'last_name']


admin.site.register(User, UserAdmin)
admin.site.register(UserProfile, UserProfileAdmin)
