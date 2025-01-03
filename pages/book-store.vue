<template>
    <div>
        <div class="bestSellingBooks">
                <h2 class="fC-green text-center">شراء الكتب الأكثر مبيعا من قبل نورا</h2>
                <div class="container">
                    <div class="row">
                        <div v-for="i in store.books.Best_Seller" class="col-12 col-xl-4 col-lg-4 col-md-4 mb-5">
                            <CardBook1 :book="i"></CardBook1>
                        </div>
                    </div>
                </div>
            </div>

    

            <div class="bestSellingBooks">
                <h2 class="fC-green text-center">اختر كتابك الإلكتروني أو نسختك المادية</h2>
                <div class="container">
                    <div class="row">
                        <div v-for="i in store.books.books" class="col-md-4 mb-5">
                            <CardBook1 :book="i"></CardBook1>
                        </div>
                    
                    </div>
                </div>
            </div>
    </div>
</template>
<script setup lang="ts">
import { useBooksStore } from '@/stores/books';
let store = useBooksStore();
store.getBooks();
</script>
<style lang="">
    
</style>