<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Color extends Model
{
    use HasFactory;
    use HasSlug;
    use SoftDeletes;

    public const CREATED_AT = null;
    public const UPDATED_AT = null;

    protected $fillable = ['color', 'slug'];

    public function getSlugOptions() : SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('color')
            ->saveSlugsTo('slug');
    }
}
