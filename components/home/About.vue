<template>
    <div>
        <div class="homeAboutSec">
                <div class="container">
                    <div class="row align-items-center">
                        <div data-aos="fade-right" class="col-12 col-xl-6 col-lg-6 homeAboutSecImg">
                            <!-- <img src="/images/nora.png" alt="nora_image"/> -->
                            <img :src="store.HomeData?.section7?.image" alt="nora_image"/>
                        </div>
                        <div data-aos="fade-left" class="col-12 col-xl-6 col-lg-6 text-center text-xl-start text-lg-start">
                            <h2>  {{store.HomeData?.section7?.title}} </h2>
                            <p> {{store.HomeData?.section7?.description}}  </p>
                            <nuxt-link to="/about">
                               <button class="btn btn-primary btnAbout bg-yellow"> المزيد عن نورا  </button> 
                            </nuxt-link>
                            <!-- <a href="#" class="btn btn-primary btnAbout bg-yellow"> </a> -->
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>
<script setup>
import { useGeneralStore } from '@/stores/general';
const store = useGeneralStore();
</script>
<style lang="">
    
</style>