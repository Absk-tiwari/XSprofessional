<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product; 
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    
    public function index()
    {
        $products = Product::paginate(1);
        return view('general.products.grid', compact('products'));
    }

    

    public function edit(Product $product)
    {
        return view('general.products.edit', compact('product'));
    }
    
    public function store(Request $request)
    {
        $product = new Product();
        $product->product_name = $request->product_name;
        $product->product_category = $request->product_category;
        $product->description = $request->description;
        $product->price = $request->price;
        $product->discount = $request->discount;
        $product->status = $request->status ?? 1;

        // Handle Image Upload
        if ($request->hasFile('image')) {
            $product->image = $request->file('image')->store('products', 'public'); 
        }
        $product->save();
        return redirect()->route('admin.products.index')->with('success', 'Product created successfully!');
 
    }  

    public function update(Request $request, Product $product)
{
    // dd('$aaua');
    $product->product_name = $request->product_name;
    $product->product_category = $request->product_category;
    $product->description = $request->description;
    $product->price = $request->price;
    $product->discount = $request->discount;
    $product->status = $request->status ?? 1;
    $product->filteritems = $request->filteritems ?? $product->filteritems; // Keep old value if not provided

    
    if ($request->hasFile('image')) {
  
        if ($product->image) {
            Storage::disk('public')->delete($product->image);
        }
        $product->image = $request->file('image')->store('products', 'public');
    }

    $product->save();

    return redirect()->route('admin.products.index')->with('success', 'Product updated successfully!');
}

}