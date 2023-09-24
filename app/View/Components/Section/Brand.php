<?php

namespace App\View\Components\Section;

use Closure;
use Illuminate\View\Component;
use Illuminate\Contracts\View\View;

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
        return view('section.brand');
    }
}
