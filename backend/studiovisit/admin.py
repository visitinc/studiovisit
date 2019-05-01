from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import (Institution, Location, Discourse, Discipline,
        User, Practice)

admin.site.register(User, UserAdmin)
admin.site.register(Institution)
admin.site.register(Location)
admin.site.register(Discourse)
admin.site.register(Discipline)
admin.site.register(Practice)
