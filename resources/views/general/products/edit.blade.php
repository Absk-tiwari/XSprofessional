@extends('layouts.vertical', ['title' => 'Product Edit'])

@section('css')
    @vite(['node_modules/choices.js/public/assets/styles/choices.min.css'])
@endsection

@section('content')

<div class="row">
    <div class="col-xl-12 col-lg-12">
        <form action="{{ route('admin.products.update', $product->id) }}" method="POST" enctype="multipart/form-data">
            @csrf
            @method('PUT')

            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">Update Product Photo</h4>
                </div>
                <div class="card-body">
                    <div class="dropzone bg-light-subtle py-5">
                        <div class="fallback">
                            <input type="file" name="image" multiple>
                        </div>
                        <div class="dz-message needsclick">
                            <i class="bx bx-cloud-upload fs-48 text-primary"></i>
                            <h3 class="mt-4">Drop your images here, or <span class="text-primary">click to browse</span></h3>
                            <span class="text-muted fs-13">
                                1600 x 1200 (4:3) recommended. PNG, JPG, and GIF files are allowed.
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">Product Information</h4>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="mb-3">
                                <label for="product-name" class="form-label">Product Name</label>
                                <input type="text" name="product_name" value="{{ $product->product_name }}" id="product-name" class="form-control" required>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="mb-3">
                                <label for="product-categories" class="form-label">Product Categories</label>
                                <select class="form-control" id="product-categories" name="product_category" required>
                                    <option value="">Choose a category</option>
                                    <option value="SPA" {{ $product->product_category == 'SPA' ? 'selected' : '' }}>SPA</option>
                                    <option value="Skin care" {{ $product->product_category == 'Skin care' ? 'selected' : '' }}>Skin Care</option>
                                    <option value="Hair care" {{ $product->product_category == 'Hair care' ? 'selected' : '' }}>Hair Care</option>
                                    <option value="Treatment" {{ $product->product_category == 'Treatment' ? 'selected' : '' }}>Treatment</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="mb-3">
                                <label for="description" class="form-label">Description</label>
                                <textarea class="form-control bg-light-subtle" name="description" id="description" rows="7" required>{{ $product->description }}</textarea>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="mb-3">
                                <label for="product-stock" class="form-label">Stock</label>
                                <input type="number" name="stock" id="product-stock" class="form-control" value="{{ $product->stock }}" required>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">Pricing Details</h4>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="mb-3">
                                <label for="product-price" class="form-label">Price</label>
                                <div class="input-group">
                                    <span class="input-group-text fs-20"><i class='bx bx-rupee'></i></span>
                                    <input type="number" name="price" id="product-price" class="form-control" value="{{ $product->price }}" required>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="mb-3">
                                <label for="product-discount" class="form-label">Discount</label>
                                <div class="input-group">
                                    <span class="input-group-text fs-20"><i class='bx bxs-discount'></i></span>
                                    <input type="number" name="discount" id="product-discount" class="form-control" value="{{ $product->discount }}">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="p-3 bg-light mb-3 rounded">
                <div class="row justify-content-end g-2">
                    <div class="col-lg-2">
                        <button type="submit" class="btn btn-primary w-100">Update Product</button>
                    </div>
                    <div class="col-lg-2">
                        <a href="{{ route('admin.products.index') }}" class="btn btn-outline-secondary w-100">Cancel</a>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
@endsection

@section('script-bottom')
    @vite(['resources/js/pages/ecommerce-product-details.js'])
@endsection
