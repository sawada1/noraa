<template>
    <div>
        <div class="bestSellingBooks">
                <h2 class="fC-green text-center">شراء الكتب الأكثر مبيعا من قبل نورا</h2>
                <div class="container">
                    <div class="row">
                        <div v-for="i in 6" class="col-12 col-xl-4 col-lg-4 col-md-4 mb-5">
                            <div class="card bookCard">
                                <div class="card-body">
                                    <figure><img src="/images/bookimage.png" alt="book image"></figure>
                                    <div class="prdt_details">
                                        <p>لوريم إيبسوم هو ببساطة النص الوهمي</p>
                                        <NuxtLink to="/book-details">التفاصيل</NuxtLink>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <button class="btn btn-primary bg-green">هدية لصديق</button>
                                    <button class="btn btn-primary bg-black">اشتري الآن</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="aboutAuthor">
                <div class="container">
                    <div class="row align-items-center">
                        <h2 class="fC-green text-center">نبذة عن الكاتب</h2>
                        <div class="col-md-6">
                            <figure>
                                <img src="/images/onlineConsultation.png" alt="online Consultation">
                            </figure>
                        </div>
                        <div class="col-md-6">
                            <p>لوريم إيبسوم هو ببساطة نص وهمي من صناعة الطباعة والتنضيد. لقد كان لوريم إيبسوم هو النص الوهمي القياسي في هذه الصناعة منذ عام 1500.</p>
                            <p>عندما أخذت طابعة غير معروفة لوح الكتابة وخلطته لعمل نموذج كتاب. لقد تمكنت من البقاء ليس فقط لخمسة قرون، بل أيضًا للقفزة.</p>
                            <p>وقد انتشر بشكل كبير في ستينيات القرن الماضي مع إصدار أوراق "ليتراسيت" التي تحتوي على مقاطع لوريم إيبسوم. لقد تمكنت من البقاء ليس فقط لخمسة قرون، بل أيضًا للقفزة عندما أخذت طابعة غير معروفة لوح الطباعة وخلطته لصنع نوع.</p>
                            <a href="#" class="btn btn-primary bg-green btnGreen">التحميل الان</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bestSellingBooks">
                <h2 class="fC-green text-center">اختر كتابك الإلكتروني أو نسختك المادية</h2>
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card bookCard">
                                <div class="card-body">
                                    <figure><img src="/images/bookimage.png" alt="book image"></figure>
                                    <div class="prdt_details">
                                        <p>لوريم إيبسوم هو ببساطة النص الوهمي</p>
                                        <a href="book-details.html">التفاصيل</a>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <button class="btn btn-primary bg-green">هدية لصديق</button>
                                    <button class="btn btn-primary bg-black">اشتري الآن</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card bookCard">
                                <div class="card-body">
                                    <figure><img src="/images/bookimage.png" alt="book image"></figure>
                                    <div class="prdt_details">
                                        <p>لوريم إيبسوم هو ببساطة النص الوهمي</p>
                                        <a href="book-details.html">التفاصيل</a>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <button class="btn btn-primary bg-green">هدية لصديق</button>
                                    <button class="btn btn-primary bg-black">اشتري الآن</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card bookCard">
                                <div class="card-body">
                                    <figure><img src="/images/bookimage.png" alt="book image"></figure>
                                    <div class="prdt_details">
                                        <p>لوريم إيبسوم هو ببساطة النص الوهمي</p>
                                        <a href="book-details.html">التفاصيل</a>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <button class="btn btn-primary bg-green">هدية لصديق</button>
                                    <button class="btn btn-primary bg-black">اشتري الآن</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style lang="">
    
</style>