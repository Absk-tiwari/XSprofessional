<?php

use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\TransformationController;
use App\Models\NewsLetter;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/settings', [SettingController::class, 'get']);
Route::get('/trending-products', [ProductController::class, 'trending']);
Route::get('/new-arrivals', [ProductController::class, 'new']);
Route::get('/product/{product}', [ProductController::class, 'product']);
Route::get('/products', [ProductController::class, 'products']);
Route::post('/add-review/{product}', [ProductController::class, 'addReview']);
Route::group(['prefix' => '/orders'], function(){
    Route::post('/create', [OrderController::class, 'create']);
});

Route::any("newsletter", function(Request $request) {
    $subscription = NewsLetter::where('email', $request->email);
    if(!$subscription->exists()){
        $subscription->create([
            'email' => $request->email
        ]);
    }
    return ['status' => true, 'message' => "You'll be hearing from us."];
});

Route::group([ 'prefix' => 'transformations', 'controller' => TransformationController::class ], function(){
    Route::get('/', 'transforms');
});
