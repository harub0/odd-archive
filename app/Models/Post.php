<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    
    protected $fillable = [
        "title",
        "body"
    ];

    public function tags(){
        return $this->belongsToMany(Tag::class);
    }
    
    public function likesUsers() {
        return $this->belongsToMany(User::class, 'likes');
    }
    
    public function bookmarksUsers() {
        return $this->belongsToMany(User::class, 'bookmarks');
    }
    
    public function historiesUsers() {
        return $this->belongsToMany(User::class, 'histories');
    }
}
