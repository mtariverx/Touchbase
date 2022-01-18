# Generated by Django 2.1.1 on 2019-09-03 20:17

import apps.users.models.profiles
import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('analytics', '0002_auto_20190803_1605'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profilevisit',
            name='interest_tags_viewee',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, choices=[('All', 'All'), ('all', 'all'), ('3D printing', '3D printing'), ('Acting', 'Acting'), ('Art', 'Art'), ('Astrology', 'Astrology'), ('Astronomy', 'Astronomy'), ('Automobiles', 'Automobiles'), ('Business', 'Business'), ('Community', 'Community'), ('Computer programming', 'Computer programming'), ('Cooking', 'Cooking'), ('Couponing', 'Couponing'), ('DIY', 'DIY'), ('Dance', 'Dance'), ('Drawing', 'Drawing'), ('Electronics', 'Electronics'), ('Fashion', 'Fashion'), ('Film', 'Film'), ('Fitness And Exercise', 'Fitness And Exercise'), ('Gaming', 'Gaming'), ('Gardening', 'Gardening'), ('Graphic Design', 'Graphic Design'), ('Hiking', 'Hiking'), ('History', 'History'), ('Magic', 'Magic'), ('Mathematics', 'Mathematics'), ('Music', 'Music'), ('Painting', 'Painting'), ('Pets', 'Pets'), ('Philosophy', 'Philosophy'), ('Photography', 'Photography'), ('Playing musical instruments', 'Playing musical instruments'), ('Politics', 'Politics'), ('Programming', 'Programming'), ('Reading', 'Reading'), ('Role-play', 'Role-play'), ('Science', 'Science'), ('Singing', 'Singing'), ('Sports', 'Sports'), ('Stand-up comedy', 'Stand-up comedy'), ('Vacation', 'Vacation'), ('Writing', 'Writing')], default='', max_length=32), default=apps.users.models.profiles.get_it_default, size=None),
        ),
    ]