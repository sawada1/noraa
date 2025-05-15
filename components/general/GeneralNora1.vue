<template>
    <div class="row align-items-center">
        <div class="col-md-6">
            <!-- <figure class="" style="background-image: url(/images/psychologist.png);">
            </figure> -->
            <figure v-if="data?.image" :style="{ backgroundImage: 'url(' + data?.image + ')' }"></figure>

        </div>
        <div class="col-md-6">
            <h2 class="fC-LightOrange"> {{ data?.name }} </h2>
            <p> {{ data?.description }} </p>

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