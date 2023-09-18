# Generated by Django 4.2.4 on 2023-08-31 20:45

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Word',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('added_date', models.DateTimeField(auto_created=True)),
                ('word', models.CharField(blank=True, max_length=30)),
                ('sentence1', models.CharField(blank=True, max_length=250)),
                ('sentence2', models.CharField(blank=True, max_length=250)),
                ('repeat', models.IntegerField(default=0)),
                ('last_repeat', models.DateTimeField(auto_now_add=True)),
                ('creator', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]