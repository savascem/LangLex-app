from django.db import models
from acc.models import User


class Word(models.Model):
    creator = models.ForeignKey(User, on_delete=models.CASCADE)
    word = models.CharField(max_length=30, unique=True)
    sentence1 = models.CharField(max_length=250, blank=True)
    sentence2 = models.CharField(max_length=250, blank=True)
    repeat = models.IntegerField(default=0)
    added_date = models.DateTimeField(auto_now_add=True)


class WordRepeat(models.Model):
    creator = models.ForeignKey(User, on_delete=models.CASCADE)
    word = models.ForeignKey(Word, on_delete=models.CASCADE)
    repeat = models.IntegerField(default=0)
    repeat_date = models.DateTimeField(auto_now=True)
    is_finished = models.BooleanField(default=False)
