<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\DropzoneController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\OrderController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RoutingController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\TransformationController;

require __DIR__ . '/auth.php';

Route::group(['prefix' => '/admin', 'as'=>'admin.', 'middleware' => 'auth'], function () {
    Route::get('', [RoutingController::class, 'index'])->name('root');
    Route::view('/dashboard', 'dashboards.index')->name('dashboard');
    Route::get('/products', [ProductController::class, 'index'])->name('products.index');
    Route::view('/products/create', 'general.products.create')->name('products.create');
    Route::post('/products', [ProductController::class, 'store'])->name('products.store');
    Route::get('/products/delete/{product}', [ ProductController::class, 'remove' ])->name('products.remove');
    Route::get('/orders', [ OrderController::class, 'index'])->name('orders');
    Route::post('/update-order', [ OrderController::class, 'update'])->name('orders.update');
    Route::get('/delete-order/{id}', [ OrderController::class, 'delete'])->name('orders.remove');
    Route::get('/invoices', [ InvoiceController::class, 'index'])->name('invoices');
    Route::get('/invoice-detail/{id}', [ InvoiceController::class, 'detail'])->name('invoice.detail');
    Route::post('/upload', [DropzoneController::class,'upload'])->name('upload');
    Route::put('/products/{product}', [ProductController::class, 'update'])->name('products.update');
    Route::view('/settings', 'general.settings')->name('settings');
    Route::post('/settings/update', [SettingController::class, 'update'] )->name('updateSettings');
    Route::get('logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');
    // Route::get('login', [AuthenticatedSessionController::class, 'login'])->name('login');
    // Route::post('/products/update', [ProductController::class, 'update'])->name('products.update');
    // Route::get('{first}/{second}/{third}', [RoutingController::class, 'thirdLevel'])->name('admin.third');
    Route::get('{first}/{second}', [RoutingController::class, 'secondLevel'])->name('second');
    Route::any('/general/products/{product}', [ProductController::class, 'edit'])->name('products.edit');
    Route::group(['prefix' => '/transformations', 'as' => 'transformations.', 'controller'=> TransformationController::class], function(){
        Route::get('/', 'index')->name('index');
        Route::post('/create', 'store')->name('store');
        Route::get('/remove/{id}', 'delete')->name('remove');
    });
});

Route::group(['prefix','/store'], function(){
    Route::get('/{path?}', function ($path='index') {
        if(str_contains($path, "dashboard")) {
            return redirect("admin/$path");
        }
        return response()->file(public_path("store/index.html"));
    })->where('path', '.*');
});
