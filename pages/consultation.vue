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
                <div class="d-flex align-items-center justify-content-center mb-5">
                    <div class="tabsConst d-flex align-items-center justify-content-betwee gap-2">
                        <button @click="activeBtn = 0" :class="{'active': activeBtn == 0}"  class=""> فردي (لنفسي) </button>
                        <button @click="activeBtn = 1" :class="{'active': activeBtn == 1}" > أزواج (لي ولشريكي) </button>
                        <button @click="activeBtn = 2" :class="{'active': activeBtn == 2}" > لطفلي (استشارات تربوية -مراهقة) </button>
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
    <div class="container consultation-questions mb-5 ">
        <h3 class="fC-green text-center my-5"> أزواج (لي ولشريكي) </h3>
        <div class="row">
            <div class="col-xl-3 col-lg-3 col-12 mb-5 mb-xl-0 mb-lg-0  position-relative">
                <div class="custom-shadow-container position-sticky top-0">
                    <div>
                        <div class="head d-flex align-items-center gap-3">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M16.2344 6.35151H9.52567C8.68403 6.35275 7.87729 6.68797 7.28261 7.28353C6.68792 7.8791 6.3539 8.68634 6.3539 9.52798V18.3515C5.60506 18.3515 4.88688 18.054 4.35737 17.5245C3.82785 16.995 3.53037 16.2768 3.53037 15.528V6.45315C3.53037 5.03668 4.5892 3.80751 6.03767 3.68609C6.24869 3.66895 6.45984 3.65327 6.67108 3.63903C6.90932 3.18001 7.26906 2.79524 7.71104 2.5267C8.15302 2.25816 8.66027 2.11616 9.17743 2.11621H10.5892C11.1064 2.11616 11.6136 2.25816 12.0556 2.5267C12.4976 2.79524 12.8573 3.18001 13.0956 3.63903C13.3073 3.65315 13.5191 3.66915 13.729 3.68609C15.1426 3.80562 16.1854 4.97927 16.2344 6.35151ZM10.5892 3.52798C10.9636 3.52798 11.3227 3.67671 11.5875 3.94147C11.8522 4.20623 12.001 4.56532 12.001 4.93974H7.76567C7.76567 4.56532 7.91441 4.20623 8.17916 3.94147C8.44392 3.67671 8.80301 3.52798 9.17743 3.52798H10.5892Z"
                                        fill="#43806C" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M20.4717 9.52838C20.4717 8.55332 19.6811 7.76367 18.707 7.76367H9.5305C8.55544 7.76367 7.7658 8.55426 7.7658 9.52838V20.1166C7.7658 21.0907 8.55639 21.8813 9.5305 21.8813H18.707C19.175 21.8813 19.6239 21.6954 19.9548 21.3644C20.2858 21.0335 20.4717 20.5846 20.4717 20.1166V9.52838ZM17.6482 11.999C17.6482 11.8118 17.5738 11.6322 17.4414 11.4998C17.309 11.3675 17.1295 11.2931 16.9423 11.2931H16.9347C16.7475 11.2931 16.568 11.3675 16.4356 11.4998C16.3032 11.6322 16.2289 11.8118 16.2289 11.999V12.0065C16.2289 12.1937 16.3032 12.3733 16.4356 12.5056C16.568 12.638 16.7475 12.7124 16.9347 12.7124H16.9423C17.1295 12.7124 17.309 12.638 17.4414 12.5056C17.5738 12.3733 17.6482 12.1937 17.6482 12.0065V11.999ZM15.5305 11.999C15.5305 11.8118 15.4561 11.6322 15.3238 11.4998C15.1914 11.3675 15.0118 11.2931 14.8246 11.2931H11.2952C11.108 11.2931 10.9285 11.3675 10.7961 11.4998C10.6637 11.6322 10.5893 11.8118 10.5893 11.999C10.5893 12.1862 10.6637 12.3657 10.7961 12.4981C10.9285 12.6305 11.108 12.7048 11.2952 12.7048H14.8246C15.0118 12.7048 15.1914 12.6305 15.3238 12.4981C15.4561 12.3657 15.5305 12.1862 15.5305 11.999ZM17.6482 14.8225C17.6482 14.6353 17.5738 14.4557 17.4414 14.3234C17.309 14.191 17.1295 14.1166 16.9423 14.1166H16.9347C16.7475 14.1166 16.568 14.191 16.4356 14.3234C16.3032 14.4557 16.2289 14.6353 16.2289 14.8225V14.83C16.2289 15.0172 16.3032 15.1968 16.4356 15.3292C16.568 15.4615 16.7475 15.5359 16.9347 15.5359H16.9423C17.1295 15.5359 17.309 15.4615 17.4414 15.3292C17.5738 15.1968 17.6482 15.0172 17.6482 14.83V14.8225ZM15.5305 14.8225C15.5305 14.6353 15.4561 14.4557 15.3238 14.3234C15.1914 14.191 15.0118 14.1166 14.8246 14.1166H11.2952C11.108 14.1166 10.9285 14.191 10.7961 14.3234C10.6637 14.4557 10.5893 14.6353 10.5893 14.8225C10.5893 15.0097 10.6637 15.1893 10.7961 15.3216C10.9285 15.454 11.108 15.5284 11.2952 15.5284H14.8246C15.0118 15.5284 15.1914 15.454 15.3238 15.3216C15.4561 15.1893 15.5305 15.0097 15.5305 14.8225ZM17.6482 17.646C17.6482 17.4588 17.5738 17.2793 17.4414 17.1469C17.309 17.0145 17.1295 16.9401 16.9423 16.9401H16.9347C16.7475 16.9401 16.568 17.0145 16.4356 17.1469C16.3032 17.2793 16.2289 17.4588 16.2289 17.646V17.6536C16.2289 17.8408 16.3032 18.0203 16.4356 18.1527C16.568 18.2851 16.7475 18.3594 16.9347 18.3594H16.9423C17.1295 18.3594 17.309 18.2851 17.4414 18.1527C17.5738 18.0203 17.6482 17.8408 17.6482 17.6536V17.646ZM15.5305 17.646C15.5305 17.4588 15.4561 17.2793 15.3238 17.1469C15.1914 17.0145 15.0118 16.9401 14.8246 16.9401H11.2952C11.108 16.9401 10.9285 17.0145 10.7961 17.1469C10.6637 17.2793 10.5893 17.4588 10.5893 17.646C10.5893 17.8332 10.6637 18.0128 10.7961 18.1452C10.9285 18.2775 11.108 18.3519 11.2952 18.3519H14.8246C15.0118 18.3519 15.1914 18.2775 15.3238 18.1452C15.4561 18.0128 15.5305 17.8332 15.5305 17.646Z"
                                        fill="#43806C" />
                                </svg>
                            </div>
                            <h4 class="fw-bold fc-Darkgreay fs-6"> عدد الاسألة {{ questionNum }} من 12 </h4>
                        </div>
                        <div class=" d-flex align-items-center flex-column gap-4">
                            <Knob v-model="updatePercentage" :size="80" valueTemplate="{value}%" valueColor="#43806C" readonly />

                            <span> المتبقي من محتوي الكورس </span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-xl-9 col-lg-9 col-12">
                <div class="custom-shadow-container">
                    <div v-if="selectedInputs == 1" class="row">
                        <div class="col-xl-6 col-lg-6 col-12 ">
                            <div class="input  d-flex flex-column gap-2">
                                <label for=""> هل سينضم إليك شريكك؟ في العلاج؟ </label>
                                <Select v-model="selected1"  :options="joinPartner" style="min-height: 41px;" optionLabel="name"
                                    placeholder="  " class="" />

                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-12 ">
                            <div class="input  d-flex flex-column gap-2">
                                <label for=""> الاسم كامل </label>
                                <InputText name="" v-model="selected2"  type="text" placeholder="" />


                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-12 mt-5">
                            <div class="input  d-flex flex-column gap-2">
                                <label for=""> العمر </label>
                                <Select v-model="selected3"  :options="ages" style="min-height: 41px;" optionLabel="name"
                                    placeholder="  " class="" />

                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-12 mt-5">
                            <div class="input  d-flex flex-column gap-2">
                                <label for=""> نوع الجنس </label>
                                <Select v-model="selected4" :options="genders" style="min-height: 41px;" optionLabel="name"
                                    placeholder="  " class="" />

                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-12 mt-5">
                            <div class="input  d-flex flex-column gap-2">
                                <label for=""> ما هو الوضع الاجتماعي الخاص بك؟ </label>
                                <Select v-model="selected5" :options="statues" style="min-height: 41px;" optionLabel="name"
                                    placeholder="  " class="" />

                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-12 mt-5">
                            <div class="input  d-flex flex-column gap-2">
                                <label for=""> هل تعيش حالياً مع شريك حياتك؟ </label>
                                <Select v-model="selected6" :options="relations1" style="min-height: 41px;" optionLabel="name"
                                    placeholder="  " class="" />

                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-12 mt-5">
                            <div class="input  d-flex flex-column gap-2">
                                <label for=""> هل العنف المنزلي قضية حالية في علاقتك؟ </label>
                                <Select v-model="selected7" :options="relations2" style="min-height: 41px;" optionLabel="name"
                                    placeholder="  " class="" />

                            </div>
                        </div>
                    </div>
                    <div v-if="selectedInputs == 2" class="">
                        <h4> ما الذي دفعك إلى التفكير في طلب الاستشارة اليوم؟يمكنك اختيار أكثر من خيار </h4>
                        <div class="mt-4">
                            <div class="radio-check-inputs">
                                <label v-for="(theinput, index) in checkBoxArray1" :key="`check-${index}`" :for="`check-${index}`"
                                    class="input d-flex align-items-center justify-content-between">
                                    <span>
                                      {{ theinput.name }}
                                    </span>
                                    <Checkbox v-model="selected8" :inputId="`check-${index}`" :value="theinput.value" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div v-if="selectedInputs == 3" class="">
                        <h4> ما الذي دفعك إلى التفكير في طلب الاستشارة اليوم؟يمكنك اختيار أكثر من خيار </h4>
                        <div class="mt-4">
                            <div class="radio-check-inputs">
                                <label v-for="(theinput, index) in checkBoxArray2" :key="`check-${index}`" :for="`check-${index}`"
                                    class="input d-flex align-items-center justify-content-between">
                                    <span>
                                      {{ theinput.name }}
                                    </span>
                                    <Checkbox v-model="selected9" :inputId="`check-${index}`" :value="theinput.value" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div v-if="selectedInputs == 4" class="row">
                        <div class="col-xl-6 col-lg-6 col-12 mt-5">
                            <div class="input  d-flex flex-column gap-2">
                                <label for=""> 	بالنسبة للجلسات المباشرة للمعالج، ماذا تفضل؟ </label>
                                <Select v-model="selected10" :options="DirectSessions" style="min-height: 41px;" optionLabel="name"
                                    placeholder="  " class="" />

                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-12 mt-5">
                            <div class="input  d-flex flex-column gap-2">
                                <label for=""> 	هل تفضل المعالج الذي يكون مرنًا أم منظمًا؟</label>
                                <Select v-model="selected11" :options="flexArray" style="min-height: 41px;" optionLabel="name"
                                    placeholder="  " class="" />

                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-12 mt-5">
                            <div class="input  d-flex flex-column gap-2">
                                <label for=""> 	هل تفضل المعالج الذي يكون </label>
                                <Select v-model="selected12" :options="favArray" style="min-height: 41px;" optionLabel="name"
                                    placeholder="  " class="" />

                            </div>
                        </div>
                    </div>
                    <div v-if="selectedInputs == 5">
                        <div class="d-flex align-items-center flex-column gap-3 mb-5">
                            <img src="/images/success1.svg" alt="">
                            <span> تم الانتهاء من عملية الاختبار بنجاح </span>
                            <button class="bg-green px-5 py-2 rounded-5 text-light"> ادفع الان </button>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-between">
                        <button v-if="selectedInputs >= 2" @click="selectedInputs--" class="bg-green text-light py-2 px-5 rounded-5 mt-5"> رجوع
                        </button>
                        <button @click="selectedInputs++" class="bg-green text-light py-2 px-5 rounded-5 mt-5"> التالي
                        </button>
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
let percentage = ref(10);
let activeType = ref(0);
const selectedCity = ref();
const selected1 = ref();
const selected2 = ref('');
const selected3 = ref();
const selected4 = ref();
const selected5 = ref();
const selected6 = ref();
const selected7 = ref();
const selected8 = ref([]);
const selected9 = ref([]);
const selected10 = ref();
const selected11 = ref();
const selected12 = ref();
const selectedInputs = ref(1);
const activeBtn = ref(0);
let questionNum = ref(0);
const  joinPartner = ref([
    { name: 'نعم', value: 'yes' },
    { name: 'لا', value: 'no' },
    { name: 'لست متأكد بعد', value: 'not sure' },
]);
const  ages = ref([]);


