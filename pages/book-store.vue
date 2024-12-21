<template>
    <div>
        <div class="bestSellingBooks">
                <h2 class="fC-green text-center">شراء الكتب الأكثر مبيعا من قبل نورا</h2>
                <div class="container">
                    <div class="row">
                        <div v-for="i in 6" class="col-12 col-xl-4 col-lg-4 col-md-4 mb-5">
                            <CardBook1></CardBook1>
                        </div>
                    </div>
                </div>
            </div>

            <div class="aboutAuthor">
                <generalAboutBook></generalAboutBook>
            </div>

            <div class="bestSellingBooks">
                <h2 class="fC-green text-center">اختر كتابك الإلكتروني أو نسختك المادية</h2>
                <div class="container">
                    <div class="row">
                        <div v-for="i in 3" class="col-md-4 mb-5">
                            <CardBook1></CardBook1>
                        </div>
                    
                    </div>
                </div>
            </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style lang="">
    
</style>