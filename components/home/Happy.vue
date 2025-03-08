<template>
    <div>
        <div class="beHappySec">
                <div class="container-fluid">
                    <div v-for="i , index in store.HomeData?.section4" class="row " :class="{'flex-row-reverse': index % 2 == 0}">
                        <div  data-aos="zoom-in-right" class="col-md-6 p-0 beHappySecImg" :style="{ backgroundImage: `url(${i.image})` }"></div>
                        <div data-aos="zoom-in-left" class="col-md-6 p-0 bg-green beHappySecCon">
                            <div>
                                <h2 class="fC-LightOrange"> {{i?.title}} </h2>
                                <p> {{i?.description}} </p>    
                            </div>
                        </div>
                    </div>
                    <!-- <div class="row">
                        <div data-aos="zoom-in-right" class="col-md-6 p-0 bg-black beHappySecCon">
                            <div>
                                <h2 class="fC-LightOrange">تعلم أن تكون سعيد !</h2>
                                <p>لوريم إيبسوم هو ببساطة نص وهمي من صناعة الطباعة والتنضيد. لقد كان لوريم إيبسوم هو النص الوهمي القياسي في هذه الصناعة منذ عام 1500.</p>    
                            </div>
                        </div>
                        <div data-aos="zoom-in-left" class="col-md-6 p-0 beHappySecImg" style="background-image:url('/images/couple2.png')"></div>
                    </div> -->
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