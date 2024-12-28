<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="bannerImage" style="background-image: url(/images/consultation-banner.png);">
                    <div>
                        <h1 class="fC-LightOrange"> لوريم إيبسوم هو ببساطة نص وهمي للنص صناعة الطباعة والتنضيد. </h1>
                        <p>لوريم إيبسوم هو ببساطة نص وهمي<br>للطباعة والتنضيد</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="blogs-container mt-5 mb-5">
                <div class="head d-flex flex-column flex-xl-row flex-lg-row align-items-center gap-3 justify-content-between">
                    <h1 class="fC-green fs-2"> المدونات </h1>
                    <div class="d-flex align-items-center flex-column flex-xl-row flex-lg-row gap-3">
                        <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder=" كتب بواسطة  " class="selectCustom" />
                        <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder=" رتب حسب التاريخ  " class="selectCustom" />

                
                    </div>
                </div>
                <div class="blogs mt-5">
                    <div class="row">
                        <div v-for="item in store.blogs" class="col-12 col-xl-4 col-lg-4 text-center mb-4">
                            <CardJournal2 :blog="item"></CardJournal2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import {useBlogsStore} from '@/stores/blogs';
let store = useBlogsStore();
store.getBlogs();
const selectedCity = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
</script>
<style lang="">

</style>