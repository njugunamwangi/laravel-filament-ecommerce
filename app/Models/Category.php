<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Category extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;
    use HasSlug;
    use SoftDeletes;

    public const CREATED_AT = null;
    public const UPDATED_AT = null;
    protected $fillable = ['category', 'slug', 'description', 'parent_id'];

    public function getSlugOptions() : SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('category')
            ->saveSlugsTo('slug');
    }

    public function children() : HasMany
    {
        return $this->hasMany(Category::class, 'parent_id');
    }

    public function parent() :BelongsTo
    {
        return $this->belongsTo(Category::class, 'parent_id');
    }
}
