from django.db import models
from django.contrib.postgres.fields import ArrayField

from core.models import TimeStampModel, Campany, User

STAGE_CHOICES = (
    ('Pre-seed', 'Pre-seed'),
    ('Seed', 'Seed'),
    ('Post-seed', 'Post-seed'),
)


class Startup(TimeStampModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    campany = models.ForeignKey(Campany, on_delete=models.CASCADE)
    website = models.URLField(blank=True, null=True)
    company_linkedin_url = models.URLField(blank=True, null=True)
    description = models.CharField(max_length=200, null=True, blank=True)
    company_logo = models.ImageField(upload_to='media', null=True, blank=True)
    is_incorporated = models.BooleanField(default=False)
    incorporation_date = models.DateField(null=True, blank=True)
    sector = models.CharField(max_length=50, null=True, blank=True)
    industry = models.CharField(max_length=50, null=True, blank=True)
    investor_type = ArrayField(models.CharField(max_length=50),
                               blank=True)  # list of investor_type
    stage = models.CharField(
        max_length=20, choices=STAGE_CHOICES, default='Pre-seed')
    amount_raised = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)
    monthly_revenue = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)
    funding_requirement = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)
    document = models.FileField(upload_to='document', null=True, blank=True)
    copa_required = models.BooleanField(default=False)


class StartupTeamMembers(TimeStampModel):
	startup = models.ForeignKey(Startup, on_delete=models.CASCADE)
	name = models.CharField(max_length=50, null=True, blank=True)
	email = models.EmailField(null=True, blank=True)
	title = models.CharField(max_length=50, null=True, blank=True)
	linkedin_url = models.URLField(null=True, blank=True)
