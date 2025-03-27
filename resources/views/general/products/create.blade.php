@extends('layouts.vertical', ['title' => 'Create Product'])

@section('css')
@vite(['node_modules/choices.js/public/assets/styles/choices.min.css'])
@endsection

@section('content')

<form action="{{ route('admin.products.store') }}" method="POST" enctype="multipart/form-data">
    @csrf  

    <!-- Image Upload -->
    <div class="card">

        <div class="card-header">
            <h4 class="card-title">Add Product Photo</h4>
        </div>
        <div class="card-body">
            <div class="fallback">
                <input name="image" type="file">
            </div>
        </div>
    </div>

    <!-- Product Information -->
    <div class="card">
        <div class="card-header">
            <h4 class="card-title">Product Information</h4>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-lg-6">
                    <div class="mb-3">
                        <label for="product-name" class="form-label">Product Name</label>
                        <input type="text" name="product_name" id="product-name" class="form-control" placeholder="Item Name" required>
                    </div>
                </div>
                <div class="col-lg-6">
                    <label for="product-categories" class="form-label">Product Categories</label>
                    <select class="form-control" name="product_category" id="product-categories" required>
                        <option value="">Choose a category</option>
                        <option value="SPA">SPA</option>
                        <option value="Skin Care">Skin Care</option>
                        <option value="Hair Care">Hair Care</option>
                        <option value="Treatment">Treatment</option>
                    </select>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12">
                    <div class="mb-3">
                        <label for="description" class="form-label">Description</label>
                        <textarea class="form-control" name="description" id="description" rows="7" placeholder="Short description"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Pricing Details -->
    <div class="card">
        <div class="card-header">
            <h4 class="card-title">Pricing Details</h4>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-lg-4">
                    <label for="product-price" class="form-label">Price</label>
                    <div class="input-group mb-3">
                        <span class="input-group-text fs-20"><i class='bx bx-dollar'></i></span>
                        <input type="number" name="price" id="product-price" class="form-control" placeholder="000" required>
                    </div>
                </div>
                <div class="col-lg-4">
                    <label for="product-discount" class="form-label">Discount</label>
                    <div class="input-group mb-3">
                        <span class="input-group-text fs-20"><i class='bx bxs-discount'></i></span>
                        <input type="number" name="discount" id="product-discount" class="form-control" placeholder="000">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Submit Buttons -->
    <div class="p-3 bg-light mb-3 rounded">
        <div class="row justify-content-end g-2">
            <div class="col-lg-2">
                <button type="submit" class="btn btn-primary w-100">Create Product</button>
            </div>
            <div class="col-lg-2">
                <a href="{{ route('admin.products.index') }}" class="btn btn-outline-secondary w-100">Cancel</a>
            </div>
        </div>
    </div>
</form>
@endsection

@section('script-bottom')
@vite(['resources/js/pages/ecommerce-product-details.js'])
@endsection