# Generated by Django 2.1.1 on 2019-07-23 21:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0022_publicchangelog'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='has_tcss',
            field=models.BooleanField(default=False),
        ),
    ]
