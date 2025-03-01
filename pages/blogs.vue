<template>
    <div class="min-vh-100">
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
            <div v-if="store.blogs.length >= 1" class="blogs-container mt-5 mb-5">
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
            <GeneralEmpty v-if="store.lengthBlogs"></GeneralEmpty>

        </div>
    </div>
</template>
<script setup>
import {useBlogsStore} from '@/stores/blogs';
let store = useBlogsStore();
const selectedCity = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);

useHead({
      title: ` المدونات `,
      meta: [
        { name: 'description', content: 'test test test'},
        { name: 'keywords', content: 'keyword1, keyword2, keyword3' },
        { name: 'author', content: 'khaled sawada' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: `المدونات | نورا` },
        { property: 'og:description', content: 'test test test' },
        { property: 'og:image', content: '/images/nora.png' },
      ],
    });
onMounted(() => {
store.getBlogs();
 
});
</script>
<style lang="">

</style>