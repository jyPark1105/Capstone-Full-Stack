from django.urls import path
from .views import ChatWithGptView

urlpatterns = [
    path('', ChatWithGptView.as_view(), name='chat_with_gpt'),  # 'mychat/'에 대한 경로 처리
]
