from django.contrib import admin
from .models import Account
from django.contrib.auth.admin import UserAdmin

# Register your models here.


class AccountAdmin(UserAdmin):
    list_display = ('username', 'subdomain', 'email', 'paid', 'stripe', 'date_paid', 'AccountExpiration', 'date_joined', 'last_login', 'is_admin', 'is_staff')
    search_fields = ('username','subdomain', 'email', 'paid', 'stripe', 'date_paid','AccountExpiration', )
    readonly_fields = ('date_paid', 'AccountExpiration', 'date_joined', 'last_login')

    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()

admin.site.register(Account, AccountAdmin)
