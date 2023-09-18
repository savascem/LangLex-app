from django.contrib import admin
from .models import Word, WordRepeat


class WordAdmin(admin.ModelAdmin):
    list_display = [
        'word', 'repeat', 'added_date'
    ]

admin.site.register(Word, WordAdmin)

class WordRepeatAdmin(admin.ModelAdmin):
    list_display = [
        'word', 'creator', 'repeat', 'repeat_date'
    ]
admin.site.register(WordRepeat, WordRepeatAdmin)