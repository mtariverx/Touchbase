# Generated by Django 2.1.1 on 2019-04-12 20:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0007_userprofile_interest_tags'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='haspSPF',
            field=models.BooleanField(default=False),
        ),
    ]