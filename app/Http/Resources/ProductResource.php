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
            'model_name' => $this->model_name ,
            'model_number' => $this->model_number ,
            'slug' => $this->slug ,
            'description' => $this->description ,
            'material' => $this->material ,
            'list_price' => number_format($this->list_price, 2) ,
            'retail_price' => number_format($this->retail_price, 2) ,
            'discount' => $this->getDiscount(),
            'length' => $this->length ,
            'width' => $this->width ,
            'height' => $this->height ,
            'weight' => $this->weight ,
            'warranty' => $this->warranty ,
            'meta_title' => $this->meta_title ,
            'meta_description' => $this->meta_description ,
            'image' => $this->getMedia('products')->first()->getUrl()
        ];
    }
}
