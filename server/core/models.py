from django.db import models
from django.urls import reverse
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser, User
)
from datetime import datetime


class TimeStampModel(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Campany(TimeStampModel):
    name = models.CharField(max_length=100)
    desc = models.TextField(null=True, blank=True)
    url = models.URLField(null=True, blank=True)


    def __str__(self):
        return self.name

class UserManager(BaseUserManager):

    def create_user(self, email=None, password=None):
        """
        Creates and saves a User with the given email and password.
        """
        user = self.model(
            email=self.normalize_email(email),
        )

        user.set_password(password)
        user.is_staff = True
        user.is_admin = True
        user.save(using=self._db)
        return user

    def create_staffuser(self, email, password):
        """
        Creates and saves a staff user with the given email and password.
        """
        user = self.create_user(
            email=email,
            password=password,
        )
        user.is_active = True
        user.is_staff = True
        user.is_admin = True
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password):
        # import pdb; pdb.set_trace()
        """
        Creates and saves a superuser with the given username and password.
        """
        user = self.create_user(
            email=email,
            password=password,
        )
        user.email = email
        user.is_staff = True
        user.is_admin = True
        user.role = 'admin'
        user.save(using=self._db)
        return user


USER_CHOICES = (
    ('advisor', 'Advisor'),
    ('investor', 'Investor'),
    ('startup', 'Startup'),
    ('accelerator', 'Accelerator'),
    ('individual', 'Individual'),
    ('admin', 'Admin'),
    ('normal', 'Normal'),
)


class User(AbstractBaseUser):
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True
    )
    first_name = models.CharField(('first_name'), max_length=30, blank=True)
    last_name = models.CharField(('last_name'), max_length=30, blank=True)

    role = models.CharField(max_length=20, choices=USER_CHOICES, default='normal')
    is_active = models.BooleanField(default=True)
    is_email_verified = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)

    campany = models.ForeignKey(Campany, on_delete=models.CASCADE, blank=True, null=True)
    designation = models.CharField(max_length=100, blank=True, null=True)
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    linkedin_url = models.URLField(null=True, blank=True)
    country = models.CharField(max_length=30, blank=True, null=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    objects = UserManager()

    def __str__(self):
        return str(self.phone_number)

    def get_full_name(self):
        '''
        Returns the first_name plus the last_name, with a space in between.
        '''
        full_name = '%s %s' % (self.first_name, self.last_name)
        return full_name.strip()

    def get_short_name(self):
        '''
        Returns the short name for the user.
        '''
        return self.first_name

    def is_staff(self):
        "Is the user a member of staff?"
        return self.is_staff

    def is_admin(self):
        "Is the user a admin member?"
        return self.is_admin

    def is_active(self):
        "Is the user active?"
        return self.is_active

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True


# List of sector
# ["Agriculture & Mining","Business Services","Consumer Services","Consumer Goods","E-commerce","Education","Energy & Utilities","Financial Services","Government","Healthcare","Logistics","Manufacturing","Media & Entertainment","Non-profit","Real Estate","Retail","Software & Internet","Telecommunications","Travel & Tourism"]


class Sector(TimeStampModel):
    name = models.CharField(max_length=100, unique=True)
    desc = models.TextField(null=True, blank=True)

    @classmethod
    def populate_sector(cls):
        sectors = ["Agriculture & Mining", "Business Services", "Consumer Services", "Consumer Goods", "E-commerce", "Education", "Energy & Utilities", "Financial Services", "Government",
                   "Healthcare", "Logistics", "Manufacturing", "Media & Entertainment", "Non-profit", "Real Estate", "Retail", "Software & Internet", "Telecommunications", "Travel & Tourism"]
        for sector_name in sectors:
            try:
                cls.objects.create(
                    name=sector_name
                )
            except Exception as e:
                print(e)

# List of Industries
# "Advertising","Aerospace","Agriculture","Artificial Intelligence","Analytics","Animation","AR/VR","Architecture ","Art and Photography","Automotive","Big Data","Blockchain","Communication","Construction","Defence","Design","Education Technology","Electronics","Enterprise Solutions","Events","Fashion","Food and Beverages ","Gaming","Green Technology","Grocery","Hardware","Human Resources","Information Technology","Internet of things","Legal","Marketing","Nanotechnology","Personal Care","Pets and Animals","Print Media","Robotics","Security","Social Impact","Social Network ","Sports","Storage","Transportation","Wholesale & Distribution"


class Industry(TimeStampModel):
    name = models.CharField(max_length=100)
    desc = models.TextField(null=True, blank=True)

    @classmethod
    def populate_industry(cls):
        industries = ["Advertising", "Aerospace", "Agriculture", "Artificial Intelligence", "Analytics", "Animation", "AR/VR", "Architecture ", "Art and Photography", "Automotive", "Big Data", "Blockchain", "Communication", "Construction", "Defence", "Design", "Education Technology", "Electronics", "Enterprise Solutions", "Events", "Fashion", "Food and Beverages ",
                      "Gaming", "Green Technology", "Grocery", "Hardware", "Human Resources", "Information Technology", "Internet of things", "Legal", "Marketing", "Nanotechnology", "Personal Care", "Pets and Animals", "Print Media", "Robotics", "Security", "Social Impact", "Social Network ", "Sports", "Storage", "Transportation", "Wholesale & Distribution"]
        for industry_name in industries:
            try:
                cls.objects.create(
                    name=industry_name
                )
            except Exception as e:
                print(e)
