<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Tag extends Model
{
    use HasFactory;
    use HasSlug;
    use SoftDeletes;

    public const CREATED_AT = null;
    public const UPDATED_AT = null;

    protected $fillable = ['tag', 'slug', 'description'];

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('tag')
            ->saveSlugsTo('slug');
    }
}
