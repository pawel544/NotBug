from django.urls import path
from . import views

urlpatterns = [
    path('post/new/', views.create_post, name='create-post'),
    path('post/<int:post_id>/edit/', views.edit_post, name='edit-post'),
]
