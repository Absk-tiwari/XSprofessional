@extends('layouts.vertical', ['title' => 'Products'])

@section('css')
@vite(['node_modules/nouislider/dist/nouislider.min.css'])
@endsection

@section('content')

<div class="row">
    <div class="col-lg-3 d-none">
        <div class="card bg-light-subtle">
            <div class="card-header border-0">
                <div class="search-bar me-3 mb-1">
                    <span><i class="bx bx-search-alt"></i></span>
                    <input type="search" class="form-control" id="search" placeholder="Search ...">
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-body border-light">
                <a href="#" class="btn-link d-flex align-items-center text-dark bg-light p-2 rounded fw-medium fs-16 mb-0" data-bs-toggle="collapse" data-bs-target="#categories" aria-expanded="false" aria-controls="other">Categories
                    <i class='bx bx-chevron-down ms-auto fs-20'></i>
                </a>
                <div id="categories" class="collapse show">
                    <div class="categories-list d-flex flex-column gap-2 mt-2">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="all-categories" checked>
                            <label class="form-check-label" for="all-categories">All Categories</label>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="fashion-categories">
                            <label class="form-check-label" for="fashion-categories">Fashion Men , Women & Kid's</label>
                        </div>

                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="sunglass-categories">
                            <label class="form-check-label" for="sunglass-categories">Eye Ware & Sunglass</label>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="watches-categories">
                            <label class="form-check-label" for="watches-categories">Watches</label>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="electronics-categories">
                            <label class="form-check-label" for="electronics-categories">Electronics Items</label>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="furniture-categories">
                            <label class="form-check-label" for="furniture-categories">Furniture</label>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="headphones-categories">
                            <label class="form-check-label" for="headphones-categories">Headphones</label>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="beauty-categories">
                            <label class="form-check-label" for="beauty-categories">Beauty & Health</label>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="shoes-categories">
                            <label class="form-check-label" for="shoes-categories">Foot Ware</label>
                        </div>
                    </div>
                </div>

                <div class="mt-4">
                    <a href="#" class="btn-link d-flex align-items-center text-dark bg-light p-2 rounded fw-medium fs-16 mb-0" data-bs-toggle="collapse" data-bs-target="#price" aria-expanded="false" aria-controls="other">Product Price
                        <i class='bx bx-chevron-down ms-auto fs-20'></i>
                    </a>
                    <div id="price" class="collapse show">
                        <div class="categories-list d-flex flex-column gap-2 mt-2">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="all-price">
                                <label class="form-check-label" for="all-price">All Price</label>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="price-1">
                                <label class="form-check-label" for="price-1">Below $200 (145)</label>
                            </div>

                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="price-2">
                                <label class="form-check-label" for="price-2">$200 - $500 (1,885)</label>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="price-3">
                                <label class="form-check-label" for="price-3">$500 - $800 (2,276)</label>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="price-4">
                                <label class="form-check-label" for="price-4">$800 - $1000 (12,676)</label>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="price-5">
                                <label class="form-check-label" for="price-5">$1000 - $1100 (13,123)</label>
                            </div>
                            <h5 class="text-dark fw-medium mt-3">Custom Price Range :</h5>
                            <div id="product-price-range" [data-slider-size="md" ] class=""></div>
                            <div class="formCost d-flex gap-2 align-items-center mt-2">
                                <input class="form-control form-control-sm text-center" type="text" id="minCost" value="0">
                                <span class="fw-semibold text-muted">to</span>
                                <input class="form-control form-control-sm text-center" type="text" id="maxCost" value="1000">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-4">
                    <a href="#" class="btn-link d-flex align-items-center text-dark bg-light p-2 rounded fw-medium fs-16 mb-0" data-bs-toggle="collapse" data-bs-target="#gender" aria-expanded="false" aria-controls="other">Gender
                        <i class='bx bx-chevron-down ms-auto fs-20'></i>
                    </a>
                    <div id="gender" class="collapse show">
                        <div class="categories-list d-flex flex-column gap-2 mt-2">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="men">
                                <label class="form-check-label" for="men">Men (1,834)</label>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="women">
                                <label class="form-check-label" for="women">Women (2,890)</label>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="kids">
                                <label class="form-check-label" for="kids">Kid's (1,231)</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-4">
                    <a href="#" class="btn-link d-flex align-items-center text-dark bg-light p-2 rounded fw-medium fs-16 mb-0" data-bs-toggle="collapse" data-bs-target="#size" aria-expanded="false" aria-controls="other">Size & Fit
                        <i class='bx bx-chevron-down ms-auto fs-20'></i>
                    </a>
                    <div id="size" class="collapse show">
                        <p class="text-muted mt-1">"For better results, select gender and category"</p>
                        <div class="categories-list d-flex flex-column gap-2 mt-2">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="size-s">
                                <label class="form-check-label" for="size-s">S (1,437)</label>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="size-m">
                                <label class="form-check-label" for="size-m">M (2,675)</label>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="size-l">
                                <label class="form-check-label" for="size-l">L (4,870)</label>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="size-xl">
                                <label class="form-check-label" for="size-xl">XL (7,543)</label>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="size-xxl">
                                <label class="form-check-label" for="size-xxl">XXL (1,099)</label>
                            </div>
                            <a href="#!" class="text-dark fw-medium">More</a>
                        </div>
                    </div>
                </div>
                <div class="mt-3">
                    <a href="#" class="btn-link d-flex align-items-center text-dark bg-light p-2 rounded fw-medium fs-16 mb-0" data-bs-toggle="collapse" data-bs-target="#rating" aria-expanded="false" aria-controls="other">Rating
                        <i class='bx bx-chevron-down ms-auto fs-20'></i>
                    </a>
                    <div id="rating" class="collapse show">
                        <div class="categories-list d-flex flex-column gap-2 mt-2">
                            <div class="form-check">
                                <input type="radio" class="form-check-input" name="rating-number" id="rate-1">
                                <label class="form-check-label" for="rate-1">1 <i class="bx bxs-star text-warning"></i> & Above (437)</label>
                            </div>
                            <div class="form-check">
                                <input type="radio" class="form-check-input" name="rating-number" id="rate-2">
                                <label class="form-check-label" for="rate-2">2 <i class="bx bxs-star text-warning"></i> & Above (657)</label>
                            </div>
                            <div class="form-check">
                                <input type="radio" class="form-check-input" name="rating-number" id="rate-3">
                                <label class="form-check-label" for="rate-3">3 <i class="bx bxs-star text-warning"></i> & Above (1,897)</label>
                            </div>
                            <div class="form-check">
                                <input type="radio" class="form-check-input" name="rating-number" id="rate-4">
                                <label class="form-check-label" for="rate-4">4 <i class="bx bxs-star text-warning"></i> & Above (3,571)</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <a href="#!" class="btn btn-primary w-100">Apply</a>
            </div>
        </div>
    </div>
    <div class="col-lg-12">
        <div class="card bg-light-subtle">
            <div class="card-header border-0">
                <div class="row justify-content-between align-items-center">
                    <div class="col-lg-6">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item fw-medium"><a href="javascript: void(0);" class="text-dark">Categories</a></li>
                            <li class="breadcrumb-item active">All Products</li>
                        </ol>
                        <p class="mb-0 text-muted">Showing all <span class="text-dark fw-semibold">
                            {{$products->count()}}
                        </span> items results</p>
                    </div>
                    <div class="col-lg-6">
                        <div class="text-md-end mt-3 mt-md-0">
                            <button type="button" class="btn btn-outline-secondary me-1 d-none">
                                <i class="bx bx-cog me-1"></i>More Setting
                            </button>
                            <button type="button" class="btn btn-outline-secondary me-1 d-none">
                                <i class="bx bx-filter-alt me-1"></i> Filters
                            </button>
                            <a href="{{route('admin.products.create')}}" class="btn btn-success me-1">
                                <i class="bx bx-plus"></i> New Product
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            @foreach($products as $product) 
            <div class="col-md-6 col-xl-3">
                <div class="card">
                    <img src="{{asset('storage/'.$product->image)}}" alt="" class="img-fluid ">
                    <div class="card-body bg-light-subtle rounded-bottom">
                        <a href="#" class="text-dark fw-medium fs-16">
                            {{$product->product_name}}
                        </a>
                        <div class="my-1">
                            <div class="d-flex gap-2 align-items-center">
                                <ul class="d-flex text-warning m-0 fs-18  list-unstyled">
                                    <li>
                                        <i class="bx bxs-star"></i>
                                    </li>
                                    <li>
                                        <i class="bx bxs-star"></i>
                                    </li>
                                    <li>
                                        <i class="bx bxs-star"></i>
                                    </li>
                                    <li>
                                        <i class="bx bxs-star"></i>
                                    </li>
                                    <li>
                                        <i class="bx bxs-star-half"></i>
                                    </li>
                                </ul>
                                <p class="mb-0 fw-medium fs-15 text-dark">4.5 <span class="text-muted fs-13">(55 Review)</span></p>
                            </div>
                        </div>
                        <h4 class="fw-semibold text-dark mt-2 d-flex align-items-center gap-2">
                            <!-- <span class="text-muted text-decoration-line-through">
                            </span> -->
                            ₹ {{$product->price}} <small class="text-muted"> (30% Off)</small>
                        </h4>
                        <div class="mt-3">
                            <div class="d-flex gap-2">
                                <a href="{{ route('admin.products.edit', ['product'=> $product->id ])}}" class="btn btn-outline-dark border border-secondary-subtle d-flex align-items-center justify-content-center gap-1 w-100">
                                    <i class='bx bx-pencil align-middle'></i> Edit
                                </a>
                                <a href="#" class="btn btn-orange border border-secondary-subtle d-flex align-items-center justify-content-center gap-1 w-100">
                                    <i class='bx bx-trash align-middle'></i> Delete
                                </a>
                            </div>
                        </div>
                    </div>
                    <span class="position-absolute top-0 end-0 p-3">
                        <button type="button" class="btn btn-soft-danger avatar-sm d-inline-flex align-items-center justify-content-center fs-20 rounded-circle"><iconify-icon icon="solar:heart-broken"></iconify-icon></button>
                    </span>
                </div>
            </div>
            @endforeach
        </div>

        <div class="py-3 border-top">
            <nav aria-label="Page navigation example">
                {{ $products->links('pagination::bootstrap-4') }}
            </nav>
        </div>

    </div>
</div>

@endsection

@section('script-bottom')
@vite(['resources/js/pages/ecommerce-product.js'])
@endsection
