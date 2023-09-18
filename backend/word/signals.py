from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Word, WordRepeat

@receiver(post_save, sender=Word)
def create_word_repeat(sender, instance, created, **kwargs):
    if created:
        WordRepeat.objects.create(
            creator=instance.creator,
            word=instance
        )