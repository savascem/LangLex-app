# Generated by Django 4.2.4 on 2023-09-02 07:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('acc', '0003_userprofile_native_language'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userprofile',
            name='premium',
        ),
    ]
