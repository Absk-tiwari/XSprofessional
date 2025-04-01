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
            <h4 class="card-title">Add Product Image</h4>
        </div>
        <div class="card-body">
            <input type="file" multiple="multiple" name="images[]" class="d-none img-">
            <div class="dropzone bg-light-subtle py-5 dz-clickable">
                <div class="dz-message needsclick" onclick="recall()">
                    <i class="bx bx-cloud-upload fs-48 text-primary"></i>
                    <h3 class="mt-4">Drop your images here, or <span class="text-primary">click to browse</span></h3>
                    <span class="text-muted fs-13">
                        1600 x 1200 (4:3) recommended. PNG, JPG and GIF files are allowed
                    </span>
                </div>
            </div>

            <ul class="list-unstyled mb-0" id="dropzone-preview">

            </ul>
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
                        <input type="text" name="name" id="product-name" class="form-control" placeholder="Item Name" required>
                    </div>
                </div>
                <div class="col-lg-6">
                    <label for="product-categories" class="form-label">Product Categories</label>
                    <select class="form-control" name="product_category" id="product-categories" required data-choices data-choices-groups data-placeholder="Select Categories" name="choices-single-groups">
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
                        <span class="input-group-text fs-20"><i class='bx bx-rupee'></i></span>
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
<script>
    const images = [];
    const b64 = [];
    function recall(){
        $('.img-').trigger('click')
    }
    $('input[name="images[]"]').on('change', function(e){
        let files = e.target.files;

        [...files].forEach( file => {
            images.push(file)
            console.log('pushing', file)
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function() {
                makePreview(reader.result);
            }
        })
    })

    function makePreview(b) {
            $('#dropzone-preview').append('<li class="mt-2" id="dropzone-preview-list">\
                <div class="border rounded">\
                    <div class="d-flex p-2">\
                        <div class="flex-shrink-0 me-3">\
                            <div class="avatar-sm bg-light rounded">\
                                <img data-dz-thumbnail class="img-fluid rounded d-block" src="'+b+'" alt="Image" />\
                            </div>\
                        </div>\
                        <div class="flex-grow-1">\
                            <div class="pt-1">\
                                <h5 class="fs-14 mb-1" data-dz-name>&</h5>\
                                <p class="fs-13 text-muted mb-0" data-dz-size></p>\
                                <strong class="error text-primary" data-dz-errormessage></strong>\
                            </div>\
                        </div>\
                        <div class="flex-shrink-0 ms-3">\
                            <button data-dz-remove class="btn btn-sm btn-primary">Delete</button>\
                        </div>\
                    </div>\
                </div>\
            </li>')
    }
</script>
@endsection

@section('script-bottom')
@endsection
