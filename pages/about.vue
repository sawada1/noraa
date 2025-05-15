<template>
    <div>
        <div class="about-banner">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 about-bannerCon">
                        <h1 class="fC-LightOrange"> {{ dataAbout?.section1?.title }} </h1>
                         <p> {{ dataAbout?.section1?.description }} </p>
                    </div>
                    <div class="col-md-6 about-bannerImg">
                        <!-- <span><img src="/images/aboutBanner.jpg" alt="about banner image"></span> -->
                        <span><img :src="dataAbout?.section1?.image" alt="about banner image"></span>
                    </div>
                </div>
            </div>
        </div>

        <div class="Qualifications">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-8 col-12 QualificationsTitle">
                        <h2 class="fC-green">Her Qualifications</h2>
                    </div>
                    <div class="col-md-4 text-center QualificationsIcon">
                        <img src="/images/Qualifications-Icon.png" alt="Qualifications Icon">
                    </div>
                </div>
                <div class="row mt-5">
                    <div v-for="item in dataAbout?.section2?.qualifications" class="col-md-4 mb-4">
                        <div class=" text-center">
                            <!-- <figure><img src="/images/trophy-icon.png" alt=""></figure> -->
                            <figure><img :src="item?.image" alt="img"></figure>
                            <h4 class="fC-green"> {{ item?.title }} </h4>
                            <p> {{ item?.description }} </p>
                        </div>
                    </div>
                    <!-- <div class="col-md-4 mb-4">
                        <div class=" text-center">
                            <figure><img src="/images/ribbon badges.png" alt=""></figure>
                            <h4 class="fC-green">المؤهل 2</h4>
                            <p>لوريم إيبسوم هو ببساطة نص وهمي للطباعة والتنضيد</p>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class=" text-center">
                            <figure><img src="/images/certificate-icon.png" alt=""></figure>
                            <h4 class="fC-green">المؤهل 1</h4>
                            <p>لوريم إيبسوم هو ببساطة نص وهمي للطباعة والتنضيد</p>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>

        <div class="consultaionSec">
            <div class="container">
                <div class="row">
                    <h2 class="fC-green text-center">كيف تعمل الاستشارة</h2>
                    <p class="text-center">لوريم إيبسوم هو ببساطة نص وهمي من صناعة الطباعة والتنضيد، وكان<br>لوريم
                        إيبسوم هو الصناعة.</p>
                </div>
                <div class="row">
                    <div class="col-md-7 consultaionSecRht text-right">
                        <img src="/images/graphic2.png" alt="graphic2">
                    </div>
                    <div class="col-md-5 consultaionSecLft">
                        <ul>
                            <li class="align-items-center">
                                <figure><img src="/images/greyIcon.png" alt=""></figure>
                                <div>
                                    <h5 class="fc-grey">1. العنوان هنا</h5>
                                    <p>لوريم إيبسوم دولور الجلوس<br>أميت، consectetur</p>
                                </div>
                            </li>
                            <li class="align-items-center">
                                <figure><img src="/images/greeenIcon.png" alt=""></figure>
                                <div>
                                    <h5 class="fC-green">1. العنوان هنا</h5>
                                    <p>لوريم إيبسوم دولور الجلوس<br>أميت، consectetur</p>
                                </div>
                            </li>
                            <li class="align-items-center">
                                <figure><img src="/images/DarkGreenIcon.jpg" alt=""></figure>
                                <div>
                                    <h5 class="fc-Darkgreay">1. العنوان هنا</h5>
                                    <p>لوريم إيبسوم دولور الجلوس<br>أميت، consectetur</p>
                                </div>
                            </li>
                            <li class="align-items-center">
                                <figure><img src="/images/yellowIcon.png" alt=""></figure>
                                <div>
                                    <h5 class="fC-LightOrange">1. العنوان هنا</h5>
                                    <p>لوريم إيبسوم دولور الجلوس<br>أميت، consectetur</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="bookConsultationSec">
            <div class="container">
                <div class="row align-items-center">
                    <h2 class="text-center fC-green"> {{ dataAbout?.section3?.title }} </h2>
                    <div class="col-md-6">
                      <p> {{ dataAbout?.section3?.description }} </p>            
                    </div>
                    <div class="col-md-6 bookConsultationSecLft">
                        <img :src="dataAbout?.section3?.image" alt="img" style="width: 100%; height: 380px; object-fit: contain;">
                        <!-- <DatePicker v-model="date" inline showWeek class="w-full sm:w-[30rem]" />

                        <span class="calenderBtn"><button class="text-light bg-green btnGreen">انتقل إلى الخطوة
                                التالية</button></span> -->
                    </div>
                </div>
            </div>
        </div>

        <div class="conSpecialSec">
            <div class="container">
                <h2 class="text-center fC-green">استشارة متخصصة مع الطبيب</h2>
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <!-- <span><img src="/images/conSpecialSec.png" alt="conSpecial"></span> -->
                        <span><img :src="dataAbout?.section4?.image" alt="conSpecial"></span>
                    </div>
                    <div class="col-md-6 conSpecialSecLft">
                        <h4><strong> {{ dataAbout?.section4?.title }} </strong></h4>
                         <p> {{ dataAbout?.section4?.description }} </p>
                         <NuxtLink to="/consultation" class="bg-dark py-3 px-5 rounded-5 text-light mt-5 text-light">
                            استشر الآن
                         </NuxtLink>                      
                    </div>
                </div>
            </div>
        </div>

        <div class="aboutAllcarousel">
            <!-- <h2 class="text-center fC-green">الآخرين الذين استفادوا</h2> -->
            <HomeTestimonials></HomeTestimonials>

        </div>

        <GeneralLoader v-if="pending"></GeneralLoader>

    </div>
</template>
<script setup>
const date = ref();
let dataAbout = ref();
let pending = ref(true);
const getData = async () => {
    // pending.value = true;
    let result = await useApi().get('about_noura');
    if (result.status === 200) {
        dataAbout.value = result.data.data
        pending.value = false
    }
}

onMounted(() => {
   getData(); 
});
useHead({
    title: ` من نحن `,
    meta: [
        { name: 'description', content: 'test test test' },
        { name: 'keywords', content: 'keyword1, keyword2, keyword3' },
        { name: 'author', content: 'khaled sawada' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: `من نحن | نورا` },
        { property: 'og:description', content: 'test test test' },
        { property: 'og:image', content: '/images/nora.png' },
    ],
});
</script>
<style lang="">

</style>