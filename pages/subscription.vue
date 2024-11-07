<template >
    <div>
        <div class="consultation-banner generalBanner">
                <div class="container-fluid">
                    <div class="row">
                        <div class="bannerImage" style="background-image: url(images/subscription-banner.png);">
                            <!-- <img src="images/subscription-banner.png" alt="subscription banner"/> -->
                            <div>
                                <h1 class="fC-LightOrange">الاشتراك</h1>
                                <p>لوريم إيبسوم هو ببساطة نص وهمي<br>للطباعة والتنضيد</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="subscriptionSec">
                <div class="container">
                    <div class="row">
                        <h1 class="text-center fC-green">خطط الاشتراك</h1>
                        <p class="text-center">لوريم إيبسوم هو ببساطة نص وهمي من صناعة الطباعة<br>والتنضيد.</p>
                        <div class="consultation_TabSec">
                            <div class="tabsTop">
                                <ul class="tabs">
                                    <li @click="activeBtn = 1" :class="{'active': activeBtn == 1}">ثانوي</li>
                                    <li @click="activeBtn = 2" :class="{'active': activeBtn == 2}">شهري</li>
                                </ul>
                            </div>
                              <div class="tab_container">
                                <h2 class="d_active tab_drawer_heading" rel="tab1">ثانوي</h2>
                                <div v-if="activeBtn == 1" class="tab_content d-block">
                                    <div class="row align-items-center">
                                        <div class="col-6 mb-4 subTabRht">
                                            <div class="card bg-offwhite2">
                                                <div class="card-header">
                                                    <h2>أساسية</h2>
                                                    <h4>7 دولارات شهريًا</h4>
                                                </div>
                                                <div class="card-body">
                                                    <ul>
                                                        <li>ما يتضمن</li>
                                                        <li>لوريم إيبسوم هو ببساطة نص وهمي للنص-</li>
                                                        <li>صناعة الطباعة والتنضيد.-</li>
                                                        <li>لقد تم صناعة لوريم إيبسوم-</li>
                                                        <li>نص وهمي قياسي منذ ذلك الحين-</li>
                                                        <li>القرن السادس عشر عندما كان مجهول-</li>
                                                        <li>الطابعة أخذت مطبخ من النوع و-</li>
                                                    </ul>
                                                </div>
                                                <div class="card-footer">
                                                    <a href="#" class="btn btn-primary bg-green btnGreen">البدء</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6 subTabLft">
                                            <div class="card bg-black">
                                                <div class="card-header">
                                                    <span>الأكثر شعبية</span>
                                                    <h2 class="fC-LightOrange">احترافي</h2>
                                                    <h4>10 دولارات شهريًا</h4>
                                                </div>
                                                <div class="card-body">
                                                    <p>ما يتضمن</p>
                                                    <ul>
                                                        <li>لوريم إيبسوم هو ببساطة نص وهمي للنص-</li>
                                                        <li>صناعة الطباعة والتنضيد.-</li>
                                                        <li>لقد تم صناعة لوريم إيبسوم-</li>
                                                        <li>نص وهمي قياسي منذ ذلك الحين-</li>
                                                        <li>القرن السادس عشر عندما كان مجهول-</li>
                                                        <li>الطابعة أخذت مطبخ من النوع و-</li>
                                                    </ul>
                                                </div>
                                                <div class="card-footer">
                                                    <a href="#" class="btn btn-primary bg-green btnGreen">البدء</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- #tab1 -->
                                <h2 class="tab_drawer_heading" rel="tab2">شهري</h2>
                                <div v-if="activeBtn == 2" id="tab2" class="tab_content d-block">
                                    <div class="row align-items-center">
                                        <div class="col-6 mb-4 subTabRht">
                                            <div class="card bg-offwhite2">
                                                <div class="card-header">
                                                    <h2>أساسية</h2>
                                                    <h4>7 دولارات شهريًا</h4>
                                                </div>
                                                <div class="card-body">
                                                    <ul>
                                                        <li>ما يتضمن</li>
                                                        <li>لوريم إيبسوم هو ببساطة نص وهمي للنص-</li>
                                                        <li>صناعة الطباعة والتنضيد.-</li>
                                                        <li>لقد تم صناعة لوريم إيبسوم-</li>
                                                        <li>نص وهمي قياسي منذ ذلك الحين-</li>
                                                        <li>القرن السادس عشر عندما كان مجهول-</li>
                                                        <li>الطابعة أخذت مطبخ من النوع و-</li>
                                                    </ul>
                                                </div>
                                                <div class="card-footer">
                                                    <a href="#" class="btn btn-primary bg-green btnGreen">البدء</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6 subTabLft">
                                            <div class="card bg-black">
                                                <div class="card-header">
                                                    <span>الأكثر شعبية</span>
                                                    <h2 class="fC-LightOrange">احترافي</h2>
                                                    <h4>10 دولارات شهريًا</h4>
                                                </div>
                                                <div class="card-body">
                                                    <p>ما يتضمن</p>
                                                    <ul>
                                                        <li>لوريم إيبسوم هو ببساطة نص وهمي للنص-</li>
                                                        <li>صناعة الطباعة والتنضيد.-</li>
                                                        <li>لقد تم صناعة لوريم إيبسوم-</li>
                                                        <li>نص وهمي قياسي منذ ذلك الحين-</li>
                                                        <li>القرن السادس عشر عندما كان مجهول-</li>
                                                        <li>الطابعة أخذت مطبخ من النوع و-</li>
                                                    </ul>
                                                </div>
                                                <div class="card-footer">
                                                    <a href="#" class="btn btn-primary bg-green btnGreen">البدء</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                         
                                </div>
                                <!-- #tab2 -->
                              </div>
                              <!-- .tab_container -->
                              </div>
                        </div>
                    </div>
                </div>
    </div>
</template>
<script lang="ts" setup>
let activeBtn = ref(1);
</script>
<style lang="">
    
</style>