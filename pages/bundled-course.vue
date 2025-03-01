<template>
    <div class="bundled-details mb-5">
        <div class="topDetailsSec">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">

                        <div class="prductGallery">

                            <swiper :style="{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',
                            }" :spaceBetween="10" :thumbs="{ swiper: thumbsSwiper }"
                                :modules="[SwiperFreeMode, SwiperNavigation, SwiperZoom, SwiperThumbs]"
                                class="mySwiper2 show">
                                <swiper-slide v-for="i, index in store.CourseData?.images" :key="index">
                                    <div class="swiper-zoom-container">
                                        <img :src="i" class="w-100" />
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
                                    <swiper-slide v-for="i, index in store.CourseData?.images" :key="index">
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
                        <h2 class=""> {{ store.CourseData?.title }} </h2>
                        <div class="price d-flex align-items-center gap-3 mb-3 mt-5">
                            <h4 class="fC-green fw-bold m-0"> السعر : {{ store.CourseData?.price }} ر.س</h4>
                            <h6 v-if="store.CourseData?.price_before_discount"> قبل الخصم {{
                                store.CourseData?.price_before_discount }} ر.س </h6>
                        </div>
                        <div class="details-price d-flex flex-column gap-3 mt-4">
                            <div class="d-flex align-items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M5.3575 8.125L1.875 10L5.3575 11.875M5.3575 8.125L10 10.625L14.6425 8.125M5.3575 8.125L1.875 6.25L10 1.875L18.125 6.25L14.6425 8.125M5.3575 11.875L1.875 13.75L10 18.125L18.125 13.75L14.6425 11.875M5.3575 11.875L10 14.375L14.6425 11.875M14.6425 8.125L18.125 10L14.6425 11.875"
                                        stroke="black" stroke-width="1.3" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                <h6> اجمالي الحصص : </h6>
                                <span> {{ store.CourseData?.total_count_lecture }} حصة </span>
                            </div>
                            <div class="d-flex align-items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M10 5V10H13.75M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10Z"
                                        stroke="black" stroke-width="1.3" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                <h6> المدة الباقة : </h6>
                                <span> 999 دقيقة </span>
                            </div>
                        </div>
                        <h4 class="mt-5"> ملخص </h4>
                        <div class="detailscDescptn" v-html="store.CourseData?.short_description">

                        </div>

                        <div class="descrptnBtnSec">
                            <button data-bs-toggle="modal" data-bs-target="#exampleModal"
                                class=" d-flex align-items-center justify-content-center gap-2 bg-green btnGreen btn1">
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
        <div class="container">
            <div class=" mt-5 main-details">
                <div class="checkBtnsLive">
                    <button @click="checkBtn = 1" :class="{ 'active': checkBtn == 1 }"> وصف عام </button>
                    <button @click="checkBtn = 2" :class="{ 'active': checkBtn == 2 }"> محتوي الباقة </button>
                    <button @click="checkBtn = 3" :class="{ 'active': checkBtn == 3 }"> ماذا ساتعلم</button>
                </div>
                <div v-if="checkBtn == 1" class="desc-details d-flex flex-column gap-5">
                    {{ store.CourseData?.fully_description }}
                </div>
                <div v-if="checkBtn == 2" class="accordion-details">
                    <Accordion value="0">
                        <AccordionPanel v-for="item, index in store.CourseData?.sections_videos " :value="index">
                            <AccordionHeader class="head">
                                كورس رقم {{ item.section_name }}
                            </AccordionHeader>
                            <AccordionContent class="mt-3">
                                <div v-for="i in item.videos"
                                    class="d-flex mb-3 align-items-center justify-content-between w-100 item">
                                    <div class="d-flex align-items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32"
                                            viewBox="0 0 33 32" fill="none">
                                            <circle cx="16.9053" cy="16" r="12" stroke="#43806C" stroke-width="8" />
                                        </svg>
                                        <h5> {{ i.title }}</h5>
                                    </div>
                                    <div class="d-flex align-items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20"
                                            viewBox="0 0 21 20" fill="none">
                                            <path
                                                d="M10.1885 5V10H13.9385M17.6885 10C17.6885 10.9849 17.4945 11.9602 17.1176 12.8701C16.7407 13.7801 16.1882 14.6069 15.4918 15.3033C14.7953 15.9997 13.9685 16.5522 13.0586 16.9291C12.1487 17.306 11.1734 17.5 10.1885 17.5C9.20356 17.5 8.22829 17.306 7.31835 16.9291C6.40841 16.5522 5.58161 15.9997 4.88518 15.3033C4.18874 14.6069 3.63629 13.7801 3.25938 12.8701C2.88247 11.9602 2.68848 10.9849 2.68848 10C2.68848 8.01088 3.47865 6.10322 4.88518 4.6967C6.2917 3.29018 8.19935 2.5 10.1885 2.5C12.1776 2.5 14.0853 3.29018 15.4918 4.6967C16.8983 6.10322 17.6885 8.01088 17.6885 10Z"
                                                stroke="black" stroke-width="1.3" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                        <span> المدة الحصة : </span>
                                        <span class="minute"> {{ i.time }} دقيقة </span>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionPanel>

                    </Accordion>
                </div>
                <div v-if="checkBtn == 3" class="learn">
                    <div class="row">
                        <div v-for="i in store.CourseData?.outcome" class="col-12 col-xl-6 col-lg-6">
                            <div class="d-flex my-4 align-items-center gap-2">
                                <div class="check">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none">
                                        <path
                                            d="M9.5501 18.0001L3.8501 12.3001L5.2751 10.8751L9.5501 15.1501L18.7251 5.9751L20.1501 7.4001L9.5501 18.0001Z"
                                            fill="white" />
                                    </svg>
                                </div>
                                <h6> {{ i }} </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="relatedCourses">
            <div class="container">
                <h2 class=" fC-green"> باقات الدورات ذات صلة </h2>
                <div class="row">
                    <div v-for="i in 4" class="col-md-3 mb-4">
                        <CardJournal></CardJournal>
                    </div>

                </div>
            </div>
        </div>

        <div class="modal fade modal-dialog-center" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="d-flex align-items-center justify-content-between">
                    <h4> </h4>

                </div>
                <div class="modal-content">
                    <div class="modal-heade pt-3 px-4 d-flex align-items-center justify-content-between">
                        <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
                        <h1 class="modal-title" style="font-size: 16px;" id="exampleModalLabel">
                            لمشاهدة المحتوي يمكنك اختيار ومتابعة من احدي الكورسات
                        </h1>
                        <button data-bs-dismiss="modal" aria-label="Close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path d="M6 18L18 6M6 6L18 18" stroke="black" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div class="modal-body  w-100">
                        <div class="w-100 d-flex justify-content-center flex-column gap-4 align-items-center">
                            <label for="input-radio-1"
                                class="input-radio-modal w-100 d-flex align-items-center justify-content-between">
                                <input type="radio" name="type" id="input-radio-1" class="d-none">
                                <span> هنا يكتب اسم الكورس رقم واحد </span>
                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M12.0017 21.5C10.6877 21.5 9.45267 21.2507 8.2965 20.752C7.14033 20.2533 6.13467 19.5766 5.2795 18.7218C4.42433 17.8669 3.74725 16.8617 3.24825 15.706C2.74942 14.5503 2.5 13.3156 2.5 12.0017C2.5 10.6877 2.74933 9.45267 3.248 8.2965C3.74667 7.14033 4.42342 6.13467 5.27825 5.2795C6.13308 4.42433 7.13833 3.74725 8.294 3.24825C9.44967 2.74942 10.6844 2.5 11.9983 2.5C13.3123 2.5 14.5473 2.74933 15.7035 3.248C16.8597 3.74667 17.8653 4.42342 18.7205 5.27825C19.5757 6.13308 20.2528 7.13833 20.7518 8.294C21.2506 9.44967 21.5 10.6844 21.5 11.9983C21.5 13.3123 21.2507 14.5473 20.752 15.7035C20.2533 16.8597 19.5766 17.8653 18.7218 18.7205C17.8669 19.5757 16.8617 20.2528 15.706 20.7518C14.5503 21.2506 13.3156 21.5 12.0017 21.5ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
                                        fill="#212529" />
                                </svg>
                                <svg class="icon-active" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M12 16.5C13.2487 16.5 14.3108 16.0622 15.1865 15.1865C16.0622 14.3108 16.5 13.2487 16.5 12C16.5 10.7513 16.0622 9.68917 15.1865 8.8135C14.3108 7.93783 13.2487 7.5 12 7.5C10.7513 7.5 9.68917 7.93783 8.8135 8.8135C7.93783 9.68917 7.5 10.7513 7.5 12C7.5 13.2487 7.93783 14.3108 8.8135 15.1865C9.68917 16.0622 10.7513 16.5 12 16.5ZM12.0017 21.5C10.6877 21.5 9.45267 21.2507 8.2965 20.752C7.14033 20.2533 6.13467 19.5766 5.2795 18.7218C4.42433 17.8669 3.74725 16.8617 3.24825 15.706C2.74942 14.5503 2.5 13.3156 2.5 12.0017C2.5 10.6877 2.74933 9.45267 3.248 8.2965C3.74667 7.14033 4.42342 6.13467 5.27825 5.2795C6.13308 4.42433 7.13833 3.74725 8.294 3.24825C9.44967 2.74942 10.6844 2.5 11.9983 2.5C13.3123 2.5 14.5473 2.74933 15.7035 3.248C16.8597 3.74667 17.8653 4.42342 18.7205 5.27825C19.5757 6.13308 20.2528 7.13833 20.7518 8.294C21.2506 9.44967 21.5 10.6844 21.5 11.9983C21.5 13.3123 21.2507 14.5473 20.752 15.7035C20.2533 16.8597 19.5766 17.8653 18.7218 18.7205C17.8669 19.5757 16.8617 20.2528 15.706 20.7518C14.5503 21.2506 13.3156 21.5 12.0017 21.5ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
                                        fill="#43806C" />
                                </svg>
                            </label>
                            <label for="input-radio-2"
                                class="input-radio-modal w-100 d-flex align-items-center justify-content-between">
                                <input type="radio" name="type" id="input-radio-2" class="d-none">
                                <span> هنا يكتب اسم الكورس رقم اثنين </span>
                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M12.0017 21.5C10.6877 21.5 9.45267 21.2507 8.2965 20.752C7.14033 20.2533 6.13467 19.5766 5.2795 18.7218C4.42433 17.8669 3.74725 16.8617 3.24825 15.706C2.74942 14.5503 2.5 13.3156 2.5 12.0017C2.5 10.6877 2.74933 9.45267 3.248 8.2965C3.74667 7.14033 4.42342 6.13467 5.27825 5.2795C6.13308 4.42433 7.13833 3.74725 8.294 3.24825C9.44967 2.74942 10.6844 2.5 11.9983 2.5C13.3123 2.5 14.5473 2.74933 15.7035 3.248C16.8597 3.74667 17.8653 4.42342 18.7205 5.27825C19.5757 6.13308 20.2528 7.13833 20.7518 8.294C21.2506 9.44967 21.5 10.6844 21.5 11.9983C21.5 13.3123 21.2507 14.5473 20.752 15.7035C20.2533 16.8597 19.5766 17.8653 18.7218 18.7205C17.8669 19.5757 16.8617 20.2528 15.706 20.7518C14.5503 21.2506 13.3156 21.5 12.0017 21.5ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
                                        fill="#212529" />
                                </svg>
                                <svg class="icon-active" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M12 16.5C13.2487 16.5 14.3108 16.0622 15.1865 15.1865C16.0622 14.3108 16.5 13.2487 16.5 12C16.5 10.7513 16.0622 9.68917 15.1865 8.8135C14.3108 7.93783 13.2487 7.5 12 7.5C10.7513 7.5 9.68917 7.93783 8.8135 8.8135C7.93783 9.68917 7.5 10.7513 7.5 12C7.5 13.2487 7.93783 14.3108 8.8135 15.1865C9.68917 16.0622 10.7513 16.5 12 16.5ZM12.0017 21.5C10.6877 21.5 9.45267 21.2507 8.2965 20.752C7.14033 20.2533 6.13467 19.5766 5.2795 18.7218C4.42433 17.8669 3.74725 16.8617 3.24825 15.706C2.74942 14.5503 2.5 13.3156 2.5 12.0017C2.5 10.6877 2.74933 9.45267 3.248 8.2965C3.74667 7.14033 4.42342 6.13467 5.27825 5.2795C6.13308 4.42433 7.13833 3.74725 8.294 3.24825C9.44967 2.74942 10.6844 2.5 11.9983 2.5C13.3123 2.5 14.5473 2.74933 15.7035 3.248C16.8597 3.74667 17.8653 4.42342 18.7205 5.27825C19.5757 6.13308 20.2528 7.13833 20.7518 8.294C21.2506 9.44967 21.5 10.6844 21.5 11.9983C21.5 13.3123 21.2507 14.5473 20.752 15.7035C20.2533 16.8597 19.5766 17.8653 18.7218 18.7205C17.8669 19.5757 16.8617 20.2528 15.706 20.7518C14.5503 21.2506 13.3156 21.5 12.0017 21.5ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
                                        fill="#43806C" />
                                </svg>
                            </label>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" data-bs-dismiss="modal" class="w-100">
                            <nuxt-link  :to="{path:'/videos-course' , query:{id:route.query.id}}" class="btn btn-success w-100 text-light bg-green  solid px-4" style="border-radius: 20px;"
                                > متابعة </nuxt-link>
                        </button>
                    
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>
<script setup lang="ts">
import { useCoursesStore } from '@/stores/courses';
let store = useCoursesStore();
let route = useRoute()
store.getCourse(route.query.id);
const thumbsSwiper = ref(null);
const tab1 = ref(1);
const checkBtn = ref(1);

