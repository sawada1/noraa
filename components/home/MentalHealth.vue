<template>
    <div>
        <div class="mentalHealth-sec mt-5">
                <div class="container">
                    <div class="row">
                        <h2 class="fC-green text-center">  {{store.HomeData?.section3?.title}}  </h2>
                        <p class="text-center"> {{store.HomeData?.section3?.title}} </p>
                    </div>
                    <div class="row mentalHealthCard">
                        <div v-for="i, index in store.HomeData?.section3?.details" data-aos="fade-up" :data-aos-duration="(index + 1) * 200" class="col-md-4">
                            <div class="card">
                                <figure>
                                    <!-- <img src="/images/benefit3.png" alt=""> -->
                                    <img :src="i?.image" alt="">
                                </figure>
                                <div class="card-body">
                                    <h4 class="fC-green"> {{i?.title}} </h4>
                                    <p> {{i?.description}} </p>
                                </div>
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