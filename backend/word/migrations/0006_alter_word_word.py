# Generated by Django 4.2.4 on 2023-09-13 09:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('word', '0005_wordrepeat_is_finished'),
    ]

    operations = [
        migrations.AlterField(
            model_name='word',
            name='word',
            field=models.CharField(max_length=30, unique=True),
        ),
    ]
