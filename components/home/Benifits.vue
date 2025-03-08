<template>
    <div>
        <div class="container">
                    <div class="row justify-content-center align-items-center text-center">
                        <div class="col-md-11 ">
                            <div class="row justify-content-center justify-content-lg-start  justify-content-xl-start">
                                <div v-for="i , index in store.HomeData?.section5" data-aos="fade-up" :data-aos-duration="(index + 1) * 200" class=" col-xl-4 col-lg-4 col-6 mb-5 mb-xl-0 mb-lg-0">
                                    <div class="card align-items-center">
                                      <!-- <img src="/images/health-icon.png" :alt="i?.title"> -->
                                      <img :src="i?.image" :alt="i?.title">
                                       
                                        <h4> {{i?.title}} </h4>
                                        <p> {{i?.description}} </p>
                                    </div>
                                    <h6 class="fC-green"> {{i?.title}} </h6>
                                </div>
                        
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