<template>
    <div>
        <div class=" bookCard">
            <div class="card-body">
                <figure><img :src="book?.image" alt="book image" class="w-100"></figure>
                <div class="prdt_details">
                    <p> {{ book?.title }} </p>
                    <NuxtLink :to="localePath({ path: '/book-details', query:{id: book?.id} })">التفاصيل</NuxtLink>
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
const localePath = useLocalePath();

let props = defineProps({
    profile:{
        default: false,
        type: Boolean
    },
    book:{
        required: true,
        default:{
            id: 1,
            title: 'title',
            image: '/images/bookimage.png'
        }
    }
})

</script>
<style lang="">

</style>