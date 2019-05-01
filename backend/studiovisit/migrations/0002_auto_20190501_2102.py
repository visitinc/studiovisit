# Generated by Django 2.1.5 on 2019-05-01 21:02

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('studiovisit', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Practice',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('disciplines', models.ManyToManyField(to='studiovisit.Discipline')),
                ('discourses', models.ManyToManyField(to='studiovisit.Discourse')),
                ('locations', models.ManyToManyField(to='studiovisit.Location')),
                ('members', models.ManyToManyField(to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.DeleteModel(
            name='Field',
        ),
        migrations.DeleteModel(
            name='Influence',
        ),
    ]
