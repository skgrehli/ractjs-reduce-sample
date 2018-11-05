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
from investor.models import (Investor, )
from investor.serializers import (InvestorSerializer, )


class InvestorViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing Investor instances.
    """
    serializer_class = InvestorSerializer
    queryset = Investor.objects.all()

