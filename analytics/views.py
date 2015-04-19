from django.conf import settings
from django.http import HttpResponse
from gdata.analytics import client
import gdata
import json
import datetime

PROJECT_NAME = 'Ubuntu Azerbaijan'


def get_ga_client(sdate, edate, metrics, filters):
    my_client = gdata.analytics.client.AnalyticsClient(source=PROJECT_NAME)
    my_client.client_login(
            settings.GOOGLE_USERNAME,
            settings.GOOGLE_PASSWORD,
            source=PROJECT_NAME,
            service=my_client.auth_service,
            account_type = 'GOOGLE',
        )
    account_query = gdata.analytics.client.AccountFeedQuery()
    data_query = gdata.analytics.client.DataFeedQuery({
            'ids': settings.ANALYTICS_PROFILE_ID,
            'metrics': metrics,
            'filters': filters,
            'start-date': sdate,
            'end-date': edate,
        })
    feed = my_client.GetDataFeed(data_query)
    return feed


def get_ga_data(sdate, edate, metrics, filters):
    feed = get_ga_client(sdate, edate, metrics, filters)
    try:
        return int(feed.entry[0].metric[0].value)
    except Exception as e:
        return 0


def show(request):
    page_path = request.GET.get('page')
    if not page_path:
        page_path = '/'
    filters = 'ga:pagePath=@' + page_path
    start = datetime.datetime.now() + datetime.timedelta(-30)
    end = datetime.datetime.now()
    start_text = '{:04d}-{:02d}-{:02d}'.format(start.year, start.month, start.day)
    end_text = '{:04d}-{:02d}-{:02d}'.format(end.year, end.month, end.day)
    data = get_ga_data(start_text, end_text, 'ga:pageviews', filters)
    return HttpResponse(json.dumps({'count': data}), content_type="application/json")
    # return HttpResponse()