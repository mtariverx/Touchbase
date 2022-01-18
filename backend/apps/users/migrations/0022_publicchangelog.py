# Generated by Django 2.1.1 on 2019-07-15 20:40

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0021_spfserviceid_steam'),
    ]

    operations = [
        migrations.CreateModel(
            name='PublicChangeLog',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('statement', models.CharField(default='', max_length=32)),
                ('service', models.CharField(default='', max_length=100)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='changes', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
