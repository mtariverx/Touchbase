# Generated by Django 2.1.1 on 2019-04-23 02:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_account_s_spf'),
    ]

    operations = [
        migrations.AddField(
            model_name='account',
            name='oauth',
            field=models.BooleanField(default=False),
        ),
    ]
