from django.contrib.auth.models import Permission
from rest_framework.response import Response

from companies.serializers import PermissionsSerializer
from companies.utils.permissions import GroupsPermission
from companies.views.base import Base


class PermissionDetail(Base):
    permission_classes = [GroupsPermission]

    def get(self, request):
        permissions = Permission.objects.filter(
            content_type_id__in=[2, 7, 11, 13]).all()

        serializer = PermissionsSerializer(permissions, many=True)

        return Response({"permissions": serializer.data})
