<template>
    <div>
       
        <div class="consultation-banner generalBanner">
            <div class="container-fluid">
                <div class="row">
                    <div class="bannerImage" style="background-image: url(/images/consultation-banner.png);">
                        <div>
                            <h1 class="fC-LightOrange">الأستشارات</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <div v-if="!store.nextQuiz">
        <div class="consultation_TabSec">
            <div class="container">
                <div class="d-flex align-items-center justify-content-center mb-5">
                    <div class="tabsConst d-flex align-items-center justify-content-betwee gap-2">
                        <button @click="store.activeType = 1 , store.getData(store.activeType)" :class="{'active': store.activeType == 1}"  class=""> فردي (لنفسي) </button>
                        <button @click="store.activeType = 2 , store.getData(store.activeType)" :class="{'active': store.activeType == 2}" > أزواج (لي ولشريكي) </button>
                        <button @click="store.activeType = 3 , store.getData(store.activeType)" :class="{'active': store.activeType == 3}" > لطفلي (استشارات تربوية -مراهقة) </button>
                    </div>
    
                </div>
                <div class="row">
                    <!-- <div class="tabsTop">
                        <ul class="tabs">
                            <li v-for="item, index in store?.types"
                                @click="activeType = item.id, store.getData(activeType)"
                                :class="{ 'active': activeType == item.id }"> {{ item.name }} </li>
                        </ul>
                    </div> -->
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
    
        <div class="bookConsultation2">
            <div class="container">
                <h2 class="text-center fC-green">احجز استشارتك</h2>
                <div class="row justify-content-center">
    
                    <div class="col-xl-9">
                        <div class="row">
                            <div class="col-md-6 bookConsultationSecLft">
                                 <div class="text-center iconSec">
                                        <p class="fw-bold">حدد تاريخ</p>
                                        <span><img src="/images/watch-icon.png" alt="watch icon" /></span>
                                    </div>
                             
                                <DatePicker v-model="date" @value-change="formateDate" dateFormat="dd/mm/yy" inline
                                    class=" h-100" />
                            </div>
                            <div class="col-md-6">
                                <div class="row">
                                      <div class="text-center iconSec mb-3">
                                    <p class="fw-bold">حدد الوقت</p>
                                    <span><img src="/images/calender-Icon.png" alt="calender icon" /></span>
                                  </div>
                                    <div v-if="store?.slots.length >= 1" class="timeslot row-cols-3 justify-content-center">
                                        <button class="col cu" :class="{'active': currentTime == index+1}" v-for="i , index in store?.slots" @click="store.time = i?.value ,currentTime = index +1"> {{ i?.name }} </button>
                                    </div>
                                </div>
                            </div>
    
                        </div>
                        <div class="col-12 text-center"><button @click="getQuiz()" class=" bg-green text-light btnGreen"> قم بالحجز </button>
                        </div>
                    </div>
    
                </div>
            </div>
    
        </div>
    </div>
    <div v-if="store.nextQuiz">
        <QuizStep1 v-if="store.activeType == 1"></QuizStep1>
        <QuizStep2 v-if="store.activeType == 2"></QuizStep2>
        <QuizStep3 v-if="store.activeType == 3"></QuizStep3>
    </div>
  
</template>
<script setup>
const date = ref(new Date());
import { useConsultationStore } from '@/stores/consultation';
let store = useConsultationStore();
let activeType = ref(1);
let currentTime = ref(0);
const question1 = ref();
let nextQuiz = ref(false);
const formateDate = () => {
    const year = date.value.getFullYear();
    const month = String(date.value.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(date.value.getDate()); // Ensure 2-digit format
    const formattedDate = `${year}-${month}-${day}`;
    store.date = formattedDate
    store.getTime(activeType.value, formattedDate)
}

const getQuiz = ()=>{
if(store.time != ""){
    store.nextQuiz = true
}
}
watch(() => store.types, (val) => {
    if (val.length >= 1) {
        console.log(store.types);
        // store.activeType.value = store.types[0].id;
    }
});
onMounted(() => {
    // store.getTypes();
    store.getData(store.activeType);

});

useHead({
      title: ` الاستشارات `,
      meta: [
        { name: 'description', content: 'test test test'},
        { name: 'keywords', content: 'keyword1, keyword2, keyword3' },
        { name: 'author', content: 'khaled sawada' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: `الاستشارات | نورا` },
        { property: 'og:description', content: 'test test test' },
        { property: 'og:image', content: '/images/nora.png' },
      ],
    });

</script>
<style lang="scss">
.tabsConst{
    // width: 627px;
    height: 56px;
    border: 1px solid #43806C;
    border-radius: 28px;
    padding: 4px;
    button{
        color: #111928;
        padding: 3px 9px;
        width: fit-content;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 28px;
        &.active{
            background-color: #43806C;
            color: #fff;
        }
    }

}
.p-datepicker-panel {
    background-color: #F4C086 !important;

    .p-datepicker-day-selected,
    .p-datepicker-month-selected {
        background-color: #000 !important;
    }
}

.consultation-questions {
    .head {
        .icon {
            width: 48px;
            height: 48px;
            border-radius: 30px;
            background: #FFF;
            box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
        }
    }
}

.radio-check-inputs .input:has(input[type="checkbox"]:checked) {
    border: 1px solid #43806C;

    .icon-active {
        display: block;
    }

    span {
        color: #43806C;
    }

    .icon {
        display: none;
    }
}
.timeslot{
    .active{
        border: 2px solid #fff;
        color: #fff;
    }
}
</style>