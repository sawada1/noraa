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
                                <li rel="tab4">لنفسي</li>
                                <li rel="tab3">لطفلي</li>
                                <li rel="tab2">للمتروجين</li>
                                <li class="active" rel="tab1">للمجموعات</li>
                            </ul>
                        </div>
                          <div class="tab_container">
                            <h2 class="d_active tab_drawer_heading" rel="tab1">للمجموعات</h2>
                            <div id="tab1" class="tab_content d-block">
                                <h2>كيفية حجز الاستشارة الخاصة بك</h2>
                                <div class="row align-items-center">
                                    <div class="col-md-6 tabrhtCon">
                                        <p>لوريم إيبسوم هو ببساطة نص وهمي من صناعة الطباعة والتنضيد. لقد كان لوريم إيبسوم هو النص الوهمي القياسي في هذه الصناعة منذ عام 1500.</p>
                                        <p>عندما أخذت طابعة غير معروفة لوح الكتابة وخلطته لعمل نموذج كتاب. لقد تمكنت من البقاء ليس فقط لخمسة قرون، بل أيضًا للقفزة.</p>
                                        <p>وقد انتشر بشكل كبير في ستينيات القرن الماضي مع إصدار أوراق "ليتراسيت" التي تحتوي على مقاطع لوريم إيبسوم. لقد تمكنت من البقاء ليس فقط لخمسة قرون، بل أيضًا للقفزة.</p>
                                    </div>
                                    <div class="col-md-6">
                                        <span><img src="/images/onlineConsultation.png" alt="Online Consultation"/></span>
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
                                <div class="col-md-6">
                                    <div class="row">
                                        <div class="text-center iconSec">
                                            <span><img src="/images/calender-Icon.png" alt="calender icon"/></span>
                                            <p>حدد تاريخ</p>
                                        </div>
                                        <div class="timeslot row-cols-3 justify-content-center">
                                            <div class="col">09:00 AM</div>
                                            <div class="col">10:00 AM</div>
                                            <div class="col">11:00 AM</div>
                                            <div class="col">12:00 AM</div>
                                            <div class="col">13:00 PM</div>
                                            <div class="col">14:00 PM</div>
                                            <div class="col">15:00 PM</div>
                                            <div class="col">16:00 PM</div>
                                            <div class="col">17:00 PM</div>
                                            <div class="col">18:00 PM</div>
                                            <div class="col">19:00 PM</div>
                                            <div class="col"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 bookConsultationSecLft">
                                    <div class="text-center iconSec">
                                        <span><img src="/images/watch-icon.png" alt="watch icon"/></span>
                                        <p>حدد الوقت</p>
                                    </div>
                                    <DatePicker v-model="date" inline showWeek class=" h-100" />
                                </div>
                           </div>
                            <div class="col-12 text-center"><button class=" bg-green text-light btnGreen">قم بالدفع</button></div>
                        </div> 
                        
                    </div>
                </div>
            
    </div>
</template>
<script setup>
const date = ref();


</script>
<style lang="">
    
</style>