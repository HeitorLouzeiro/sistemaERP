from rest_framework.response import Response
from rest_framework.views import APIView

from companies.models import TaskStatus


class TaskStatusList(APIView):
    """
    View para listar todos os status de tarefas disponíveis
    """
    
    def get(self, request):
        statuses = TaskStatus.objects.all()
        
        data = [
            {
                'id': status.id,
                'name': status.name,
                'codename': status.codename
            }
            for status in statuses
        ]
        
        return Response({"statuses": data})
