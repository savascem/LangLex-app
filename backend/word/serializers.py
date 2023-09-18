from rest_framework import serializers
from .models import Word, WordRepeat


class WordSerializer(serializers.ModelSerializer):
    creator_id = serializers.ReadOnlyField(source='creator.id')
    class Meta:
        model = Word
        fields = '__all__'


class WordRepeatSerializer(serializers.ModelSerializer):
    word_id = serializers.ReadOnlyField(source='word.id')
    class Meta:
        model = WordRepeat
        fields = ['word_id']


class TotalRepeatSerializer(serializers.ModelSerializer):
    word_id = serializers.ReadOnlyField(source='word.id')
    word = serializers.ReadOnlyField(source='word.word')
    word_sentence1 = serializers.ReadOnlyField(source='word.sentence1')
    word_sentence2 = serializers.ReadOnlyField(source='word.sentence2')
    creator_id = serializers.ReadOnlyField(source='creator.id')
    required_repeat = serializers.ReadOnlyField(source='word.repeat')
    added_date = serializers.ReadOnlyField(source='word.added_date')
    class Meta:
        model = WordRepeat
        fields = [
            'word_id', 'creator_id', 'repeat', 'repeat_date', 'required_repeat', 'word', 'word_sentence1', 'word_sentence2', 'added_date'
        ]