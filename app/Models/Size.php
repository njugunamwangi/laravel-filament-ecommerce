<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Size extends Model
{
    use HasFactory;

    public const CREATED_AT = null;
    public const UPDATED_AT = null;

    protected $fillable = ['size', 'product_id'];

    public function product() : BelongsTo {
        return $this->belongsTo(Product::class);
    }
}
