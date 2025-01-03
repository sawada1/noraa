<template>
    <div>
        <div class="consultation-banner generalBanner">
            <div class="container-fluid">
                <div class="row">
                    <div class="bannerImage" style="background-image: url(/images/consultation-banner.png);">
                        <div>
                            <h1 class="fC-LightOrange">الأستشارات</h1>
                            <p>لوريم إيبسوم هو ببساطة نص وهمي<br>للطباعة والتنضيد</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="consultation_TabSec">
            <div class="container">
                <div class="row">
                    <div class="tabsTop">
                        <ul class="tabs">
                            <li v-for="item, index in store?.types" @click="activeType = item.id , store.getData(activeType)"
                                :class="{ 'active': activeType == item.id }"> {{ item.name }} </li>
                        </ul>
                    </div>
                    <div class="tab_container">
                        <div id="tab1" class="tab_content d-block">
                            <h2> {{ store?.dataConsultation?.title }} </h2>
                            <div class="row align-items-center">
                                <div class="col-md-6 tabrhtCon">
                                    <p> {{ store?.dataConsultation?.description }} </p>
                                </div>
                                <div class="col-md-6">
                                    <span>
                                        <img :src="store?.dataConsultation?.image" alt="Online Consultation" />
                                        <!-- <img src="/images/onlineConsultation.png" alt="Online Consultation"/> -->
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <!-- .tab_container -->
                </div>
            </div>
        </div>
    </div>

    <div class="bookConsultation2">
        <div class="container">
            <h2 class="text-center fC-green">احجز استشارتك</h2>
            <p class="text-center">لوريم إيبسوم هو ببساطة نص وهمي<br>للطباعة والتنضيد</p>
            <div class="row justify-content-center">

                <div class="col-xl-9">
                    <div class="row">
                        <div class="col-md-6 bookConsultationSecLft">
                            <div class="text-center iconSec mb-3">
                                <p>حدد الوقت</p>
                                <span><img src="/images/calender-Icon.png" alt="calender icon" /></span>
                            </div>
                            <DatePicker v-model="date" @value-change="formateDate" dateFormat="dd/mm/yy" inline
                                class=" h-100" />
                        </div>
                        <div class="col-md-6">
                            <div class="row">
                                <div class="text-center iconSec">
                                    <span><img src="/images/watch-icon.png" alt="watch icon" /></span>
                                    <p>حدد تاريخ</p>
                                </div>
                                <div v-if="store?.slots.length >= 1" class="timeslot row-cols-3 justify-content-center">
                                    <div class="col" v-for="i in store?.slots"> {{ i }} </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-12 text-center"><button class=" bg-green text-light btnGreen">قم بالدفع</button>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>
<script setup>
const date = ref(new Date());
import { useConsultationStore } from '@/stores/consultation';
let store = useConsultationStore();
let activeType = ref(0);

const formateDate = () => {
    const year = date.value.getFullYear();
    const month = String(date.value.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(date.value.getDate()); // Ensure 2-digit format
    const formattedDate = `${year}-${month}-${day}`;
    store.getTime(activeType.value, formattedDate)
}
watch(() => store.types, (val) => {
    if (val.length >= 1) {
        console.log(store.types);
        activeType.value = store.types[0].id;
        store.getData(activeType.value);
    }
});
onMounted(() => {
store.getTypes();
})

</script>
<style lang="scss">
.p-datepicker-panel {
    background-color: #F4C086 !important;

    .p-datepicker-day-selected,
    .p-datepicker-month-selected {
        background-color: #000 !important;
    }
}
</style>