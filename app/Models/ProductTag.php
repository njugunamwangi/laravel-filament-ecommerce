<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductTag extends Model
{
    use HasFactory;

    protected $table = 'product_tag';
    public const CREATED_AT = null;
    public const UPDATED_AT = null;

    protected $fillable = ['product_id', 'tag_id'];
}
