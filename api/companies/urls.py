from django.urls import path

from companies.views.employees import EmployeeDetail, Employees
from companies.views.groups import GroupDetail, Groups
from companies.views.permissions import PermissionDetail
from companies.views.tasks import TaskDetail, Tasks

urlpatterns = [
    path('employees/', Employees.as_view(), name='employees'),
    path('employees/<int:employee_id>/',
         EmployeeDetail.as_view(), name='employee_detail'),

    # Permissions
    path('groups/', Groups.as_view(), name='groups'),
    path('groups/<int:group_id>/',
         GroupDetail.as_view(), name='group_detail'),
    path('permissions/', PermissionDetail.as_view(), name='permission_detail'),

    # Tasks
    path('tasks/', Tasks.as_view(), name='tasks'),
    path('tasks/<int:task_id>/',
         TaskDetail.as_view(), name='task_detail'),
]
