from django.contrib import admin
from .models import User, Group, Group_Permissions, User_Groups

# Register your models here.

admin.site.register(User)
admin.site.register(Group)
admin.site.register(Group_Permissions)
admin.site.register(User_Groups)

