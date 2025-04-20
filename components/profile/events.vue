<template>
    <div class="custom-shadow-container">
        <div v-if="arrData.length">
            <div class="row">
                <div v-for="i in arrData" class="col-12 col-xl-6 col-lg-6 mb-4">
                    <CardLive :profile="true" :card="i"></CardLive>
                </div>
            </div>
            <div class="d-flex justify-content-end ">
                <Paginator :rows="rows" :totalRecords="totalRecords" @page="onPageChange"></Paginator>
            </div>
        </div>
        <GeneralEmpty v-else></GeneralEmpty>
    </div>
</template>
<script setup>
let arrData = ref([]);
const totalRecords = ref(100); // Replace with your dynamic total count
const rows = ref(10); // Number of items per page
const page = ref(1); // Active page number (starting from 1)

// Function to fetch data when page changes


const getData = async () => {
    let result = await useApi().get('my-live', { params: { page: page.value } });
    if (result.status === 200) {
        arrData.value = result.data?.data;
        totalRecords.value = result.data?.meta?.total;
        rows.value = result.data?.meta?.per_page;
    }
}

const onPageChange = (event) => {
    page.value = event.page + 1; // PrimeVue uses zero-based index
    getData(); // Call function to fetch new data based on page
};

onMounted(() => {
    getData();
});
</script>
<style lang="">

</style>