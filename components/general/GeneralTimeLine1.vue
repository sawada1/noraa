<template>
    <ul class="liveCourseSchedule">
      
        <li v-for="i in data">
            <p> {{ i?.start_time }} </p>
            <h4> {{ i?.title }} </h4><span>  {{ i?.description }}  </span>
        </li>
 
    </ul>
</template>

<script setup>
let props = defineProps({
    data:{
        required: true
    }
})
</script>