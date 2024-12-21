<template >
    <div>
        <div class="generalBanner quizBan">
                <div class="container-fluid">
                    <div class="row">
                        <div class="bannerImage" style="background-image: url(/images/journals_banner.png);">
                            <div>
                                <h2 class="fC-LightOrange">كيفية التغلب على العوائق الإبداعية<br>& البحث عن الإلهام</h2>
                                <p>عندما أخذت طابعة غير معروفة لوحًا من النوع وأرسلته إلى هناك<br>اصنع كتاب عينة من النوع. لقد نجا ليس فقط خمسة ...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="multipleQuizSec">
                <div class="container">
                    <div class="row justify-content-center">
                        <h2 class="text-center fC-green">اختبارات الاختيار من متعدد</h2>
                        <p class="text-center">لوريم إيبسوم هو ببساطة نص وهمي للطباعة والتنضيد<br>صناعة لوريم إيبسوم لقد كانت الصناعة'</p>
                        <div v-for="i in 6" class="col-md-11">
                            <div class="card quizCard bg-offwhite3">
                                <div class="card-header" style="background-image:url(/images/journal3.png);"></div>
                                <div class="card-body">
                                    <h2 class="fC-green">الاختبار {{ i }}</h2>
                                    <p>لوريم إيبسوم هو ببساطة نص وهمي من صناعة الطباعة والتنضيد.</p>
                                </div>
                                <nuxt-link to="/test">
                                    <button class="btn btn-success bg-green py-3 px-5"> ابدء الان </button>
                                </nuxt-link>
                                <!-- <div class="card-footer">
                                    <a href="#" class=" btn-success bg-green ">  </a>
                                </div> -->
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>

            <div class="secIcon text-center bg-offwhite3">
                <div class="container">
                   <GeneralQuiz></GeneralQuiz>
                </div>
            </div>
            
            <div class="groupConsltnProdcts">
                <div class="container">
                    <div class="row groupConsultation">
                        <h2 class="text-center fC-green">لماذا تعتبر المشاورات الجماعية مهمة؟</h2>
                    </div>
                    <div class="row">
                        <div v-for="i in 6" class="col-md-4 text-center">
                           <CardJournal></CardJournal>
                        </div>
                   
                    </div>
                </div>
           </div>
    </div>
</template>
<script setup>

</script>
<style lang="">
    
</style>