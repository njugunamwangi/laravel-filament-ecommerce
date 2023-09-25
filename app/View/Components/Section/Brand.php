<?php

namespace App\View\Components\Section;

use Closure;
use Illuminate\Support\Facades\DB;
use Illuminate\View\Component;
use Illuminate\Contracts\View\View;
use App\Models\Brand as Brands;

class Brand extends Component
{
    /**
     * Create a new component instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        $brands = Brands::query()
            ->join('brand_product', 'brands.id', '=', 'brand_product.brand_id')
            ->select('brands.brand', 'brands.slug', DB::raw('count(*) as total'))
            ->groupBy('brands.id', 'brands.brand', 'brands.slug')
            ->orderByDesc('total')
            ->limit(4)
            ->get();

        return view('section.brand', compact('brands'));
    }
}
