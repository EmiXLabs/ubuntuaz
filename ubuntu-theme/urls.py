from django.conf.urls.defaults import *
import ubuntu_website

urlpatterns = patterns('',
    (r'^media/(?P<path>.*)$', 'django.views.static.serve',
        {'document_root': ubuntu_website.MEDIA_ROOT}),
)
