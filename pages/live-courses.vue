<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div
          class="bannerImage"
          style="background-image: url(/images/consultation-banner.png)"
        >
          <div>
            <h1 class="text-light">الدورات الحية</h1>
            <p>لوريم إيبسوم هو نص عربي غير معنى، يُستخدم في مجالات الطباعة</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bundledCourse topMargin">
      <div class="container">
        <div class="checkBtnsLive">
          <button @click="checkBtn = 1 , getData()" :class="{ active: checkBtn == 1 }">
            ندوات الحالية
          </button>
          <button @click="checkBtn = 2 , getData()" :class="{ active: checkBtn == 2 }">
            ندوات القادمة
          </button>
        </div>
        <div class="row">
          <div v-for="i in arrData" class="col-md-4 mb-4">
            <CardLive :card="i"></CardLive>
          </div>
        </div>

        <div class="d-flex justify-content-center mt-5">
          <Paginator
            :rows="rows"
            :totalRecords="totalRecords"
            @page="onPageChange"
          />
        </div>
      </div>
    </div>
    <GeneralLoader v-if="pending"></GeneralLoader>
  </div>
</template>
<script setup>
let checkBtn = ref(1);
const totalRecords = ref(100); // Replace with your dynamic total count
const rows = ref(10); // Number of items per page
const page = ref(1); // Active page number (starting from 1)
let arrData = ref([]);
let pending = ref(true);
const getData = async () => {
  pending.value = true;
  const result = await useApi().get("lives", {
    params: {
      page: page.value,
      // status: checkBtn.value == 1 ? "current" : "future"
    },
  });
  if (result.status === 200) {
    pending.value = false;
    arrData.value = result.data?.data;
    totalRecords.value = result.data?.meta?.total;
    rows.value = result.data?.meta?.per_page;
  }
};

const onPageChange = (event) => {
  page.value = event.page + 1; // PrimeVue uses zero-based index
  getData(); // Call function to fetch new data based on page
};

onMounted(() => {
  getData();
});
useHead({
  title: ` الدورات الحيه `,
  meta: [
    { name: "description", content: "test test test" },
    { name: "keywords", content: "keyword1, keyword2, keyword3" },
    { name: "author", content: "khaled sawada" },
    { name: "robots", content: "index, follow" },
    { property: "og:title", content: `الدورات الحيه | نورا` },
    { property: "og:description", content: "test test test" },
    { property: "og:image", content: "/images/nora.png" },
  ],
});
</script>
<style lang="scss"></style>
