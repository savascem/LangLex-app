from django.urls import path, re_path
from . import views

urlpatterns = [
    path('', views.WordView.as_view(), name='words'),
    path('delete/<int:pk>', views.WordDeleteView.as_view(), name='delete_word'),
    path('update/<int:pk>', views.WordUpdateView.as_view(), name='update_word'),
    re_path('^today/(?P<creator_id>.+)/$', views.WordTodayView.as_view()),
    re_path('^alltime/(?P<creator_id>.+)/$', views.WordUserAllTimeView.as_view()),
    re_path('^unique/(?P<creator_id>.+)/$', views.UniqueDateListView.as_view()),


    # repeat
    path('repeat/<int:word_id>', views.WordRepeatView.as_view(), name='repeat_word'),
    re_path('^total/repeat/(?P<creator_id>.+)/$', views.TotalRepeatView.as_view()),

]

