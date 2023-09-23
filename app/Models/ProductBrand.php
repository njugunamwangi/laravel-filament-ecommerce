<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductBrand extends Model
{
    use HasFactory;

    protected $table = 'brand_product';
    public const CREATED_AT = null;
    public const UPDATED_AT = null;

    protected $fillable = ['product_id', 'brand_id'];
}
