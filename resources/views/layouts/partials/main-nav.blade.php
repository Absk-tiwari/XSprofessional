<div class="main-nav">
    <!-- Sidebar Logo -->
    <div class="logo-box">
        <a href="{{ route('admin.second', [ 'dashboards' , 'index']) }}" class="logo-dark">
            <img src="/images/logo-sm.png" class="logo-sm" alt="logo sm">
            <img src="/images/logo-dark.png" class="logo-lg" alt="logo dark">
        </a>

        <a href="{{ route('admin.second', [ 'dashboards' , 'index']) }}" class="logo-light">
            <img src="/images/logo-sm.png" class="logo-sm" alt="logo sm">
            <img src="/images/logo-light.png" class="logo-lg" alt="logo light">
        </a>
    </div>

    <!-- Menu Toggle Button (sm-hover) -->
    <button type="button" class="button-sm-hover" aria-label="Show Full Sidebar">
        <iconify-icon icon="solar:double-alt-arrow-right-bold-duotone" class="button-sm-hover-icon"></iconify-icon>
    </button>

    <div class="scrollbar" data-simplebar>
        <ul class="navbar-nav" id="navbar-nav">

            <li class="menu-title">General</li>

            <li class="nav-item">
                <a class="nav-link" href="{{ route('admin.dashboard') }}">
                         <span class="nav-icon">
                              <iconify-icon icon="solar:widget-5-bold-duotone"></iconify-icon>
                         </span>
                    <span class="nav-text"> Dashboard </span>
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="{{ url('admin/products')}}">
                        <span class="nav-icon">
                            <iconify-icon icon="solar:t-shirt-bold-duotone"></iconify-icon>
                        </span>
                    <span class="nav-text"> Products </span>
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="#">
                        <span class="nav-icon">
                            <iconify-icon icon="solar:box-bold-duotone"></iconify-icon>
                        </span>
                    <span class="nav-text"> Received Orders </span> <!-- Inventory -->
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="#">
                        <span class="nav-icon">
                            <iconify-icon icon="solar:bag-smile-bold-duotone"></iconify-icon>
                        </span>
                    <span class="nav-text"> Orders </span>
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link menu-arrow" href="#sidebarPurchases" data-bs-toggle="collapse" role="button"
                   aria-expanded="false" aria-controls="sidebarPurchases">
                        <span class="nav-icon">
                            <iconify-icon icon="solar:card-send-bold-duotone"></iconify-icon>
                        </span>
                    <span class="nav-text"> Purchases </span>
                </a>
                <div class="collapse" id="sidebarPurchases">
                    <ul class="nav sub-navbar-nav">
                        <li class="sub-nav-item">
                            <a class="sub-nav-link" href="#">List</a>
                        </li>
                        <li class="sub-nav-item">
                            <a class="sub-nav-link" href="#">Order</a>
                        </li>
                        <li class="sub-nav-item">
                            <a class="sub-nav-link" href="#">Return</a>
                        </li>
                    </ul>
                </div>
            </li>

            <li class="nav-item">
                <a class="nav-link menu-arrow" href="#sidebarAttributes" data-bs-toggle="collapse" role="button"
                   aria-expanded="false" aria-controls="sidebarAttributes">
                        <span class="nav-icon">
                            <iconify-icon icon="solar:confetti-minimalistic-bold-duotone"></iconify-icon>
                        </span>
                    <span class="nav-text"> Attributes </span>
                </a>
                <div class="collapse" id="sidebarAttributes">
                    <ul class="nav sub-navbar-nav">
                        <li class="sub-nav-item">
                            <a class="sub-nav-link" href="#">List</a>
                        </li>
                        <li class="sub-nav-item">
                            <a class="sub-nav-link" href="#">Edit</a>
                        </li>
                        <li class="sub-nav-item">
                            <a class="sub-nav-link" href="#">Create</a>
                        </li>
                    </ul>
                </div>
            </li>

            <li class="nav-item">
                <a class="nav-link menu-arrow" href="#sidebarInvoice" data-bs-toggle="collapse" role="button"
                   aria-expanded="false" aria-controls="sidebarInvoice">
                         <span class="nav-icon">
                              <iconify-icon icon="solar:bill-list-bold-duotone"></iconify-icon>
                         </span>
                    <span class="nav-text"> Invoices </span>
                </a>
                <div class="collapse" id="sidebarInvoice">
                    <ul class="nav sub-navbar-nav">
                        <li class="sub-nav-item">
                            <a class="sub-nav-link" href="#">List</a>
                        </li>
                        <li class="sub-nav-item">
                            <a class="sub-nav-link" href="#">Details</a>
                        </li>
                        <li class="sub-nav-item">
                            <a class="sub-nav-link" href="#">Create</a>
                        </li>
                    </ul>
                </div>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="#">
                         <span class="nav-icon">
                              <iconify-icon icon="solar:settings-bold-duotone"></iconify-icon>
                         </span>
                    <span class="nav-text"> Settings </span>
                </a>
            </li>

        </ul>
    </div>
</div>
