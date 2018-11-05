# python imports
import requests

# Django imports
from django.shortcuts import render
from django.core.exceptions import ObjectDoesNotExist, ValidationError

# Rest Framework imports
from rest_framework import status, viewsets
from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_jwt.serializers import JSONWebTokenSerializer
from rest_framework_jwt.views import JSONWebTokenAPIView

# local imports
from core.models import User, Campany, Sector, Industry
from core.serializers import (UserCreateSerializer,
                              UserListSerializer,
                              CampanyListSerializer,
                              SectorSerializer,
                              IndustrySerializer,
                              ProfileSerializer)
from core.utils import generate_jwt_token


class RegistrationAPIView(APIView):
    serializer_class = UserCreateSerializer

    __doc__ = "Registration API for user"

    def post(self, request, *args, **kwargs):
        try:
            user_serializer = UserCreateSerializer(data=request.data)
            if user_serializer.is_valid():
                user = user_serializer.save()
                data = generate_jwt_token(user, user_serializer.data)
                return Response(data, status=status.HTTP_200_OK)
            else:
                message = ''
                for error in user_serializer.errors.values():
                    message += " "
                    message += error[0]
                return Response({'status': False,
                                 'message': message},
                                status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'status': False,
                             'message': str(e)},
                            status=status.HTTP_400_BAD_REQUEST)


class LoginView(JSONWebTokenAPIView):
    serializer_class = JSONWebTokenSerializer

    __doc__ = "Log In API for user which returns token"

    @staticmethod
    def post(request):
        try:
            serializer = JSONWebTokenSerializer(data=request.data)
            if serializer.is_valid():
                serialized_data = serializer.validate(request.data)
                # from custom_logger import DatabaseCustomLogger
                # d = DatabaseCustomLogger()
                # d.database_logger(123)
                user = User.objects.get(email=request.data.get('email'))
                return Response({
                    'status': True,
                    'token': serialized_data['token'],
                }, status=status.HTTP_200_OK)
            else:
                message = ''
                for error in serializer.errors.values():
                    message += " "
                    message += error[0]
                return Response({'status': False,
                                 'message': message},
                                status=status.HTTP_400_BAD_REQUEST)
        except (AttributeError, ObjectDoesNotExist):
            return Response({'status': False,
                             'message': "User doesnot exists"},
                            status=status.HTTP_400_BAD_REQUEST)


class LogoutView(APIView):
    permission_classes = (IsAuthenticated,)

    @staticmethod
    def post(request):
        """
        Logout API for user
        """
        try:
            user = request.data.get('user', None)
            logout(request)
            return Response({'status': True,
                             'message': "logout successfully"},
                            status=status.HTTP_200_OK)
        except (AttributeError, ObjectDoesNotExist):
            return Response({'status': False},
                            status=status.HTTP_400_BAD_REQUEST)


class UserAPIView(GenericAPIView):
    serializer_class = UserListSerializer
    permission_classes = (IsAuthenticated,)

    def get(self, request, format=None):
        """
        List all the users.
        """
        try:
            users = User.objects.all()
            user_serializer = UserListSerializer(users, many=True)

            users = user_serializer.data
            return Response({'status': True,
                             'Response': users},
                            status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'status': False, 'message': str(e)},
                            status=status.HTTP_400_BAD_REQUEST)


class CampanyViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for viewing and editing Campany.
    """
    queryset = Campany.objects.all()
    serializer_class = CampanyListSerializer
    permission_classes = (IsAuthenticated,)


class SectorViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing Sector instances.
    """
    serializer_class = SectorSerializer
    queryset = Sector.objects.all()


class IndustryViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing Industry instances.
    """
    serializer_class = IndustrySerializer
    queryset = Industry.objects.all()


class ProfileAPIView(APIView):
    serializer_class = ProfileSerializer
    permission_classes = (IsAuthenticated,)

    __doc__ = "Profile API for user"

    def get_object(self, pk):
        try:
            return User.objects.get(pk=pk)
        except User.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        user = self.get_object(pk)
        serializer = ProfileSerializer(user)
        return Response(serializer.data)

    def put(self, request, pk, *args, **kwargs):
        try:
            user = self.get_object(pk)
            user_serializer = ProfileSerializer(instance=user, data=request.data)
            if user_serializer.is_valid():
                user = user_serializer.save()
                return Response(user_serializer.data, status=status.HTTP_200_OK)
            else:
                message = ''
                for error in user_serializer.errors.values():
                    message += " "
                    message += error[0]
                return Response({'status': False,
                                 'message': message},
                                status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'status': False,
                             'message': str(e)},
                            status=status.HTTP_400_BAD_REQUEST)
