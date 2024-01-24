from django.contrib import admin
from .models import Website
from django.contrib.auth.admin import UserAdmin

class WebsiteAdmin(admin.ModelAdmin):
    list_display = ('created_by', 'theme', 'date_created',)
    search_fields = ('created_by', 'theme', 'date_created' )
    readonly_fields = ('created_by','date_created')

    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()

admin.site.register(Website, WebsiteAdmin)