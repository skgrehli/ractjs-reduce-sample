from django.db import models
from django.contrib.postgres.fields import ArrayField

from core.models import TimeStampModel, User


STAGE_CHOICES = (
    ('Pre-seed', 'Pre-seed'),
    ('Seed', 'Seed'),
    ('Post-seed', 'Post-seed'),
)

SIZE_CHOICES = (
    (1, 'Less than US $10,000'),
    (2, 'US $ 10,000 - 25,000'),
)

# Less than US $10,000, US $ 10,000 - 25,000, US $ 25,000 - $100,000, US$
# 100,000 - 250,000 /  US$ 250,000 - 500,000 /  US$ 500,000 - 1 Million /
# Above US$ 1 Million


class Investor(TimeStampModel):
    user = models.OneToOneField(User, on_delete=models.CASCADE,
                                primary_key=True,
                                )
    sectors = ArrayField(models.CharField(max_length=50),
                         blank=True)  # list of sector name
    industries = ArrayField(models.CharField(max_length=50),
                            blank=True)  # list of Industry name
    investor_type = ArrayField(models.CharField(max_length=50),
                               blank=True)  # list of investor_type
    stage = models.CharField(
        max_length=20, choices=STAGE_CHOICES, default='Pre-seed')

    investment_size = models.IntegerField(choices=SIZE_CHOICES, default=1)
    expected_deals_per_year = models.IntegerField(default=1)
