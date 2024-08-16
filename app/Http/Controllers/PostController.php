<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Post;

class PostController extends Controller
{
    public function index(Post $post)
    {
        return Inertia::render("Post/Index",["posts" => $post->get()]);
    }
}
