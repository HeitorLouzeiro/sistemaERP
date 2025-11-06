from django.urls import path

from companies.views.employees import Employees, EmployeeDetail

urlpatterns = [
    path('employees/', Employees.as_view(), name='employees'),
    path('employees/<int:employee_id>/', EmployeeDetail.as_view(), name='employee_detail'),
]