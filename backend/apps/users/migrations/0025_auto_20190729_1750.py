# Generated by Django 2.1.1 on 2019-07-29 17:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0024_auto_20190729_1646'),
    ]

    operations = [
        migrations.AddField(
            model_name='usersettings',
            name='tra_count',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='publicchangelog',
            name='service',
            field=models.CharField(blank=True, default='', max_length=100),
        ),
        migrations.AlterField(
            model_name='publicchangelog',
            name='statement',
            field=models.CharField(blank=True, default='', max_length=32),
        ),
        migrations.AlterField(
            model_name='usersettings',
            name='views_privacy',
            field=models.BooleanField(default=False),
        ),
    ]
