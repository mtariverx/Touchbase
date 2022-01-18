# Generated by Django 2.1.1 on 2019-08-10 23:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0025_auto_20190729_1750'),
    ]

    operations = [
        migrations.AddField(
            model_name='usersettings',
            name='account_type',
            field=models.CharField(choices=[('p', 'p'), ('b', 'b'), ('c', 'c')], default='p', max_length=1),
        ),
        migrations.AddField(
            model_name='usersettings',
            name='notifs_enable',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='usersettings',
            name='notifs_follows',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='usersettings',
            name='notifs_new_account',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='usersettings',
            name='notifs_updates',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='usersettings',
            name='privacy_accounts',
            field=models.CharField(choices=[('a', 'a'), ('s', 's'), ('n', 'n')], default='a', max_length=1),
        ),
        migrations.AddField(
            model_name='usersettings',
            name='privacy_follows',
            field=models.CharField(choices=[('a', 'a'), ('s', 's'), ('n', 'n')], default='a', max_length=1),
        ),
        migrations.AddField(
            model_name='usersettings',
            name='private_profile',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='usersettings',
            name='sponsored_relevant',
            field=models.BooleanField(default=True),
        ),
    ]