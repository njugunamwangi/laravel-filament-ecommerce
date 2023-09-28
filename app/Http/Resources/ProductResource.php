<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray($request): array
    {
        return [
            'id' => $this->id ,
            'product' => $this->product ,
            'brand' => ProductBrandResource::collection($this->brands),
            'model_name' => $this->model_name ,
            'model_number' => $this->model_number ,
            'slug' => $this->slug ,
            'description' => $this->getDescription() ,
            'list_price' => number_format($this->list_price, 2) ,
            'retail_price' => number_format($this->retail_price, 2) ,
            'discount' => $this->getDiscount(),
            'warranty' => $this->warranty ,
            'meta_title' => $this->meta_title ,
            'meta_description' => $this->meta_description ,
            'image' => $this->getMedia('products')->first()->getUrl(),
            'photos' => $this->getMedia('images')->pluck('original_url')->take(2),
            'tags' => ProductTagResource::collection($this->tags),
            'sizes' => SizeResource::collection($this->sizes),
            'colors' => ProductColorResource::collection($this->colors),
            'properties' => PropertyResource::collection($this->properties)
        ];
    }
}
