# Generated by Django 2.1.1 on 2018-12-08 23:11

import apps.users.models.profiles
import apps.users.validators
from django.conf import settings
import django.contrib.postgres.fields.jsonb
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='AccessData',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('last_login', models.DateTimeField(blank=True, default=django.utils.timezone.now)),
                ('ip_addr_v4', models.GenericIPAddressField(blank=True, null=True, protocol='IPv4')),
                ('ip_addr_v6', models.GenericIPAddressField(blank=True, null=True, protocol='IPv6')),
                ('is_mobile', models.NullBooleanField(default=None)),
                ('is_tablet', models.NullBooleanField(default=None)),
                ('is_touch_capable', models.NullBooleanField(default=None)),
                ('is_pc', models.NullBooleanField(default=None)),
                ('is_bot', models.NullBooleanField(default=None)),
                ('browser', models.CharField(blank=True, default='', max_length=64)),
                ('browser_version', models.CharField(blank=True, default='', max_length=64)),
                ('os', models.CharField(blank=True, default='', max_length=64)),
                ('os_version', models.CharField(blank=True, default='', max_length=128)),
                ('device', models.CharField(blank=True, default='', max_length=128)),
            ],
        ),
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('profile_items_layout', django.contrib.postgres.fields.jsonb.JSONField(default=apps.users.models.profiles.get_pil_default)),
                ('occupation', models.CharField(blank=True, default='', max_length=20)),
                ('education', models.CharField(blank=True, default='', max_length=70)),
                ('location', models.CharField(blank=True, default='', max_length=40)),
                ('bio', models.CharField(blank=True, default='Touchbase with me!', max_length=200)),
                ('contact_email', models.EmailField(blank=True, default='', max_length=255, verbose_name='Contact Email')),
                ('contact_phone', models.CharField(blank=True, default='', max_length=17, validators=[django.core.validators.RegexValidator(message="Phone number must be entered in the format: '+999999999'. Up to 15 digits.", regex='^\\+?1?\\d{9,15}$')])),
                ('views_privacy', models.BooleanField(default=True)),
                ('is_verified', models.BooleanField(default=False)),
                ('is_developer', models.BooleanField(default=False)),
                ('is_company', models.BooleanField(default=False)),
                ('is_business', models.BooleanField(default=False)),
                ('is_celebrity', models.BooleanField(default=False)),
            ],
        ),
        migrations.RemoveField(
            model_name='user',
            name='avatar',
        ),
        migrations.AddField(
            model_name='user',
            name='profile_pic',
            field=models.ImageField(blank=True, upload_to='', verbose_name='profile_pic'),
        ),
        migrations.AddField(
            model_name='user',
            name='username',
            field=models.CharField(default='ifyouseethisusernamesomethingisverybroken', error_messages={'unique': 'A user with that username already exists.'}, max_length=45, unique=True, validators=[apps.users.validators.TouchbaseUsernameValidator()], verbose_name='Username'),
        ),
        migrations.AlterField(
            model_name='user',
            name='first_name',
            field=models.CharField(default='A wonderful first name', max_length=30, verbose_name='First name'),
        ),
        migrations.AlterField(
            model_name='user',
            name='last_name',
            field=models.CharField(default='A beautiful last name', max_length=30, verbose_name='Last name'),
        ),
        migrations.AddField(
            model_name='userprofile',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='user', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='accessdata',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='user_accessdata', to=settings.AUTH_USER_MODEL),
        ),
    ]
