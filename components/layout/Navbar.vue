<template>
    <div>
        <header class="container ">
            <div class="row">
                <nav class="navbar px-2 navbar-expand-lg navbar-light col-lg-9">
                    <NuxtLink to="/" class="navbar-brand" href="index.html"><img src="/images/logo.png" alt="logo"></NuxtLink>
                    <ul class="mobileSec">
                        <li><a href="#" class="hdlftIcon"><img src="/images/user.png" alt="user"></a></li>
                        <li><a href="#" class="hdlftIcon"><img src="/images/cart-shopping-fast.png" alt="cart-shopping-fast"></a></li>
                        <li><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button></li>
                    </ul>
                    <div class="collapse navbar-collapse navSupport" id="navbarSupportedContent">
                      <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">الدورات</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">الاستشارات</a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li>
                                    <a class="nav-link dropdown-toggle" href="#" id="dropdownMenuLink1" data-bs-toggle="dropdown" aria-expanded="false">استشارة شخصية</a>
                                    <ul class="submenu dropdown-menu" aria-labelledby="dropdownMenuLink1">
                                        <li><a class="nav-link dropdown-item" href="#">لطفلي</a></li>
                                        <li><a class="nav-link dropdown-item" href="#">لنفسي</a></li>
                                        <li><a class="nav-link dropdown-item" href="#">للمتزوجين</a></li>
                                    </ul>
                                </li>
                                <li><a class="nav-link" href="#">استشارة مجموعات</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <nuxt-link to="/book-store" class="nav-link">
                                الكتب
                            
                            </nuxt-link>
                          </li>
                        <li class="nav-item">
                            <nuxt-link to="/about" class="nav-link">
                                عن دكتورة نورة
                            
                            </nuxt-link>
                          </li>
                        <li class="nav-item">
                            <nuxt-link to="/products" class="nav-link">
                                المنتجات
                            
                            </nuxt-link>
                          </li>
            
                        <li class="nav-item">
                            <a class="nav-link homeicon" href="index.html"><img src="/images/home.png" alt="home_icon"></a>
                        </li>
                      </ul>
                    </div>
                </nav>
                <div class="col-lg-3 hd-left">
                    <ul class="">
                        <li><a href="#" class="bg-yellow">تسجيل</a></li>
                        <li><a href="#" class="hdlftIcon"><img src="/images/user.png" alt="user"></a></li>
                        <li><a href="#" class="hdlftIcon"><img src="/images/cart-shopping-fast.png" alt="cart-shopping-fast"></a></li>
                    </ul>
                </div>
            </div>
		</header>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>