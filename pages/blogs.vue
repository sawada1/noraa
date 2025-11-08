<template>
    <div class="min-vh-100">
        <div class="container-fluid">
            <div class="row">
                <div class="bannerImage" style="background-image: url(/images/blogs-background.png);">
                    <div>
                        <h1 class="fC-LightOrange"> المدونات </h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div  class="blogs-container mt-5 mb-5">
                <div class="head d-flex flex-column flex-xl-row flex-lg-row align-items-center gap-3 justify-content-between">
                    <h1 class="fC-green fs-2"> المدونات </h1>
                    
                    <div class="d-flex align-items-center flex-column flex-xl-row flex-lg-row gap-3">
                        <Select v-model="selectedAuthor" :options="authors" optionValue="id" @change="getBlogsFilter" optionLabel="name" placeholder=" كتب بواسطة  " class="selectCustom" />
                        <DatePicker v-model="selectedDate" placeholder=" رتب حسب التاريخ  " dateFormat="dd-mm-yy" @value-change="chooseDate" class="selectDate" />

                        <!-- <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder=" رتب حسب التاريخ  " class="selectCustom" /> -->

                
                    </div>
                </div>
                <div v-if="store.blogs.length >= 1" class="blogs mt-5">
                    <div class="row">
                        <div v-for="item in store.blogs" class="col-12 col-xl-4 col-lg-4 text-center mb-4">
                            <CardJournal2 :blog="item"></CardJournal2>
                        </div>
                    </div>
                </div>
            </div>
            <GeneralEmpty v-if="store.lengthBlogs"></GeneralEmpty>

        </div>
        <GeneralLoader v-if="store.pendingBlogs"></GeneralLoader>
    </div>
</template>
<script setup>
import {useBlogsStore} from '@/stores/blogs';
let store = useBlogsStore();
const selectedAuthor = ref();
const selectedDate = ref();
const authors = ref([]);
const getAuthors = async()=>{
    let result = await useApi().get('authors');
    if(result.status === 200){
        authors.value = result.data.data 
    }
}

const getBlogsFilter = ()=>{
 
    store.getBlogs(selectedAuthor.value );
}

const chooseDate = ()=>{
    const year = selectedDate.value.getFullYear();
    const month = String(selectedDate.value.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(selectedDate.value.getDate()); // Ensure 2-digit format
    const formattedDate = `${year}-${month}-${day}`;
    store.getBlogs(selectedAuthor.value , formattedDate );
}


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
getAuthors();
 
});
</script>
<style lang="">

</style>