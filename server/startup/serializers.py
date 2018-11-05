#!/usr/bin/env python

# -*- coding: utf-8 -*-
from __future__ import unicode_literals

# Python imports.
import logging

# Django imports.

# Rest Framework imports.
from rest_framework import serializers
# Third Party Library imports

# local imports.
from startup.models import *


class StartupSerializer(serializers.ModelSerializer):

    class Meta:
        model = Startup
        fields = '__all__'