const checkQuestionsNum = () => {
  let count = 0;

  if (selected1.value) count++;
  if (selected2.value.trim() !== "") count++;
  if (selected3.value) count++;
  if (selected4.value) count++;
  if (selected5.value) count++;
  if (selected6.value) count++;
  if (selected7.value) count++;
  if (selected8.value.length) count++;
  if (selected9.value.length) count++;
  if (selected10.value) count++;
  if (selected11.value) count++;
  if (selected12.value) count++;

  questionNum.value = count;
};

watch([selected1, selected2, selected3, selected4, selected5, selected6, selected7 , selected8 , selected9 , selected10 , selected11 , selected12], checkQuestionsNum);
const genders = ref([
    {
    name:"ذكر",
    value:"male"
},
    {
    name:"أنثي",
    value:"female"
},
]);

const updatePercentage = computed(()=>{
    return percentage.value = Math.round((questionNum.value / 12) * 100);
});

const DirectSessions = ref([
    {
        name:"فيديو",
        value:"test1"
    },
    {
        name:"صوت فقط",
        value:"test1"
    },
    {
        name:"الرسائل النصية",
        value:"test1"
    },
    {
        name:"لا اعرف",
        value:"test1"
    },
]);
const flexArray = ref([
    {
        name:"مرن",
        value:"test1"
    },
    {
        name:" مرن الي حد ما ",
        value:"test1"
    },
    {
        name:" ليس لدي تفضيلات ",
        value:"test1"
    },
    {
        name:" منظم الي حد ما ",
        value:"test1"
    },
    {
        name:" منظم ",
        value:"test1"
    },
]);
const favArray = ref([
    {
        name:"متعاطف",
        value:"test1"
    },
    {
        name:"  مستمع جيد ",
        value:"test1"
    },
    {
        name:" مباشر وصريح ",
        value:"test1"
    },
    {
        name:"لا اعرف",
        value:"test1"
    },
   
]);
const statues = ref([
    {
    name:"متزوج",
    value:"male"
},
    {
    name:"منفصل",
    value:"female"
},
    {
    name:"مطلق",
    value:"female"
},
    {
    name:"ارمل",
    value:"female"
},
{
    name:"مرتبط (خطوبة)",
    value:"female"
},
{
name:"اخري",
value:"female"
},
]);

