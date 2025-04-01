<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
class ProductController extends Controller
{

    public function index()
    {
        $products = Product::paginate(1);
        return view('general.products.grid', compact('products'));
    }

    public function trending(Request $request){
        return Product::orderBy('ordered','desc')->get();
    }

    public function edit(Product $product)
    {
        return view('general.products.edit', compact('product'));
    }

    public function store(Request $request)
    {
        $product = new Product();
        $product->name = $request->name;
        $product->category = $request->product_category;
        $product->description = $request->description;
        $product->price = $request->price;
        $product->discount = $request->discount;
        $product->isStocked = $request->status ?? 1;
        $images = [];
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $path = $image->store('products', 'public');
                $images[]= $path;
            }
        }
        $product->imageGallery = $images;

        $product->save();
        return redirect()->route('admin.products.index')->with('success', 'Product created successfully!');

    }

    public function update(Request $request, Product $product)
    {
        // dd('$aaua');
        $product->name = $request->name;
        $product->category = $request->product_category;
        $product->description = $request->description;
        $product->price = $request->price;
        $product->discount = $request->discount;
        $product->isStocked = $request->status ?? 1;
        $product->isNew = false;
        $product->filteritems = $request->filteritems ?? $product->filteritems; // Keep old value if not provided
        $images=[];
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $path = $image->store('products', 'public');
                $images[]= $path;
            }
        }
        $product->imageGallery = $images;

        $product->save();

        return redirect()->route('admin.products.index')->with('success', 'Product updated successfully!');
    }

}
