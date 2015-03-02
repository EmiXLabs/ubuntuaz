from django import template
from django.conf import settings

register = template.Library()


class Analytics(template.Node):
    def __init__(self):
        self.code = getattr(settings, "GOOGLE_ANALYTICS_CODE", False)

    def render(self, context):
        if not self.code:
            return "<!-- Google Site Verification not included because you \
haven't set the GOOGLE_ANALYTICS_CODE variable! -->"
        if settings.DEBUG:
            return "<!-- Google Analytics not included because you are in \
Debug mode! -->"
        return """<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', '""" + str(self.code) + """']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
"""

def do_analytics(parser, token):
    return Analytics()

register.tag('analytics', do_analytics)
