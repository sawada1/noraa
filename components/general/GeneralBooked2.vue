<template>
    <div class="row">
        <h2 class="fC-green">كيفية حجز الاستشارة الخاصة بك</h2>

        <div v-for="i in data" class="col-md-4">
            <!-- <figure><img src="/images/star_badges_icon.png" alt="star_badges icon" /></figure> -->
            <figure><img :src="i?.image" style="width: 130px; height: 130px; object-fit: cover;" alt="star_badges icon" /></figure>
            <h4 class="fC-green">  {{ i?.title }} </h4>
            <p>  {{ i?.description_ar }}  </p>
        </div>
  
    </div>
</template>

<script setup>
let props = defineProps({
    data:{
        required: true
    }
})
</script>