<!DOCTYPE html>
<html lang="en">

<head>
    @include('layouts.partials/title-meta', ['title' => $title])
    @yield('css')
    @include('layouts.partials/head-css')
</head>

<body>

<div class="wrapper">

    @include("layouts.partials/topbar", ['title' => $title])
    @include('layouts.partials/main-nav')

    <div class="page-content">

        <div class="container-fluid">
            <div id="messageBox">

                @if (session('success'))
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                        <strong> Success! </strong> {{ session('success') }}
                        <button type="button" class="btn btn-close btn-sm" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true"></span>
                        </button>
                    </div>
                @endif

                @if (session('error'))
                    <div class="alert alert-error alert-dismissible fade show" role="alert">
                    <strong> Error!</strong> {{ session('error') }}
                    <button type="button" class="btn btn-close btn-sm" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true"></span>
                    </button>
                    </div>
                @endif

            </div>
            @yield('content')
        </div>

        @include("layouts.partials/footer")

    </div>

</div>

@include("layouts.partials/right-sidebar")
@include("layouts.partials/footer-scripts")
@vite(['resources/js/app.js','resources/js/layout.js'])

</body>

</html>
