#!/usr/bin/env python

# -*- coding: utf-8 -*-
from __future__ import unicode_literals

# Python imports.
import logging
import datetime
import calendar

# Django imports.
from django.db import transaction

# Rest Framework imports.
from rest_framework import viewsets
# Third Party Library imports

# local imports.
from startup.models import (Startup, )
from startup.serializers import (StartupSerializer, )


class StartupViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing Startup instances.
    """
    serializer_class = StartupSerializer
    queryset = Startup.objects.all()

