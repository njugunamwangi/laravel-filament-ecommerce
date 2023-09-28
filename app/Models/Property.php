<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Property extends Model
{
    use HasFactory;

    public const CREATED_AT = null;
    public const UPDATED_AT = null;

    protected $fillable = [
        'product_id',
        'material',
        'length',
        'width',
        'height',
        'weight',
    ];

    public function product() : BelongsTo {
        return $this->belongsTo(Product::class);
    }
}
