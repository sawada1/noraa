<template>
    <div>
        <header class="container ">
            <div class="row">
                <nav class="navbar px-2 navbar-expand-lg navbar-light col-lg-9">
                    <NuxtLink to="/" class="navbar-brand navbar-link" href="index.html"><img src="/images/logo.png" alt="logo"></NuxtLink>
                    <ul class="mobileSec">
                        <li v-if="!store.token"><NuxtLink :to="localePath('login')"  class="bg-green navbar-link px-4 text-light mt-2 py  
                            "> تسجيل الدخول  </NuxtLink></li>
                            <div v-if="store.token" class="d-flex">
                                <li><NuxtLink :to="localePath('profile')" class="hdlftIcon"><img src="/images/user.svg" style="width: 35px;" alt="user"></NuxtLink></li>
                                <li><a href="#" class="hdlftIcon"><img src="/images/bell.svg" alt="cart-shopping-fast" style="width: 35px;"></a></li>
                            </div>
                            <li class="px-4"><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button></li>
                    </ul>
                  
                    <div class="collapse navbar-collapse navSupport" id="navbarSupportedContent">
                      <ul class="navbar-nav">
                   
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#"  id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">الدورات</a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                           
                                <li> 
                                    <nuxt-link  class="nav-link navbar-link" to="/live-courses">
                                        دورات حية 
                                    </nuxt-link>
                                
                                </li>
                                <li><nuxt-link class="nav-link navbar-link" to="/bundled-courses"> باقة دورات </nuxt-link></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <nuxt-link to="/consultation" class="nav-link navbar-link">
                                الاستشارات
                            
                            </nuxt-link>
                          </li>
                        <li class="nav-item">
                            <nuxt-link to="/book-store" class="nav-link navbar-link">
                                الكتب
                            
                            </nuxt-link>
                          </li>
                        <li class="nav-item">
                            <nuxt-link to="/blogs" class="nav-link navbar-link">
                                المدونات
                            
                            </nuxt-link>
                          </li>
                        <li class="nav-item">
                            <nuxt-link to="/conversitions" class="nav-link navbar-link">
                                المحادثات
                            
                            </nuxt-link>
                          </li>
                        <li class="nav-item">
                            <nuxt-link to="/tests" class="nav-link navbar-link">
                                الاختبارات
                            
                            </nuxt-link>
                          </li>
                        <li class="nav-item">
                            <nuxt-link to="/about" class="nav-link navbar-link">
                                عن دكتورة نورة
                            
                            </nuxt-link>
                          </li>
                  
            
                        <!-- <li class="nav-item">
                            <NuxtLink :to="localePath('/')" class="nav-link homeicon"><img src="/images/home.png" alt="home_icon"></NuxtLink>
                        </li> -->
                      </ul>
                    </div>
                </nav>
                <div class="col-lg-3 hd-left">
                    
                    <ul class="">
                        <li v-if="!store.token"><NuxtLink :to="localePath('login')"  class="bg-green px-4 text-light mt-2 py  
                            "> تسجيل الدخول  </NuxtLink></li>
                            <div v-if="store.token" class="d-flex">
                                <li><NuxtLink :to="localePath('profile')" class="hdlftIcon"><img src="/images/user.svg" style="width: 35px;" alt="user"></NuxtLink></li>
                                <li><a href="#" class="hdlftIcon"><img src="/images/bell.svg" alt="cart-shopping-fast" style="width: 35px;"></a></li>
                            </div>
                    </ul>
                </div>
            </div>
		</header>
    </div>
</template>
<script setup>
const localePath = useLocalePath();
import { useAuthStore } from "@/stores/auth.ts";
let store = useAuthStore();

const closeNav = ()=>{
    const navItems = document.querySelectorAll(".navbar-link");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    navbarCollapse.classList.remove("show");
    removeStore();
    document.querySelector(".navbar-toggler").classList.add("collapsed");
  });
});

}

onBeforeMount(() => {
    closeNav(); 
});
onMounted(() => {
    closeNav(); 
});

</script>
<style lang="">
    
</style>