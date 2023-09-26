<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BrandResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'brand' => $this->brand,
            'slug' => $this->slug,
            'description' => $this->description,
            'image' => $this->getFirstMediaUrl('brands'),
        ];
    }
}
