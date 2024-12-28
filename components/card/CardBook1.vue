<template>
    <div>
        <div class=" bookCard">
            <div class="card-body">
                <figure><img src="/images/bookimage.png" alt="book image"></figure>
                <div class="prdt_details">
                    <p>لوريم إيبسوم هو ببساطة النص الوهمي</p>
                    <NuxtLink to="/book-details">التفاصيل</NuxtLink>
                </div>
            </div>
            <div  class="card-footer">
                <button v-if="!profile" class="btn btn-1 btn-primary bg-green">هدية لصديق</button>
                <button v-if="!profile" class="btn btn-2 btn-primary bg-black">اشتري الآن</button>
                <button class="btn btn-1 btn-primary bg-green w-100" v-if="profile"> عرض التفاصيل </button>
            </div>
        </div>
    </div>
</template>
<script setup>
let props = defineProps({
    profile:{
        default: false,
        type: Boolean
    }
})

</script>
<style lang="">

</style>