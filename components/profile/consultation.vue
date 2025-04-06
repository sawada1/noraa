<template>
    <div class="custom-shadow-container">
        <div class="d-flex flex-column gap-5">
            <div v-for="item in arrData" class="consultation-item">
                <div class="d-flex flex-column gap-4">
                    <h4> {{ item?.title }}</h4>
                    <p class="type"> {{ item?.type }} </p>
                    <p class="date"> موعد البدء {{ item?.schedule?.date }}</p>
                    <a :href="item?.schedule?.zoom_join_url" target="_blank">
                        <button class="d-flex align-items-center justify-content-center text-light"> التفاصيل </button>
                    </a>
                </div>
                <div class="float-text"> <span> {{ item?.status }} </span> </div>
            </div>
        </div>
        <div class="d-flex justify-content-end mt-4">
            <Paginator :rows="rows" :totalRecords="totalRecords" @page="onPageChange" />
                </div>
    </div>
</template>
<script setup>
 let arrData = ref([]);
 const totalRecords = ref(100); // Replace with your dynamic total count
const rows = ref(10); // Number of items per page
const page = ref(1); // Active page number (starting from 1)

// Function to fetch data when page changes


 const getData = async()=>{
 let result = await useApi().get('my-consultation' , {params:{page: page.value}});
 if(result.status === 200){
    arrData.value = result.data?.data;
    totalRecords.value = result.data?.meta?.total;
    rows.value = result.data?.meta?.per_page;
 }
 }

 const onPageChange = (event) => {
    page.value = event.page + 1; // PrimeVue uses zero-based index
    console.log("Current Page:", page.value);
    getData(); // Call function to fetch new data based on page
};

 onMounted(() => {
    getData();
 });

</script>
<style lang="scss">
.consultation-item {
    padding: 24px;
    border-radius: 16px;
    background: #F7F7F7;
    position: relative;

    .float-text {
        position: absolute;
        top: 20px;
        left: 0;
        width: 145px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        border-radius: 0px 24px 24px 0px;
        background: #43806C;
    }

    h4 {
        color: #43806C;
        font-size: 24px;
        font-weight: 500;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    p {
        font-size: 18px;
        font-weight: 400;

        &.type {
            color: #212529;
        }

        &.date {
            color: #6C757D;
        }
    }

    button {
        width: 143px;
        height: 40px;
        border-radius: 24px;
        background: #43806C;
    }
}
</style>