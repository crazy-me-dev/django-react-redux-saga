# Generated by Django 2.2.6 on 2019-10-12 12:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='JobItems',
            fields=[
                ('jobItemId', models.AutoField(primary_key=True, serialize=False)),
                ('jobId', models.IntegerField()),
                ('side', models.CharField(max_length=500)),
                ('inputUrl', models.URLField()),
                ('outputUrl', models.URLField()),
                ('status', models.CharField(max_length=30)),
            ],
        ),
    ]