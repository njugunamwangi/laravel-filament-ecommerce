<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', [AuthController::class, 'me']);
});

Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);

// Products
Route::get('/product/{product:slug}', [ProductController::class, 'show']);
Route::get('/products', [ProductController::class, 'index']);
Route::get('/cart-items', [ProductController::class, 'cartItems']);
Route::get('/category/{category:slug}', [HomeController::class, 'byCategory']);
Route::get('/brand/{brand:slug}', [HomeController::class, 'byBrand']);

// Home
Route::get('/latest', [HomeController::class, 'latest']);
Route::get('/categories', [HomeController::class, 'categories']);
Route::get('/brands', [HomeController::class, 'brands']);

