# Generated by Django 2.1.1 on 2019-05-16 23:30

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Transaction',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='Registered at')),
                ('fraud_status', models.CharField(default='none', max_length=15)),
                ('modified', models.DateTimeField(auto_now=True)),
                ('payment_status', models.CharField(default='waiting', max_length=15)),
                ('payment_method', models.CharField(default='paypal', max_length=20)),
                ('payment_id', models.CharField(default='', max_length=150)),
                ('payment_token', models.CharField(default='', max_length=150)),
                ('payer_id', models.CharField(default='', max_length=100)),
                ('payer_ipv4', models.GenericIPAddressField(blank=True, null=True, protocol='IPv4')),
                ('price_total', models.DecimalField(decimal_places=2, default='0.0', max_digits=9)),
                ('billing_state', models.CharField(default='', max_length=40)),
                ('billing_city', models.CharField(default='', max_length=40)),
                ('billing_country', models.CharField(default='', max_length=20)),
                ('billing_first_name', models.CharField(default='', max_length=30)),
                ('billing_last_name', models.CharField(default='', max_length=30)),
                ('billing_phone', models.CharField(blank=True, default='', max_length=17, validators=[django.core.validators.RegexValidator(message="Phone number must be entered in the format: '+999999999'. Up to 15 digits.", regex='^\\+?1?\\d{9,15}$')])),
                ('billing_email', models.EmailField(max_length=255, unique=True, verbose_name='Email')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='transactions', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
