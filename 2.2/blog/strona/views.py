from django.shortcuts import render
from django.shortcuts import get_object_or_404
from .forms import PostForm, Post
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib import messages
def index(request):
    posts = Post.objects.all()
    return render(request, 'strona/strona_główna.html',{'posts': posts})


#@login_required
def create_post(request):
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            post.author = request.user
            post.save()
            return redirect(to='strona:index')
    else:
        form = PostForm()
    return render(request, 'strona/dodaj.html', {'form': form})

@login_required
def edit_post(request, post_id):
    post = get_object_or_404(Post, id=post_id)

    # Sprawdzenie, czy użytkownik jest autorem posta
    if post.author != request.user:
        messages.error(request, "Nie masz uprawnień do edytowania tego posta.")
        return redirect(to='strona:index')  # lub inny widok

    if request.method == 'POST':
        form = PostForm(request.POST, instance=post)
        if form.is_valid():
            form.save()
            messages.success(request, "Post został pomyślnie zaktualizowany.")
            return redirect(to='strona:index')  # Upewnij się, że ten widok istnieje
    else:
        form = PostForm(instance=post)

    return render(request, 'strona/edit.html', {'form': form, 'post': post})


