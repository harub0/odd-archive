<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Post;
use App\Http\Requests\PostRequest;
use App\Models\Tag;

class PostController extends Controller
{
    public function index()
    {
        return Inertia::render("Post/Index", ["posts" => Post::with("tags")->with("likedByUsers")->get()]);
    }
    
    public function create(Tag $tag)
    {
         return Inertia::render("Post/Create", ["tags" => $tag->get()]);
    }
    
    public function show(Post $post)
    {
        return Inertia::render("Post/Show", ["post" => $post->load('tags')]);
    }

    public function store(PostRequest $request, Post $post)
    {
        $input_post = $request->except('tags');
        $input_tags = $request->input('tags');
        
        $post->fill($input_post)->save();
        if ($input_tags) {
            $post->tags()->attach($input_tags);
        }
        
        return redirect("/posts/" . $post->id);
    }
    
    public function edit(Post $post, Tag $tag)
    {
        return Inertia::render("Post/Edit", ["post" => $post->load('tags'), "tags" => $tag->get()]);
    }
        
    public function update(PostRequest $request, Post $post)
    {
        $input_post = $request->except('tags');
        $input_tags = $request->input('tags');
        
        $post->fill($input_post)->save();
        if ($input_tags) {
            $post->tags()->sync($input_tags);
        }
        
        return redirect("/posts/" . $post->id);
    }

    public function delete(Post $post){
        $post->delete();
        return redirect("/posts");
    }
}
