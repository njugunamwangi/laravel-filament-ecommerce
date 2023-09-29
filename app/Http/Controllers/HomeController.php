<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\BrandResource;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\ProductResource;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\View\View;

class HomeController extends Controller
{
    public function latest() {
        return ProductResource::collection(
            Product::query()
                ->where('status', '=', 1)
                ->limit(4)
                ->orderBy('created_at', 'desc')
                ->get()
        );
    }

    public function categories() {
        return CategoryResource::collection(
            Category::query()
                ->join('category_product', 'categories.id', '=', 'category_product.category_id')
                ->select(
                    'categories.category',
                    'categories.id',
                    'categories.description',
                    'categories.slug',
                    DB::raw('count(*) as total'))
                ->groupBy('categories.id', 'categories.category', 'categories.slug', 'categories.description',)
                ->orderByDesc('total')
                ->limit(4)
                ->get()
        );
    }

    public function brands() {
        return BrandResource::collection(
            Brand::query()
                ->join('brand_product', 'brands.id', '=', 'brand_product.brand_id')
                ->select(
                    'brands.brand',
                    'brands.id',
                    'brands.description',
                    'brands.slug',
                    DB::raw('count(*) as total'))
                ->groupBy('brands.id', 'brands.brand', 'brands.slug', 'brands.description',)
                ->orderByDesc('total')
                ->limit(4)
                ->get()
        );
    }

    public function byCategory(Category $category, Request $request) {
        $products =  ProductResource::collection(
            Product::query()
                ->with('media')
                ->where('category_product.category_id', '=', $category->id)
                ->join('category_product', 'products.id', '=', 'category_product.product_id')
                ->select('products.*')
                ->where('status', '=', 1)
                ->orderBy('created_at', 'desc')
                ->paginate(20)
        );

        $category = Category::query()->where('id', $category->id)->first();

        return response([
            'products' => $products,
            'category' => $category
        ]);
    }
}
