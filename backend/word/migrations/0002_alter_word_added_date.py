# Generated by Django 4.2.4 on 2023-08-31 20:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('word', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='word',
            name='added_date',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