const relations1 = ref([
    {
        name:"لا",
        value:"no",
    },
    {
        name:"نعم",
        value:"yes",
    },
])
const relations2 = ref([
    {
        name:"لا",
        value:"no",
    },
    {
        name:"نعم",
        value:"yes",
    },
    {
        name:"احيانا",
        value:"sometimes",
    },
]);

const checkBoxArray1 = ref([
    {name:"تحسين التواصل بيننا " , value:"test1"},
    {name:" لكي أقرر: هل الطلاق هو الخيار الأفضل لنا " , value:"test2"},
    {name:" أود ان أجعل زواجي قوي " , value:"test3"},
    {name:" حل النزاعات والخلافات بيننا " , value:"test4"},
    {name:" التغلب على الخيانة " , value:"test5"},
    {name:" أفهم نفسي بشكل أفضل " , value:"test6"},
    {name:" أفهم شريكي بشكل أفضل " , value:"test7"},
    {name:" مشاكل بالعلاقة الزوجية " , value:"test8"},
    {name:" تخفيف التوتر بيننا " , value:"test9"},
    {name:" منع الانفصال أو الطلاق " , value:"test10"},
    {name:" تعلم طرقا 'جيدة' للخلاف " , value:"test11"},
    {name:" التوقف عن إيذاء بعضنا البعض " , value:"test12"},
    {name:" استعادة قلب وحب شريكي المفقود " , value:"test13"},
    {name:" أتعلم أن أحب شريكي مرة أخرى " , value:"test14"},
    {name:" مناقشة قضايا خاصة بتربية الأطفال والمال " , value:"test15"},
    {name:" تحسين الجنس وعلاقتنا الحميمة " , value:"test16"},
    {name:" التأقلم مع مرحلة ما بعد الطلاق أو الانفصال " , value:"test17"},
    {name:" العلاقة مع أهل الزوج/الزوجة " , value:"test18"},
    {name:" أعرف كيف اختار الشريك المناسب " , value:"test19"},
    {name:" كيف ارفع حصانة علاقتي الزوجية ضد الخيانة والطلاق؟ " , value:"test20"},
    {name:" كيف أكون صديقة زوجي؟ " , value:"test21"},
    {name:" اريد ان افهم نوع ارتباطي العاطفي بزوجي وتأثيره بعلاقتنا؟ " , value:"test22"},
    {name:" أود أن ادخل الاثارة والحماس بيني وبين شريكي" , value:"test23"},
    {name:" أفهم نفسي ودوافعي اتجاه رغبة الزواج " , value:"test24"},
    {name:" مساعدتي للاستعداد لفترة الخطبة والتعارف " , value:"test25"},
    {name:" معرفة نمطي ونمط زوجي(خطيبي) ونقاط القوة والضعف فيما بيننا " , value:"test26"},
    {name:" فهم الحب وأنواعه  " , value:"test27"},
    {name:" التخلص من الخوف أو التعلق بالزواج " , value:"test28"},
    {name:" المساعدة في التعامل مع زوجي المعدد وتقبل الواقع " , value:"test29"},
    {name:" المساعدة في التعامل مع وضعي الجديد (سنقل مام) " , value:"test30"},
    {name:" آخرى " , value:"test31"},
]);
const checkBoxArray2 = ref([
    {name:" يستمع جيداً " , value:"test1"},
    {name:" يستكشف ديناميكية العلاقة ودولفعها الخفية " , value:"test2"},
    {name:" يعلمني مهارات جديدة للتواصل " , value:"test3"},
    {name:" يتحدى معتقداتي او معتقداتنا  " , value:"test4"},
    {name:" التوسط في الأوقات الصعبة " , value:"test5"},
    {name:" اكتشاف تأثير التاريخ الاسري والتربية " , value:"test6"},
    {name:" اعطاء الواجبات المنزلية " , value:"test7"},
    {name:" ارشادي لوضع الأهداف " , value:"test8"},
    {name:" يتحقق مني بشكل استباقي " , value:"test9"},
    {name:" آخرى " , value:"test10"},
    {name:" لا أعرف " , value:"test11"},
]);
for(let i = 18; i <= 55; i++){
   ages.value.push({ name: i, value: i }) 
}
const question1 = ref();
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
</style>