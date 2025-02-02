<template>
    <div>
        <div class=" bookCard" :class="{'profile': profile}">
            <div class="card-body">
                <figure><img :src="book?.image" alt="book image" class="w-100"></figure>
                <div class="prdt_details">
                    <p> {{ book?.title }} </p>
                    <NuxtLink v-if="!profile" :to="localePath({ path: '/book-details', query:{id: book?.id} })">التفاصيل</NuxtLink>
                </div>
            </div>
            <div  class="card-footer">
                <button v-if="!profile" class="btn btn-1 btn-primary bg-green">هدية لصديق</button>
                <button v-if="!profile" class="btn btn-2 btn-primary bg-black">اشتري الآن</button>
                <NuxtLink v-if="profile" class="w-100" :to="localePath({ path: '/book-details', query:{id: book?.id} })">
                    <button class="btn btn-1 btn-primary bg-green w-100"> عرض التفاصيل </button>
                </NuxtLink>
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