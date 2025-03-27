<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RoutingController;
use App\Http\Controllers\ProductController;

require __DIR__ . '/auth.php';

Route::group(['prefix' => '/admin', 'as'=>'admin.', 'middleware' => 'auth'], function () {
    Route::get('', [RoutingController::class, 'index'])->name('root');
    Route::view('/dashboard', 'dashboards.index')->name('dashboard');
    Route::get('/products', [ProductController::class, 'index'])->name('products.index');  
    Route::view('/products/create', 'general.products.create')->name('products.create');  
    Route::post('/products', [ProductController::class, 'store'])->name('products.store');
    Route::get('{first}/{second}', [RoutingController::class, 'secondLevel'])->name('second');
    // Route::get('{first}/{second}/{third}', [RoutingController::class, 'thirdLevel'])->name('admin.third');
    Route::any('/general/products/{product}', [ProductController::class, 'edit'])->name('products.edit');  
    // Route::post('/products/update', [ProductController::class, 'update'])->name('products.update');
    Route::put('/products/{product}', [ProductController::class, 'update'])->name('products.update'); 
     
});

// frontend portion
Route::group(['prefix','/store'], function(){
    Route::get('/{path?}', function ($path='index') {
        if(str_contains($path, "dashboard")) {
            return redirect("admin/$path");
        }
        return response()->file(public_path("store/$path.html"));
    })->where('path', '.*');
});
