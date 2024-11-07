<template>
    <div>
        <div class="topDetailsSec">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <!-- <div class="prductGallery">
                                <div class="show" href="/images/book-club.png">
                                    <img src="/images/book-club.png" id="show-img">
                                </div>
                                <div class="small-img">
                                    <img src="/images/next-icon.png" class="icon-left" alt="" id="prev-img">
                                     <div class="small-container">
                                      <div id="small-img-roll">
                                        <img src="/images/book-club.png" class="show-small-img" alt="">
                                        <img src="/images/bookimage.png" class="show-small-img" alt="">
                                        <img src="/images/couple1.jpg" class="show-small-img" alt="">
                                        <img src="/images/couple2.png" class="show-small-img" alt="">
                                        <img src="/images/book-club.png" class="show-small-img" alt="">
                                        <img src="/images/bookimage.png" class="show-small-img" alt="">
                                        <img src="/images/bookimage.png" class="show-small-img" alt="">
                                        <img src="/images/couple1.jpg" class="show-small-img" alt="">
                                      </div>
                                     </div>
                                    <img src="/images/next-icon.png" class="icon-right" alt="" id="next-img">
                                   </div>
                            </div> -->
                        <div class="prductGallery">

                            <swiper :style="{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',
                            }" :spaceBetween="10"  :thumbs="{ swiper: thumbsSwiper }"
                                :modules="[SwiperFreeMode, SwiperNavigation, SwiperZoom, SwiperThumbs]"
                                class="mySwiper2 show">
                                <swiper-slide v-for="i, index in images" :key="index">
                                    <div class="swiper-zoom-container">
                                        <img :src="i.image" class="w-100" />
                                    </div>
                                </swiper-slide>
                            </swiper>
                            <div class="small-img">
                                <img src="/images/next-icon.png" class="icon-left d-none d-xl-block d-lg-block d-md-block" alt="" id="prev-img-book">

                                <swiper @swiper="setThumbsSwiper" :spaceBetween="10" :slidesPerView="4" :freeMode="true"
                                    :watchSlidesProgress="true" :navigation="{
                                        nextEl: '#next-img-book',
                                        prevEl: '#prev-img-book',
                                    }" :breakpoints="{
                        '300': {
                            slidesPerView: 3.2,
                            spaceBetween: 20,
                        },
                        '900': {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                        '1400': {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                    }" :modules="[SwiperFreeMode, SwiperNavigation, SwiperThumbs]" class="mySwiper small-container">
                                    <swiper-slide v-for="i, index in images" :key="index">
                                        <img :src="i.image" class="show-small-img" />
                                    </swiper-slide>

                                </swiper>
                                <img src="/images/next-icon.png" class="icon-right d-none d-xl-block d-lg-block d-md-block" alt="" id="next-img-book">


                            </div>

                        </div>
                    </div>
                    <div class="col-md-6">
                        <h2 class="fC-green">اسم الكتاب<a class="bdShare" href="#"><img src="/images/share_icon.png"
                                    alt="share Icon"></a></h2>
                        <h4>وصف</h4>
                        <div class="detailscDescptn">
                            <p>لوريم إيبسوم هو ببساطة نص وهمي من صناعة الطباعة والتنضيد. لقد كان لوريم إيبسوم هو النص
                                الوهمي القياسي في هذه الصناعة منذ عام 1500.</p>
                            <p>عندما أخذت طابعة غير معروفة لوح الكتابة وخلطته لعمل نموذج كتاب. لقد تمكنت من البقاء ليس
                                فقط لخمسة قرون، بل أيضًا للقفزة.</p>
                            <p>وقد انتشر بشكل كبير في ستينيات القرن الماضي مع إصدار أوراق "ليتراسيت" التي تحتوي على
                                مقاطع لوريم إيبسوم. لقد تمكنت من البقاء ليس فقط لخمسة قرون، بل أيضًا للقفزة عندما أخذت
                                طابعة غير معروفة لوح الطباعة وخلطته لصنع نوع.</p>
                        </div>
                        <div class="cheknDropdown">
                            <select class="writtenBy">
                                <option>كمية</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                            <select class="shortBydate">
                                <option>الكتاب الاليكتروني</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>
                        <div class="descrptnBtnSec">
                            <button class="btn btn-primary bg-green btnGreen btn1">أضف إلى السلة</button>
                            <button class="btn btn-primary bg-black btnGreen btn2">اشتري الآن</button>
                            <button class="btn btn-primary bg-green btnGreen btn3">هدية لصديق</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="relatedCourses">
            <div class="container">
                <h2 class="text-center fC-green">الدورات ذات الصلة</h2>
                <div class="row">
                    <div class="col-md-4 text-center">
                        <div class="card journalCard">
                            <div class="card-header">
                                <figure>
                                    <img src="/images/journal1.png" alt="journals image">
                                </figure>
                            </div>
                            <div class="card-body">
                                <h4>لوريم إيبسوم هو ببساطة
                                    نص وهمي للطباعة</h4>
                                <p class="journalDetails">لوريم إيبسوم هو ببساطة نص وهمي من صناعة الطباعة والتنضيد.</p>
                                <button class="btn btn-primary bg-green btnGreen1">عرض التفاصيل</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 text-center">
                        <div class="card journalCard">
                            <div class="card-header">
                                <figure>
                                    <img src="/images/journal2.png" alt="journals image">
                                </figure>
                            </div>
                            <div class="card-body">
                                <h4>لوريم إيبسوم هو ببساطة
                                    نص وهمي للطباعة</h4>
                                <p class="journalDetails">لوريم إيبسوم هو ببساطة نص وهمي من صناعة الطباعة والتنضيد.</p>
                                <button class="btn btn-primary bg-green btnGreen1">عرض التفاصيل</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 text-center">
                        <div class="card journalCard">
                            <div class="card-header">
                                <figure>
                                    <img src="/images/journal3.png" alt="journals image">
                                </figure>
                            </div>
                            <div class="card-body">
                                <h4>لوريم إيبسوم هو ببساطة
                                    نص وهمي للطباعة</h4>
                                <p class="journalDetails">لوريم إيبسوم هو ببساطة نص وهمي من صناعة الطباعة والتنضيد.</p>
                                <button class="btn btn-primary bg-green btnGreen1">عرض التفاصيل</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="booksByNora">
            <div class="container">
                <div class="row justify-content-center">
                    <h2 class="text-center fC-green">المزيد من كتب دكتورة نورا</h2>
                    <div class="col-md-9">
                        <div class="card noraBookCard">
                            <figure>
                                <span><img src="/images/book-club.png" alt="book /images"></span>
                                <figcaption>اسم الكتاب</figcaption>
                            </figure>
                            <div class="bookDeatils">
                                <h2 class="fC-green">وصف</h2>
                                <p>لوريم إيبسوم هو ببساطة نص وهمي من صناعة الطباعة والتنضيد. لقد كان لوريم إيبسوم هو
                                    النص الوهمي القياسي في هذه الصناعة منذ عام 1500.</p>
                                <p>عندما أخذت طابعة غير معروفة لوح الكتابة وخلطته لعمل نموذج كتاب. لقد تمكنت من البقاء
                                    ليس فقط لخمسة قرون، بل أيضًا للقفزة.</p>
                                <p>وقد انتشر بشكل كبير في ستينيات القرن الماضي مع إصدار أوراق "ليتراسيت" التي تحتوي على
                                    مقاطع لوريم إيبسوم. لقد تمكنت من البقاء ليس فقط لخمسة قرون، بل أيضًا للقفزة عندما
                                    أخذت طابعة غير معروفة لوح الطباعة وخلطته لصنع نوع.</p>
                            </div>
                        </div>
                        <div class="card noraBookCard">
                            <figure>
                                <span><img src="/images/book-club.png" alt="book /images"></span>
                                <figcaption>اسم الكتاب</figcaption>
                            </figure>
                            <div class="bookDeatils">
                                <h2 class="fC-green">وصف</h2>
                                <p>لوريم إيبسوم هو ببساطة نص وهمي من صناعة الطباعة والتنضيد. لقد كان لوريم إيبسوم هو
                                    النص الوهمي القياسي في هذه الصناعة منذ عام 1500.</p>
                                <p>عندما أخذت طابعة غير معروفة لوح الكتابة وخلطته لعمل نموذج كتاب. لقد تمكنت من البقاء
                                    ليس فقط لخمسة قرون، بل أيضًا للقفزة.</p>
                                <p>وقد انتشر بشكل كبير في ستينيات القرن الماضي مع إصدار أوراق "ليتراسيت" التي تحتوي على
                                    مقاطع لوريم إيبسوم. لقد تمكنت من البقاء ليس فقط لخمسة قرون، بل أيضًا للقفزة عندما
                                    أخذت طابعة غير معروفة لوح الطباعة وخلطته لصنع نوع.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper: any) => {
    thumbsSwiper.value = swiper;
};

let images = ref([
    {
        image: "/images/book-club.png",
    },
    {
        image: "/images/bookimage.png",
    },
    {
        image: "/images/couple1.jpg",
    },
    {
        image: "/images/couple2.png",
    },
    {
        image: "/images/book-club.png",
    },
    {
        image: "/images/couple1.jpg",
    },
    {
        image: "/images/bookimage.png",
    },
])
</script>
<style lang="">

</style>