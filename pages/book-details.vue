<template>
    <div v-if="BookData" class="mb-5">
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
                            }" :spaceBetween="10" :thumbs="{ swiper: thumbsSwiper }"
                                :modules="[SwiperFreeMode, SwiperNavigation, SwiperZoom, SwiperThumbs]"
                                class="mySwiper2 show">
                                <swiper-slide v-for="i, index in BookData.images" :key="index">
                                    <div class="swiper-zoom-container">
                                        <img :src="i" class="w-100 rounded-3" />
                                    </div>
                                </swiper-slide>
                            </swiper>
                            <div class="small-img">
                                <img src="/images/next-icon.png"
                                    class="icon-left d-none d-xl-block d-lg-block d-md-block" alt="" id="prev-img-book">

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
                                    }" :modules="[SwiperFreeMode, SwiperNavigation, SwiperThumbs]"
                                    class="mySwiper small-container">
                                    <swiper-slide v-for="i, index in BookData.images" :key="index">
                                        <img :src="i" class="show-small-img" />
                                    </swiper-slide>

                                </swiper>
                                <img src="/images/next-icon.png"
                                    class="icon-right d-none d-xl-block d-lg-block d-md-block" alt=""
                                    id="next-img-book">


                            </div>

                        </div>
                    </div>
                    <div class="col-md-6">
                        <h2 class="fC-green"> {{ BookData.title }} <a class="bdShare" href="#"><img
                                    src="/images/share_icon.png" alt="share Icon"></a></h2>
                        <h4>وصف</h4>
                        <div class="detailscDescptn">
                            <p> {{ BookData.fully_description }} </p>

                        </div>
                        <div class="cheknDropdown d-flex align-items-center gap-3">
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
                            <button @click="store.closePdf = true"
                                class=" d-flex align-items-center justify-content-center gap-2  bg-green btnGreen btn1">
                                اشتري الان
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24"
                                    fill="none">
                                    <path
                                        d="M2.75 18.75C8.08561 18.7457 13.398 19.4522 18.547 20.851C19.274 21.049 20 20.509 20 19.755V18.75M4.25 4.5V5.25C4.25 5.44891 4.17098 5.63968 4.03033 5.78033C3.88968 5.92098 3.69891 6 3.5 6H2.75M2.75 6V5.625C2.75 5.004 3.254 4.5 3.875 4.5H20.75M2.75 6V15M20.75 4.5V5.25C20.75 5.664 21.086 6 21.5 6H22.25M20.75 4.5H21.125C21.746 4.5 22.25 5.004 22.25 5.625V15.375C22.25 15.996 21.746 16.5 21.125 16.5H20.75M2.75 15V15.375C2.75 15.6734 2.86853 15.9595 3.0795 16.1705C3.29048 16.3815 3.57663 16.5 3.875 16.5H4.25M2.75 15H3.5C3.69891 15 3.88968 15.079 4.03033 15.2197C4.17098 15.3603 4.25 15.5511 4.25 15.75V16.5M20.75 16.5V15.75C20.75 15.5511 20.829 15.3603 20.9697 15.2197C21.1103 15.079 21.3011 15 21.5 15H22.25M20.75 16.5H4.25M15.5 10.5C15.5 11.2956 15.1839 12.0587 14.6213 12.6213C14.0587 13.1839 13.2956 13.5 12.5 13.5C11.7044 13.5 10.9413 13.1839 10.3787 12.6213C9.81607 12.0587 9.5 11.2956 9.5 10.5C9.5 9.70435 9.81607 8.94129 10.3787 8.37868C10.9413 7.81607 11.7044 7.5 12.5 7.5C13.2956 7.5 14.0587 7.81607 14.6213 8.37868C15.1839 8.94129 15.5 9.70435 15.5 10.5ZM18.5 10.5H18.508V10.508H18.5V10.5ZM6.5 10.5H6.508V10.508H6.5V10.5Z"
                                        stroke="white" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button
                                class=" d-flex align-items-center text-success justify-content-center gap-2  bg-light-green btnGreen btn2">
                                هدية لصديق
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none">
                                    <path
                                        d="M21 11.25V19.5C21 19.8978 20.842 20.2794 20.5607 20.5607C20.2794 20.842 19.8978 21 19.5 21H5.25C4.85218 21 4.47064 20.842 4.18934 20.5607C3.90804 20.2794 3.75 19.8978 3.75 19.5V11.25M12 4.875C12 4.35583 11.846 3.84831 11.5576 3.41663C11.2692 2.98495 10.8592 2.6485 10.3795 2.44982C9.89989 2.25114 9.37209 2.19915 8.86289 2.30044C8.35369 2.40173 7.88596 2.65173 7.51884 3.01885C7.15173 3.38596 6.90172 3.85369 6.80044 4.36289C6.69915 4.87209 6.75114 5.39989 6.94982 5.87954C7.1485 6.3592 7.48495 6.76917 7.91663 7.05761C8.34831 7.34605 8.85582 7.5 9.375 7.5H12M12 4.875V7.5M12 4.875C12 4.35583 12.154 3.84831 12.4424 3.41663C12.7308 2.98495 13.1408 2.6485 13.6205 2.44982C14.1001 2.25114 14.6279 2.19915 15.1371 2.30044C15.6463 2.40173 16.114 2.65173 16.4812 3.01885C16.8483 3.38596 17.0983 3.85369 17.1996 4.36289C17.3008 4.87209 17.2489 5.39989 17.0502 5.87954C16.8515 6.3592 16.5151 6.76917 16.0834 7.05761C15.6517 7.34605 15.1442 7.5 14.625 7.5H12M12 7.5V21M3.375 11.25H21.375C21.996 11.25 22.5 10.746 22.5 10.125V8.625C22.5 8.004 21.996 7.5 21.375 7.5H3.375C2.754 7.5 2.25 8.004 2.25 8.625V10.125C2.25 10.746 2.754 11.25 3.375 11.25Z"
                                        stroke="#43806C" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class=" container mt-5 d-flex">
            <div class="tabsTop">
                <ul class="tabs">
                    <li @click="tab1 = 1" rel="tab4" :class="{ 'active': tab1 == 1 }"> وصف الكاتب </li>
                    <li @click="tab1 = 2" rel="tab3" :class="{ 'active': tab1 == 2 }"> تقيمات الكتاب </li>
                </ul>
            </div>
        </div>
        <div v-if="tab1 == 1" class="booksByNora">
            <div class="container">
                <div class="row justify-content-cente">
                    <!-- <h2 class="text-center fC-green">المزيد من كتب دكتورة نورا</h2> -->
                    <div class="col-12">
                        <div class=" noraBookCard">
                            <figure>
                                <span><img :src="BookData?.author?.image" alt="book /images"></span>
                                <figcaption> {{ BookData?.author?.name }} </figcaption>
                            </figure>
                            <div class="bookDeatils">
                                <h2 class="fC-green">وصف</h2>
                                <p> {{ BookData?.author?.description }} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="tab1 == 2">
            <div class="container p-4 rounded mt-5 border">
                <div class="row overflow-hidde">
                    <div class="col-md-4 border-custom-rate">
                        <h5 class="fw-bold mb-5 mt-2 border-custom-head">تقييمات ومراجعات المنتج</h5>
                        <div class="d-flex align-items-center gap-3 mb-2">
                            <span class="fw-bold fs-4 me-2">4.0</span>
                            <Rating class="bigStars" :model-value="4" readonly />
                        </div>

                        <p class="mb-3" style="color:#758AA0; font-size: 12px;"> إجمالي التقييمات ({{
                            BookData.rate_count }}) </p>
                        <div class="mb-2" v-for="rating in BookData.rate_percentage" :key="rating.rate">
                            <div class="d-flex align-items-center gap-2">
                                <div class="d-flex align-items-center gap-1">
                                    <span class="">{{ rating.rate }}</span>
                                    <span class="" style="color:#F4C900;"> ★</span>
                                </div>
                                <div class="progress  flex-grow-1" style="height: 8px">
                                    <div class="progress-bar bg-warning" :style="{ width: rating.percentage + '%' }">
                                    </div>
                                </div>
                                <span class="ms-2">{{ rating.percentage }}%</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-8">
                        <div class="d-flex border-bottom align-items-center justify-content-between">
                            <h4>

                                {{ BookData?.comments_count }}

                                تعليق
                            </h4>

                            <div class="d-flex align-items-center gap-2" style="margin-bottom: 10px;">

                                <select class="writtenBy headRate">
                                    <option>أهم التقييمات</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                                <button data-bs-toggle="modal" data-bs-target="#exampleModal"
                                    class="btn btn-success  bg-green" style="border-radius: 20px; font-size: 14px;">
                                    أضف تقييماً
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                        fill="none">
                                        <path d="M8 3V13M3 8H13" stroke="white" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div v-for="(review, index) in store.comments" :key="index"
                            class="mb-4 mt-4 border-bottom pb-3">
                            <div class="d-flex align-items-center gap-3">

                                <div class="image">
                                    <!-- <Avatar image="/images/aboutBanner.jpg" class="mr-2" size="large" shape="circle" /> -->
                                    <Avatar :image="review?.client_image" class="mr-2" size="large" shape="circle" />

                                </div>

                                <div>
                                    <p class="mb-1 fw-bold">{{ review?.client }}</p>
                                    <div class="d-flex align-items-center gap-2 mb-2">
                                        <span class="text-muted" style="color: #758AA0; font-size: 14px;">{{
                                            review?.created_at
                                        }}</span>
                                        <Rating :model-value="review?.rate" readonly />
                                    </div>
                                    <p class="text-muted">{{ review?.description }}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="d-flex justify-content-end border-top">
                    <Paginator :rows="store.rows" :totalRecords="store.totalRecords" @page="onPageChange" />

                </div>
            </div>
        </div>

        <div class="modal fade modal-dialog-centere" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-heade pt-3 d-flex align-items-center justify-content-center">
                        <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
                        <h1 class="modal-title text-center fs-5" id="exampleModalLabel"> اختر التقييم واكتب تعليقًا
                        </h1>
                    </div>
                    <div class="modal-body  w-100">
                        <form class="w-100 d-flex justify-content-center flex-column align-items-center">
                            <div class="mb-3">
                                <Rating class="bigStars" v-model="commentData.star" />
                            </div>
                            <div class="mb-3 w-100">
                                <textarea class="form-control" v-model="commentData.comment"
                                    id="message-text"></textarea>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn  solid px-4" style="border-radius: 20px;"
                            data-bs-dismiss="modal"> رجوع </button>
                        <button type="button" class="btn btn-success  bg-green px-4" @click="createCommentFunc()"
                            data-bs-dismiss="modal" style="border-radius: 20px;"> إرسال </button>
                    </div>
                </div>
            </div>
        </div>


        <div class="relatedCourses">
            <div class="container">
                <h2 class="text-center fC-green">الدورات ذات الصلة</h2>
                <div class="row">
                    <div v-for="i in 3" class="col-md-4 text-center">
                        <CardJournal></CardJournal>
                    </div>

                </div>
            </div>
        </div>
        <GeneralLoader v-if="store.pendingBook"></GeneralLoader>

        <BookPdf v-if="store.closePdf"></BookPdf>

    </div>
