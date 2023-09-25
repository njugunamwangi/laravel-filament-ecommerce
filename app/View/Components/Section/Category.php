<?php

namespace App\View\Components\Section;

use Closure;
use App\Models\Category as Categories;
use Illuminate\Support\Facades\DB;
use Illuminate\View\Component;
use Illuminate\Contracts\View\View;

class Category extends Component
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
        $categories = Categories::query()
            ->join('category_product', 'categories.id', '=', 'category_product.category_id')
            ->select('categories.category', 'categories.slug', DB::raw('count(*) as total'))
            ->groupBy('categories.id', 'categories.category', 'categories.slug')
            ->orderByDesc('total')
            ->limit(4)
            ->get();

        return view('section.category', compact('categories'));
    }
}
