<template>
    <div class="custom-shadow-container">
        <div class="row">
            <div v-for="i in arrData" class="col-12 col-xl-4 col-lg-4 mb-4">
                <CardJournal :course="i"></CardJournal>
             
            </div>
        </div>
    </div>
</template>
<script setup>
let arrData = ref([]);
 const getData = async()=>{
 let result = await useApi().get('my-course');
 if(result.status === 200){
    arrData.value = result.data?.courses;
 }
 }


 onMounted(() => {
    getData();
 });
</script>
<style lang="">
    
</style>