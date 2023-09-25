<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\View\View;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ProductController extends Controller
{
    public function view(Product $product, Request $request) : View
    {
        if (!$product->status) {

            throw new NotFoundHttpException;
        }

        return view('components.view-product', compact('product'));

    }
}
