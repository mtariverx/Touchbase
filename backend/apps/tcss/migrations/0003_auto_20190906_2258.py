# Generated by Django 2.1.1 on 2019-09-06 22:58

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cliques', '0004_auto_20190904_0139'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('tcss', '0002_auto_20190722_2316'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tcss',
            name='exp',
        ),
        migrations.AddField(
            model_name='tcss',
            name='exp_cliques',
            field=models.ManyToManyField(related_name='exp_cliques_set', to='cliques.Clique'),
        ),
        migrations.AddField(
            model_name='tcss',
            name='exp_people',
            field=models.ManyToManyField(related_name='exp_people_set', to=settings.AUTH_USER_MODEL),
        ),
        migrations.RemoveField(
            model_name='tcss',
            name='wtf',
        ),
        migrations.AddField(
            model_name='tcss',
            name='wtf',
            field=models.ManyToManyField(related_name='wtf_set', to=settings.AUTH_USER_MODEL),
        ),
    ]
