#!/usr/bin/env python
# -*- coding: utf-8 -*-
from __future__ import unicode_literals
# Python imports.
import logging

# Django imports.
from django.conf.urls import url

# Rest Framework imports.
from rest_framework.routers import DefaultRouter

# Third Party Library imports

# local imports.
from startup.views import StartupViewSet


router = DefaultRouter()
router.register(r'startup', StartupViewSet)

urlpatterns = router.urls
