<template>
    <div class="min-vh-100">
        <div class="bestSellingBooks">
                <h2 class="fC-green text-center">شراء الكتب الأكثر مبيعا من قبل نورا</h2>
                <div class="container">
                    <div class="row">
                        <div v-for="i in store.books.Best_Seller" class="col-12 col-xl-4 col-lg-4 col-md-4 mb-5">
                            <CardBook1 :book="i"></CardBook1>
                        </div>
                    </div>
                    <GeneralEmpty v-if="store.lengthBooks"></GeneralEmpty>
                </div>
            </div>

    

            <div v-if="store.books?.books?.length >= 1" class="bestSellingBooks">
                <h2 class="fC-green text-center">اختر كتابك الإلكتروني أو نسختك المادية</h2>
                <div class="container">
                    <div class="row">
                        <div v-for="i in store.books.books" class="col-md-4 mb-5">
                            <CardBook1 :book="i"></CardBook1>
                        </div>
                    
                    </div>
                </div>
            </div>
        <GeneralLoader v-if="store.pendingLoader"></GeneralLoader>
        
    </div>
</template>
<script setup lang="ts">
import { useBooksStore } from '@/stores/books';
let store = useBooksStore();
store.getBooks();

useHead({
      title: ` الكتب `,
      meta: [
        { name: 'description', content: 'test test test'},
        { name: 'keywords', content: 'keyword1, keyword2, keyword3' },
        { name: 'author', content: 'khaled sawada' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: `الكتب | نورا` },
        { property: 'og:description', content: 'test test test' },
        { property: 'og:image', content: '/images/nora.png' },
      ],
    });
</script>
<style lang="">
    
</style>