#!/usr/bin/env python
# -*- coding: utf-8 -*-
from __future__ import unicode_literals
# Python imports.
import logging

# Django imports.
from django.conf.urls import url, include

# Rest Framework imports.
from rest_framework.routers import DefaultRouter

# Third Party Library imports

# local imports.
from core.views import (UserAPIView, RegistrationAPIView, LoginView,
                        LogoutView, CampanyViewSet, SectorViewSet, IndustryViewSet, ProfileAPIView)
from core.swagger import schema_view

# router = DefaultRouter()
# router.register(r'sector', SectorViewSet)
# router.register(r'industry', IndustryViewSet)

urlpatterns = [
    url(r'^register/$', RegistrationAPIView.as_view(), name='register-api'),
    url(r'^login/$', LoginView.as_view(), name='login-api'),
    url(r'^logout/$', LogoutView.as_view(), name='logout-api'),
    url(r'^users/$', UserAPIView.as_view(), name='user-api'),
    url(r'^users/(?P<pk>[0-9]+)/$', ProfileAPIView.as_view(), name='profile-api'),
    url(r'^docs/$', schema_view, name="schema_view"),
    url(r'^campany/$',
        CampanyViewSet.as_view({'get': 'list'}), name="campany-api"),
    url(r'^sector/$',
        SectorViewSet.as_view({'get': 'list'}), name="sector-api"),
    url(r'^industry/$',
        IndustryViewSet.as_view({'get': 'list'}), name="industry-api"),
    # url(r'^', include(router.urls)),
]