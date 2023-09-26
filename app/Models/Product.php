<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Collection;
use Spatie\MediaLibrary\Conversions\Conversion;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\FileAdder;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;
use Symfony\Component\HttpFoundation\File\UploadedFile;

/**
 * @method void prepareToAttachMedia(Media $media, FileAdder $fileAdder)
 */
class Product extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;
    use SoftDeletes;
    use HasSlug;

    protected $fillable = [
        'product',
        'model_name',
        'model_number',
        'slug',
        'description',
        'material',
        'list_price',
        'retail_price',
        'length',
        'width',
        'height',
        'weight',
        'status',
        'warranty',
        'created_by',
        'updated_by',
        'deleted_by',
        'meta_title',
        'meta_description'
    ];

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('product')
            ->saveSlugsTo('slug');
    }

    public function createdBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function updatedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'updated_by');
    }

    public function deletedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'deleted_by');
    }

    public function brands(): BelongsToMany
    {
        return $this->belongsToMany(Brand::class);
    }

    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class);
    }

    public function tags(): BelongsToMany
    {
        return $this->belongsToMany(Tag::class);
    }

    public function colors(): BelongsToMany
    {
        return $this->belongsToMany(Color::class);
    }

    public function sizes() : HasMany {
        return $this->hasMany(Size::class, 'product_id');
    }

    public function getDiscount() {
        $diff = $this->list_price - $this->retail_price;

        $percent = $diff / $this->list_price;

        return '-' . round($percent * 100) . '%';
    }

    public function getDescription() {
        return strip_tags($this->description);
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('products'); // Main product image collection
        $this->addMediaCollection('images');   // Additional images collection
    }
}
