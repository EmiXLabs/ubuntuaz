from django.conf.urls import patterns, include, url

urlpatterns = patterns('',
	(r'^$', 'blog.views.index'),
	url(
	    r'^view/(?P<slug>[^\.]+).html', 
	    'blog.views.view_post', 
	    name='view_blog_post'),
	url(
	    r'^category/(?P<slug>[^\.]+).html', 
	    'blog.views.view_category', 
	    name='view_blog_category'),
)