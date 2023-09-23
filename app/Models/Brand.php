<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Brand extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;
    use SoftDeletes;
    use HasSlug;

    public const CREATED_AT = null;
    public const UPDATED_AT = null;

    public function getSlugOptions() : SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('brand')
            ->saveSlugsTo('slug');
    }

    protected $fillable = ['brand', 'slug', 'description'];
}
