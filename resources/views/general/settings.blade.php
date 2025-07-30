@extends('layouts.vertical', ['title' => 'Settings'])

@section('css')
@vite(['node_modules/choices.js/public/assets/styles/choices.min.css'])
@endsection

@section('content')
<?php
    $data = \App\Models\Setting::select(['key','value'])->get();
    $settings = new \stdClass;
    foreach($data as $set) {
        $settings->{$set->key} = $set->value;
    }
?>
<form action="{{ route('admin.updateSettings') }}" method="post">
@csrf
<div class="row">
    <div class="col-lg-12">
        <div class="card">
            <div class="card-header">
                <h4 class="card-title d-flex align-items-center gap-1"><iconify-icon icon="solar:settings-bold-duotone" class="text-primary fs-20"></iconify-icon>General Settings</h4>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="mb-3">
                            <label for="layout" class="form-label">Delivery Expected In Days</label>
                            <input type="number" name="delivery" class="form-control" id="layout" placeholder="e.g. 7 Days" onblur="updateSettings(this)" value="{{ $settings->delivery }}">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="row">

    <div class="col-lg-3">
        <div class="card">
            <div class="card-header">
                <h4 class="card-title d-flex align-items-center gap-1"><iconify-icon icon="solar:chat-square-check-bold-duotone" class="text-primary fs-20"></iconify-icon>Reviews Settings</h4>
            </div>
            <div class="card-body">
                <p>Allow Reviews </p>
                <div class="d-flex gap-2 align-items-center mb-3">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="allowReview" value="yes" id="flexRadioDefault3"
                        @if($settings->allowReview && $settings->allowReview==='yes') checked @endif >
                        <label class="form-check-label" for="flexRadioDefault3">
                            Yes
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="allowReview" value="no" id="flexRadioDefault4"
                        @if($settings->allowReview && $settings->allowReview==='no') checked @endif >
                        <label class="form-check-label" for="flexRadioDefault4">
                            No
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-3">
        <div class="card">
            <div class="card-header">
                <h4 class="card-title d-flex align-items-center gap-1"><iconify-icon icon="solar:ticket-sale-bold-duotone" class="text-primary fs-20"></iconify-icon>Tax Settings</h4>
            </div>
            <div class="card-body">
                <p>Prices with Tax</p>
                <div class="d-flex gap-2 align-items-center mb-3">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="withTax" id="flexRadioDefault7" value="yes">
                        <label class="form-check-label" for="flexRadioDefault7">
                            Yes
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="withTax" id="flexRadioDefault8" value="no">
                        <label class="form-check-label" for="flexRadioDefault8">
                            No
                        </label>
                    </div>
                </div>
                <form>
                    <div class="mb-1 pb-1">
                        <label for="items-tax" class="form-label">Default Tax Rate</label>
                        <input type="text" id="items-tax" name="taxRate" class="form-control" placeholder="000" value="{{ $settings->taxRate??'18%' }}" >
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<!-- <div class="row">
    <div class="col-lg-12">
        <div class="card">
            <div class="card-header">
                <h4 class="card-title d-flex align-items-center gap-1"><iconify-icon icon="solar:users-group-two-rounded-bold-duotone" class="text-primary fs-20"></iconify-icon>Customers Settings</h4>
            </div>
            <div class="card-body">
                <div class="row justify-content-between g-3">
                    <div class="col-lg-2 border-end">
                        <p>Customers Online</p>
                        <div class="d-flex gap-2 align-items-center">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault5" id="flexRadioDefault9" checked="">
                                <label class="form-check-label" for="flexRadioDefault9">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault5" id="flexRadioDefault10">
                                <label class="form-check-label" for="flexRadioDefault10">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 border-end">
                        <p>Customers Activity</p>
                        <div class="d-flex gap-2 align-items-center">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault6" id="flexRadioDefault11" checked="">
                                <label class="form-check-label" for="flexRadioDefault11">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault6" id="flexRadioDefault12">
                                <label class="form-check-label" for="flexRadioDefault12">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 border-end">
                        <p>Customer Searches</p>
                        <div class="d-flex gap-2 align-items-center">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault7" id="flexRadioDefault13" checked="">
                                <label class="form-check-label" for="flexRadioDefault13">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault7" id="flexRadioDefault14">
                                <label class="form-check-label" for="flexRadioDefault14">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 border-end">
                        <p>Allow Guest Checkout</p>
                        <div class="d-flex gap-2 align-items-center">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault8" id="flexRadioDefault15">
                                <label class="form-check-label" for="flexRadioDefault15">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault8" id="flexRadioDefault16" checked="">
                                <label class="form-check-label" for="flexRadioDefault16">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2">
                        <p>Login Display Price</p>
                        <div class="d-flex gap-2 align-items-center">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault9" id="flexRadioDefault17">
                                <label class="form-check-label" for="flexRadioDefault17">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault9" id="flexRadioDefault18">
                                <label class="form-check-label" for="flexRadioDefault18">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-lg-6">
                        <form>
                            <div class="">
                                <label for="login-attempts" class="form-label">Max Login Attempts</label>
                                <input type="text" id="login-attempts" class="form-control" placeholder="max" value="1 hour">
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div> -->

<div class="text-end">
    <a href="#!" class="btn btn-danger">Cancel</a>
    <a href="#!" class="btn btn-success">Save Change</a>
</div>
</form>
<script>
    function updateSettings(elem) {
        const {name, value} = elem
        $.ajax({
            url:"{{ route('admin.updateSettings') }}",
            type:"POST",
            data: {_token:"{{ csrf_token() }}", [name]:value},
            success: res => console.log(res)
        })
    }
    $('input[type=radio]').click(function(e){
        updateSettings(this)
    })
    $('input[type=text]').on('blur', function(){
        updateSettings(this)
    })
</script>
@endsection

@section('script-bottom')
@vite(['resources/js/pages/app-ecommerce-product.js'])
@endsection
