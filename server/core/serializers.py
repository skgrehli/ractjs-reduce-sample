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
from rest_framework import serializers

# Third Party Library imports

# local imports.
from core.models import User, Campany, Sector, Industry
from core.utils import create_role_user


class UserCreateSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    def validate(self, data, *args, **kwargs):
        return super(UserCreateSerializer, self).validate(data, *args, **kwargs)

    @transaction.atomic()
    def create(self, validated_data):
        first_name = validated_data['first_name']
        last_name = validated_data['last_name']
        email = validated_data['email']
        user = User.objects.create(**validated_data)
        user.set_password(validated_data['password'])
        user.is_active = False
        user.save()
        return user

    class Meta:
        model = User
        fields = ('email', 'id', 'password', 'first_name', 'last_name')


class ProfileSerializer(serializers.ModelSerializer):
    campany = serializers.CharField()

    class Meta:
        model = User
        fields = ('campany', 'designation', 'phone_number', 'linkedin_url', 'country', 'role')

    def update(self, instance, validated_data):
        campany = validated_data.get('campany', None)
        if campany:
            try:
                campany_obj = Campany.objects.get(name=campany)
            except Campany.DoesNotExist:
                campany_obj = Campany.objects.create(name=campany)
            instance.campany = campany_obj
        instance.designation = validated_data.get('designation', instance.designation)
        instance.phone_number = validated_data.get('phone_number', instance.phone_number)
        instance.linkedin_url = validated_data.get('linkedin_url', instance.linkedin_url)
        instance.country = validated_data.get('country', instance.country)
        instance.role = validated_data.get('role', instance.role)
        # create_role_user(instance.role)
        instance.is_active = True
        instance.save()
        return instance


class UserListSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'email', 'role')


class CampanyListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Campany
        fields = ('id', 'name', 'desc')


class SectorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Sector
        fields = ('id', 'name')


class IndustrySerializer(serializers.ModelSerializer):

    class Meta:
        model = Industry
        fields = ('id', 'name')
