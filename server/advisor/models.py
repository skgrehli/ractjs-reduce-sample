from django.db import models
from django.contrib.postgres.fields import ArrayField

from core.models import TimeStampModel, User


class Advisor(TimeStampModel):
    user = models.OneToOneField(User, on_delete=models.CASCADE,
                                primary_key=True,
                                )
    sectors = ArrayField(models.CharField(max_length=50),
                         blank=True)  # list of sector name
    industries = ArrayField(models.CharField(max_length=50),
                            blank=True)  # list of Industry name