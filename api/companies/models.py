
from django.db import models

# Create your models here.


class Enterprise(models.Model):
    name = models.CharField(max_length=150)
    user = models.ForeignKey("accounts.User", on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Employee(models.Model):
    user = models.ForeignKey("accounts.User", on_delete=models.CASCADE)
    enterprise = models.ForeignKey(Enterprise, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.user.name} - {self.enterprise.name}"
