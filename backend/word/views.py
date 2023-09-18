from django.shortcuts import render
from rest_framework import generics, views
from .serializers import WordSerializer, WordRepeatSerializer, TotalRepeatSerializer
from .models import Word, WordRepeat
from datetime import date, datetime
from django.db.models import Count

from rest_framework import status
from rest_framework.response import Response


class WordView(generics.ListCreateAPIView):
    queryset = Word.objects.all()
    serializer_class = WordSerializer

    
class WordTodayView(generics.ListAPIView):
    queryset = Word.objects.all()
    serializer_class = WordSerializer

    def get_queryset(self):
        today = date.today()
        creator_id = self.kwargs['creator_id']
        data = Word.objects.filter(creator_id=creator_id, added_date__year=today.year, added_date__month=today.month, added_date__day=today.day)
        return data
    

class WordUserAllTimeView(generics.ListAPIView):
    queryset = Word.objects.all()
    serializer_class = WordSerializer

    def get_queryset(self):
        creator_id = self.kwargs['creator_id']
        data = Word.objects.filter(creator_id=creator_id)
        return data
    

class WordDeleteView(generics.RetrieveDestroyAPIView):
    queryset = Word.objects.all()
    serializer_class = WordSerializer


class WordUpdateView(generics.RetrieveUpdateAPIView):
    queryset = Word.objects.all()
    serializer_class = WordSerializer


class WordRepeatView(generics.RetrieveUpdateAPIView):
    queryset = WordRepeat.objects.all()
    serializer_class = WordRepeatSerializer
    lookup_field = 'word_id'

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        
        if instance.is_finished:
            raise ValueError('You reach your repeat goal for this word!')
        else:
            if instance.repeat_date.date() != date.today():
                instance.repeat += 1
                instance.repeat_date = date.today() 
                if instance.repeat == instance.word.repeat:
                    instance.is_finished = True
        instance.save()  

        return super().update(request, *args, **kwargs)


class TotalRepeatView(generics.ListAPIView):
    queryset = WordRepeat.objects.all()
    serializer_class = TotalRepeatSerializer
    
    def get_queryset(self):
        today = date.today()
        creator_id = self.kwargs['creator_id']
        data = WordRepeat.objects.filter(creator_id=creator_id, is_finished=False, repeat_date__date__lt=today)
        return data
    

class UniqueDateListView(views.APIView):
    def get(self, request, creator_id):
        # Creator ID'ye göre Word verilerini filtrele
        words = Word.objects.filter(creator_id=creator_id)

        # Benzersiz tarihleri bulmak için annotate kullan
        unique_dates = words.values('added_date__day', 'added_date__month', 'added_date__year').annotate(count=Count('added_date')).order_by('added_date__year').order_by('added_date__month').order_by('added_date__day')

        # Benzersiz tarihleri liste haline getir
        unique_date_list = [
            {
                'day': item['added_date__day'],
                'month': item['added_date__month'],
                'year': item['added_date__year'],
            }
            for item in unique_dates
        ]

        # Her benzersiz tarih için ilişkili Word nesnelerini al
        unique_date_with_words = []
        for item in unique_date_list:
            words_for_date = words.filter(added_date__day=item['day'], added_date__month=item['month'], added_date__year=item['year'])
            serialized_words = WordSerializer(words_for_date, many=True).data
            unique_date_with_words.append({
                'day': item['day'],
                'month': item['month'],
                'year': item['year'],
                'words': serialized_words,
            })

        return Response(unique_date_with_words)