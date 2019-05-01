from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import (Field, Institution, Location, Discourse, Discipline,
        Influence )

admin.site.register(Field)
admin.site.register(Institution)
admin.site.register(Location)
admin.site.register(Discourse)
admin.site.register(Discipline)
admin.site.register(Influence)