</template>
<script setup lang="ts">
import Rating from 'primevue/rating';
const thumbsSwiper = ref(null);
const tab1 = ref(1);
const route = useRoute();
const itemId = ref(route.query.id);
import { useBooksStore } from '@/stores/books';
let store = useBooksStore();
let BookData = ref(store.BookData);
let commentData = ref({
    comment: '',
    star: 1
})
const createCommentFunc = () => {
    store.createComment(route.query.id, commentData.value)
}


watch(() => store.BookData, (val) => {
    if (val) {
        BookData.value = val
    }
})
// Reviews Data
const reviews = [
    { name: 'محمد أحمد', rating: 5, date: '6 يناير, 2024', comment: 'كل شيء يجب أن يعمل بشكل صحيح الآن...' },
    { name: 'أحمد مصطفى', rating: 5, date: '6 يناير, 2024', comment: 'العمل بشكل مثالي، شكراً!' },
    { name: 'مصطفى ماجد', rating: 4, date: '6 يناير, 2024', comment: 'كنت أتساءل عما إذا كان من الممكن إضافة المزيد...' },
    { name: 'معاذ جابر', rating: 4, date: '6 يناير, 2024', comment: 'مرحباً، أود أن أعرف كيفية الحصول على تحديثات...' },
    { name: 'معاذ جابر', rating: 4, date: '6 يناير, 2024', comment: 'مرحباً، أود أن أعرف كيفية الحصول على تحديثات...' },

];

const onPageChange = (event: any) => {
    store.page = event.page + 1; // PrimeVue uses zero-based index
    store.getComments(route.query.id)
    // Call function to fetch new data based on page
};
onMounted(() => {
    store.getBook(route.query.id);
    store.getComments(route.query.id)
});

useHead({
    title: ` الكتاب `,
    meta: [
        { name: 'description', content: 'test test test' },
        { name: 'keywords', content: 'keyword1, keyword2, keyword3' },
        { name: 'author', content: 'khaled sawada' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: `الكتاب | نورا` },
        { property: 'og:description', content: 'test test test' },
        { property: 'og:image', content: '/images/nora.png' },
    ],
});

const setThumbsSwiper = (swiper: any) => {
    thumbsSwiper.value = swiper;
};


</script>
<style></style>