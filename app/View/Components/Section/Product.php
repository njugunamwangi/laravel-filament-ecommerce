<?php

namespace App\View\Components\Section;

use Closure;
use Illuminate\View\Component;
use Illuminate\Contracts\View\View;

class Product extends Component
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
        $products = \App\Models\Product::query()
            ->where('status', '=', 1)
            ->limit(4)
            ->orderBy('created_at', 'desc')
            ->get();

        return view('section.product', compact('products'));
    }
}