const setThumbsSwiper = (swiper: any) => {
    thumbsSwiper.value = swiper;
};

useHead({
      title: ` باقات الدورات `,
      meta: [
        { name: 'description', content: 'test test test'},
        { name: 'keywords', content: 'keyword1, keyword2, keyword3' },
        { name: 'author', content: 'khaled sawada' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: `باقات الدورات | نورا` },
        { property: 'og:description', content: 'test test test' },
        { property: 'og:image', content: '/images/nora.png' },
      ],
    });

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
<style lang="scss">
.input-radio-modal {
    border-radius: 60px;
    background: #FFF;
    border: 1px solid #212529;
    padding: 16px 24px;
    cursor: pointer;

    span {
        color: #212529;
        font-size: 16px;
        font-weight: 500;
    }

    .icon-active {
        display: none;
    }
}

.input-radio-modal:has(input[type="radio"]:checked) {
    border: 1px solid #43806C;

    .icon-active {
        display: block;
    }
    span{
        color: #43806C;
    }

    .icon {
        display: none;
    }
}

.bundled-details {
    .price {
        h4 {}

        h6 {
            color: #6C757D;
            font-size: 16px;
            font-weight: 500;
        }

    }

    .details-price {
        h6 {
            color: #212529;
            font-size: 16px;
            font-weight: 500;
        }

        span {
            color: #6C757D;
            font-weight: 500;
        }
    }

    .main-details {
        border-radius: 24px;
        background: #FFF;
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
        padding: 24px;
    }

    .accordion-details {
        .head {
            background-color: #F9FAFB;
            color: #000;
            border-top-left-radius: 16px;
            border-top-right-radius: 16px;
        }

        .item {
            padding: 16px;
            border-radius: 32px;
            border: 1px solid #CED4DA;
        }

        span {
            font-size: 14px;
        }

        .minute {
            color: #6C757D;
        }
    }

    .learn {
        .check {
            display: flex;
            width: 48px;
            height: 48px;
            padding: 12px;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
            background: #43806C;
        }

        h6 {
            line-height: 31px;
        }
    }
}
</style>