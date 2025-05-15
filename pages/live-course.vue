<template>
    <div>
        <div class="liveCourse1 topMargin">
            <div class="container">
                <div class="row">
                    <div class="col-md-7 position-relative">
                        <!-- <button @click="sharePage()">
                            <div class="shareOption" href="#"><img src="/images/share1.svg" alt="share icon"></div>
                        </button> -->
                        <h1 class="fC-LightOrange"> {{ arrData?.title }} </h1>
                        <p> {{ arrData?.description }} </p>

                        <h4 class="fC-green">تبدأ الدورة المباشرة في:</h4>
                        <ul class="liveCourse1Time">
                            <li><span id="days1"> {{ seconds }} </span>
                                <p>ثانية</p>
                            </li>
                            <li><span id="hours1"> {{ minutes }} </span>
                                <p>دقيقة</p>
                            </li>
                            <li><span id="minutes1">{{ hours }}</span>
                                <p>ساعة</p>
                            </li>
                            <li><span id="seconds1"> {{ days }} </span>
                                <p>يوم</p>
                            </li>
                        </ul>
                        <div class="btns-live flex-column flex-xl-row flex-lg-row mb-5 mb-xl-0 mb-lg-0">
                            <button @click="store.openPayModal = true" class="buy ">
                                اشتري الان
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24"
                                    fill="none">
                                    <path
                                        d="M2.75 18.75C8.08561 18.7457 13.398 19.4522 18.547 20.851C19.274 21.049 20 20.509 20 19.755V18.75M4.25 4.5V5.25C4.25 5.44891 4.17098 5.63968 4.03033 5.78033C3.88968 5.92098 3.69891 6 3.5 6H2.75M2.75 6V5.625C2.75 5.004 3.254 4.5 3.875 4.5H20.75M2.75 6V15M20.75 4.5V5.25C20.75 5.664 21.086 6 21.5 6H22.25M20.75 4.5H21.125C21.746 4.5 22.25 5.004 22.25 5.625V15.375C22.25 15.996 21.746 16.5 21.125 16.5H20.75M2.75 15V15.375C2.75 15.6734 2.86853 15.9595 3.0795 16.1705C3.29048 16.3815 3.57663 16.5 3.875 16.5H4.25M2.75 15H3.5C3.69891 15 3.88968 15.079 4.03033 15.2197C4.17098 15.3603 4.25 15.5511 4.25 15.75V16.5M20.75 16.5V15.75C20.75 15.5511 20.829 15.3603 20.9697 15.2197C21.1103 15.079 21.3011 15 21.5 15H22.25M20.75 16.5H4.25M15.5 10.5C15.5 11.2956 15.1839 12.0587 14.6213 12.6213C14.0587 13.1839 13.2956 13.5 12.5 13.5C11.7044 13.5 10.9413 13.1839 10.3787 12.6213C9.81607 12.0587 9.5 11.2956 9.5 10.5C9.5 9.70435 9.81607 8.94129 10.3787 8.37868C10.9413 7.81607 11.7044 7.5 12.5 7.5C13.2956 7.5 14.0587 7.81607 14.6213 8.37868C15.1839 8.94129 15.5 9.70435 15.5 10.5ZM18.5 10.5H18.508V10.508H18.5V10.5ZM6.5 10.5H6.508V10.508H6.5V10.5Z"
                                        stroke="white" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button class="gift">
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
                    <div class="col-md-5 topVideoSec">
                        <div class="card">
                            <div class="card-header">
                                <iframe width="560" height="315" :src="arrData?.previwe_video"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen></iframe>
                            </div>
                            <div class="card-body">
                                <div class="details d-flex flex-column gap-3">
                                    <div class="item d-flex align-items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                                            viewBox="0 0 28 28" fill="none">
                                            <path
                                                d="M14.0002 16.3335C13.0279 16.3335 12.2016 15.9932 11.521 15.3127C10.8404 14.6321 10.5002 13.8057 10.5002 12.8335V5.8335C10.5002 4.86127 10.8404 4.03488 11.521 3.35433C12.2016 2.67377 13.0279 2.3335 14.0002 2.3335C14.9724 2.3335 15.7988 2.67377 16.4793 3.35433C17.1599 4.03488 17.5002 4.86127 17.5002 5.8335V12.8335C17.5002 13.8057 17.1599 14.6321 16.4793 15.3127C15.7988 15.9932 14.9724 16.3335 14.0002 16.3335ZM12.8335 24.5002V20.9127C10.8113 20.6404 9.13905 19.7363 7.81683 18.2002C6.49461 16.6641 5.8335 14.8752 5.8335 12.8335H8.16683C8.16683 14.4474 8.73558 15.8231 9.87308 16.9606C11.0106 18.0981 12.3863 18.6668 14.0002 18.6668C15.6141 18.6668 16.9897 18.0981 18.1272 16.9606C19.2647 15.8231 19.8335 14.4474 19.8335 12.8335H22.1668C22.1668 14.8752 21.5057 16.6641 20.1835 18.2002C18.8613 19.7363 17.1891 20.6404 15.1668 20.9127V24.5002H12.8335ZM14.0002 14.0002C14.3307 14.0002 14.6078 13.8884 14.8314 13.6647C15.055 13.4411 15.1668 13.1641 15.1668 12.8335V5.8335C15.1668 5.50294 15.055 5.22586 14.8314 5.00225C14.6078 4.77863 14.3307 4.66683 14.0002 4.66683C13.6696 4.66683 13.3925 4.77863 13.1689 5.00225C12.9453 5.22586 12.8335 5.50294 12.8335 5.8335V12.8335C12.8335 13.1641 12.9453 13.4411 13.1689 13.6647C13.3925 13.8884 13.6696 14.0002 14.0002 14.0002Z"
                                                fill="#212529" />
                                        </svg>
                                        <div> <span class="fw-bold fs-6"> {{ arrData?.specialist?.name }} </span> <span
                                                style="color: #6C757D;" class="fs-6"> ( محاضر ) </span> </div>
                                    </div>
                                    <div class="item d-flex align-items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                                            viewBox="0 0 28 28" fill="none">
                                            <path
                                                d="M7.875 3.5V6.125M20.125 3.5V6.125M3.5 21.875V8.75C3.5 8.05381 3.77656 7.38613 4.26884 6.89384C4.76113 6.40156 5.42881 6.125 6.125 6.125H21.875C22.5712 6.125 23.2389 6.40156 23.7312 6.89384C24.2234 7.38613 24.5 8.05381 24.5 8.75V21.875M3.5 21.875C3.5 22.5712 3.77656 23.2389 4.26884 23.7312C4.76113 24.2234 5.42881 24.5 6.125 24.5H21.875C22.5712 24.5 23.2389 24.2234 23.7312 23.7312C24.2234 23.2389 24.5 22.5712 24.5 21.875M3.5 21.875V13.125C3.5 12.4288 3.77656 11.7611 4.26884 11.2688C4.76113 10.7766 5.42881 10.5 6.125 10.5H21.875C22.5712 10.5 23.2389 10.7766 23.7312 11.2688C24.2234 11.7611 24.5 12.4288 24.5 13.125V21.875"
                                                stroke="#212529" stroke-width="2.2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                        <div> <span class="fw-bold fs-6"> {{ arrData?.day_date }} </span> </div>
                                    </div>
                                    <div class="item d-flex align-items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                                            viewBox="0 0 28 28" fill="none">
                                            <path
                                                d="M14 7V14H19.25M24.5 14C24.5 15.3789 24.2284 16.7443 23.7007 18.0182C23.1731 19.2921 22.3996 20.4496 21.4246 21.4246C20.4496 22.3996 19.2921 23.1731 18.0182 23.7007C16.7443 24.2284 15.3789 24.5 14 24.5C12.6211 24.5 11.2557 24.2284 9.98182 23.7007C8.70791 23.1731 7.55039 22.3996 6.57538 21.4246C5.60036 20.4496 4.82694 19.2921 4.29926 18.0182C3.77159 16.7443 3.5 15.3789 3.5 14C3.5 11.2152 4.60625 8.54451 6.57538 6.57538C8.54451 4.60625 11.2152 3.5 14 3.5C16.7848 3.5 19.4555 4.60625 21.4246 6.57538C23.3938 8.54451 24.5 11.2152 24.5 14Z"
                                                stroke="#212529" stroke-width="2.2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                        <div class="d-flex align-items-center gap-3"> <span class="fw-bold fs-6"
                                                style="color: #6C757D;"> <span> {{ arrData.from }} </span> <span> -
                                                </span> <span> {{ arrData.to }} </span>
                                                (بتوقيت السعودية)
                                            </span> </div>
                                    </div>
                                    <div class="item d-flex align-items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M12 7.5C11.4033 7.5 10.831 7.73705 10.409 8.15901C9.98705 8.58097 9.75 9.15326 9.75 9.75C9.75 10.3467 9.98705 10.919 10.409 11.341C10.831 11.7629 11.4033 12 12 12C12.5967 12 13.169 11.7629 13.591 11.341C14.0129 10.919 14.25 10.3467 14.25 9.75C14.25 9.15326 14.0129 8.58097 13.591 8.15901C13.169 7.73705 12.5967 7.5 12 7.5Z"
                                                fill="#43806C" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3H20.625C21.66 3 22.5 3.84 22.5 4.875V14.625C22.5 15.661 21.66 16.5 20.625 16.5H3.375C3.12877 16.5 2.88495 16.4515 2.65747 16.3573C2.42998 16.263 2.22328 16.1249 2.04917 15.9508C1.87506 15.7767 1.73695 15.57 1.64273 15.3425C1.5485 15.115 1.5 14.8712 1.5 14.625V4.875ZM8.25 9.75C8.25 8.75544 8.64509 7.80161 9.34835 7.09835C10.0516 6.39509 11.0054 6 12 6C12.9946 6 13.9484 6.39509 14.6517 7.09835C15.3549 7.80161 15.75 8.75544 15.75 9.75C15.75 10.7446 15.3549 11.6984 14.6517 12.4017C13.9484 13.1049 12.9946 13.5 12 13.5C11.0054 13.5 10.0516 13.1049 9.34835 12.4017C8.64509 11.6984 8.25 10.7446 8.25 9.75ZM18.75 9C18.5511 9 18.3603 9.07902 18.2197 9.21967C18.079 9.36032 18 9.55109 18 9.75V9.758C18 10.172 18.336 10.508 18.75 10.508H18.758C18.9569 10.508 19.1477 10.429 19.2883 10.2883C19.429 10.1477 19.508 9.95691 19.508 9.758V9.75C19.508 9.55109 19.429 9.36032 19.2883 9.21967C19.1477 9.07902 18.9569 9 18.758 9H18.75ZM4.5 9.75C4.5 9.55109 4.57902 9.36032 4.71967 9.21967C4.86032 9.07902 5.05109 9 5.25 9H5.258C5.45691 9 5.64768 9.07902 5.78833 9.21967C5.92898 9.36032 6.008 9.55109 6.008 9.75V9.758C6.008 9.95691 5.92898 10.1477 5.78833 10.2883C5.64768 10.429 5.45691 10.508 5.258 10.508H5.25C5.05109 10.508 4.86032 10.429 4.71967 10.2883C4.57902 10.1477 4.5 9.95691 4.5 9.758V9.75Z"
                                                fill="#43806C" />
                                            <path
                                                d="M2.25 18C2.05109 18 1.86032 18.079 1.71967 18.2197C1.57902 18.3603 1.5 18.5511 1.5 18.75C1.5 18.9489 1.57902 19.1397 1.71967 19.2803C1.86032 19.421 2.05109 19.5 2.25 19.5C7.65 19.5 12.88 20.222 17.85 21.575C19.04 21.899 20.25 21.017 20.25 19.755V18.75C20.25 18.5511 20.171 18.3603 20.0303 18.2197C19.8897 18.079 19.6989 18 19.5 18H2.25Z"
                                                fill="#43806C" />
                                        </svg>
                                        <div>
                                            <span v-if="arrData?.price == 0" class="fw-bold fs-6 fC-green"> مجاني
                                            </span>
                                            <span v-else class="fw-bold fs-6 fC-green"> السعر {{ arrData?.price }} ر.س
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="liveCourse2 bg-lightOrange text-center">
            <div class="container">
                <GeneralBooked2 :data="arrData?.book_consultation"></GeneralBooked2>
            </div>
        </div>

        <div class="liveCourse3">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h1 class="fC-LightOrange"> {{ arrData?.title }} </h1>
                        <p>
                            {{ arrData?.description }}
                        </p>
                        <h4 class="fC-green">تبدأ الدورة المباشرة في:</h4>
                        <ul class="liveCourse1Time">
                            <li><span id="days"> {{ seconds }} </span>
                                <p class="fC-green">ثانية</p>
                            </li>
                            <li><span id="hours"> {{ minutes }} </span>
                                <p class="fC-green">دقيقة</p>
                            </li>
                            <li><span id="minutes"> {{ hours }} </span>
                                <p class="fC-green">ساعة</p>
                            </li>
                            <li><span id="seconds"> {{ days }} </span>
                                <p class="fC-green">يوم</p>
                            </li>
                        </ul>
                        <button href="#" class="btn btn-primary text-light mt-5 bg-green btnGreen">هدية لصديق</button>
                    </div>
                    <div class="col-md-6">
                        <GeneralTimeLine1 :data="arrData?.agenda"></GeneralTimeLine1>
                    </div>
                </div>
            </div>
        </div>

        <div class="coachSec">
            <div class="container">
                <GeneralNora1 :data="arrData?.specialist"></GeneralNora1>
            </div>
        </div>

        <!-- <div class="registerTodaySec bg-offwhite3 text-center">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-7">
                        <h2 class="fC-LightOrange">سجل اليوم!</h2>
                        <p>لوريم إيبسوم هو ببساطة نص وهمي من صناعة الطباعة والتنضيد. لقد كان لوريم إيبسوم هو النص الوهمي
                            القياسي في هذه الصناعة منذ عام 1500.</p>
                        <a href="#" class="btn btn-primary bg-green">احجز مكانك الآن</a>
                    </div>
                </div>
            </div>
        </div> -->

        <div class="container mb-5">

            <h3 class="fC-green"> التعليقات </h3>
            <div class=" p-4 rounded mt-5 border">
                <div class="row overflow-hidde">
                    <div class="col-md-4 border-custom-rate">
                        <h5 class="fw-bold mb-5 mt-2 border-custom-head">تقييمات ومراجعات المنتج</h5>
                        <div class="d-flex align-items-center gap-3 mb-2">
                            <span class="fw-bold fs-4 me-2"> {{ average_rate }} </span>
                            <Rating class="bigStars" :model-value="average_rate" readonly />
                        </div>

                        <p class="mb-3" style="color:#758AA0; font-size: 12px;"> إجمالي التقييمات ({{
                            rate_percentageArr?.length }}) </p>
                        <div class="mb-2" v-for="rating in rate_percentageArr" :key="rating?.rate">
                            <div class="d-flex align-items-center gap-2">
                                <div class="d-flex align-items-center gap-1">
                                    <span class="">{{ rating?.rate }}</span>
                                    <span class="" style="color:#F4C900;"> ★</span>
                                </div>
                                <div class="progress  flex-grow-1" style="height: 8px">
                                    <div class="progress-bar bg-warning" :style="{ width: rating?.percentage + '%' }">
                                    </div>
                                </div>
                                <span class="ms-2">{{ rating?.percentage }}%</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-8">
                        <div class="d-flex border-bottom align-items-center justify-content-between">
                            <h4>

                                {{ commentsArr?.length }}

                                تعليق
                            </h4>

                            <div class="d-flex align-items-center gap-2" style="margin-bottom: 15px;">

                                <!-- <select class="writtenBy headRate">
                                    <option>أهم التقييمات</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select> -->
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
                        <div v-for="(review, index) in commentsArr" :key="index"
                            class="mb-4 mt-4 border-bottom pb-3">
                            <div class="d-flex align-items-center gap-3">

                                <div class="image">
                                    <Avatar :image="review?.client_image" class="mr-2" size="large" shape="circle" />

                                </div>

                                <div>
                                    <p class="mb-1 fw-bold">{{ review?.client }}</p>
                                    <div class="d-flex align-items-center gap-2 mb-2">
                                        <span class="text-muted" style="color: #758AA0; font-size: 14px;">{{ review?.created_at
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
                    <Paginator :rows="rows" :totalRecords="totalRecords" @page="onPageChange" />
                </div>
            </div>
        </div>

        <div ref="modalRef" class="modal fade modal-dialog-centere" id="exampleModal" tabindex="-1"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                <Rating class="bigStars" v-model="commentDetails.rate" />
                            </div>
                            <div class="mb-3 w-100">
                                <textarea v-model="commentDetails.comment" class="form-control"
                                    id="message-text"></textarea>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn  solid px-4" style="border-radius: 20px;"
                            data-bs-dismiss="modal"> رجوع </button>
                        <button @click="createComment()" type="button" class="btn btn-success  bg-green px-4"
                            style="border-radius: 20px;"> إرسال
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <GeneralLoader v-if="pending"></GeneralLoader>

        <GeneralPaymentModal :liveId="id"></GeneralPaymentModal>

    </div>
</template>
<script setup>
import {useGeneralStore} from '@/stores/general';
let store = useGeneralStore();
const modalRef = ref(null)
let bootstrapModal = null
let route = useRoute()
let pending = ref(true);
let average_rate = ref(0);
const totalRecords = ref(100); // Replace with your dynamic total count
const rows = ref(10); // Number of items per page
const page = ref(1); // Active page number (starting from 1)
let arrData = ref({});
let commentsArr = ref([]);
let rate_percentageArr = ref([]);
let commentDetails = ref({
    comment: "",
    rate: 3
});

let id = route.query.id


const sharePage = async () => {
    if(process.client){
        const url = window.location.href // full current URL
      
        if (navigator.share) {
          try {
            await navigator.share({
              title: document.title,
              text: 'شاهد هذا الكورس!',
              url
            })
            console.log('تمت المشاركة بنجاح')
          } catch (err) {
            console.error('حدث خطأ أثناء المشاركة:', err)
          }
        } else {
          // fallback: copy to clipboard
          try {
            await navigator.clipboard.writeText(url)
            alert('تم نسخ الرابط إلى الحافظة!')
          } catch (err) {
            alert('لم نتمكن من نسخ الرابط، يرجى نسخه يدويًا.')
          }
        }
    }
}
const getData = async () => {
    const result = await useApi().get(`lives/${route.query.id}`);
    if (result.status === 200) {
        pending.value = false;
        arrData.value = result.data?.data;
    }
};
const getDataComments = async () => {
    const result = await useApi().get(`lives/comments/${route.query.id}`, {params:{page: page.value}});
    if (result.status === 200) {
        pending.value = false;
        commentsArr.value = result.data?.data?.comments?.data;
        rate_percentageArr.value = result.data?.data?.rate_percentage;
        average_rate.value = result.data?.data?.average_rate;
        totalRecords.value = result.data?.data?.comments?.total;
        rows.value = result.data?.data?.comments?.per_page;
    }
};

const createComment = async () => {
    if (commentDetails.value.comment && commentDetails.value.rate) {
        const result = await useApi().post(`lives/createComment`, { live_id: route.query.id, ...commentDetails.value });
        if (result.status === 200 || result.status === 201) {
            if(process.client){
                setTimeout(() => {
                    bootstrapModal?.hide()
    
                    // Force cleanup in case backdrop lingers
                    document.body.classList.remove('modal-open')
                    const backdrop = document.querySelector('.modal-backdrop')
                    if (backdrop) backdrop.remove()
                }, 50)
            }
            commentDetails.value.rate = 3;
            commentDetails.value.comment = "";
            getDataComments();
        }
    }
}

const totalMinutes = ref(arrData.value?.duration_minutes); // Total duration in minutes
let remainingSeconds


const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

let interval

const updateCountdown = () => {
    if (remainingSeconds <= 0) {
        clearInterval(interval)
        alert('⏰ Time is up!')
        return
    }

    days.value = Math.floor(remainingSeconds / (24 * 60 * 60))
    hours.value = Math.floor((remainingSeconds % (24 * 60 * 60)) / 3600)
    minutes.value = Math.floor((remainingSeconds % 3600) / 60)
    seconds.value = remainingSeconds % 60

    remainingSeconds--
}

watch(() => arrData.value, (val) => {
    if (val) {
        totalMinutes.value = val?.duration_minutes;
        remainingSeconds = totalMinutes.value * 60; // Convert minutes to seconds
        updateCountdown()

    }

})





onBeforeUnmount(() => {
    clearInterval(interval)
})

const onPageChange = (event) => {
    page.value = event.page + 1; // PrimeVue uses zero-based index
    getDataComments(); // Call function to fetch new data based on page
};

onMounted(async () => {
    getData();
    getDataComments()
    interval = setInterval(updateCountdown, 1000);
    if (process.client && modalRef.value) {
        const { Modal } = await import('bootstrap') // dynamic import only on client
        bootstrapModal = Modal.getOrCreateInstance(modalRef.value)
    }
});

useHead({
    title: ` الدورات الحيه `,
    meta: [
        { name: 'description', content: 'test test test' },
        { name: 'keywords', content: 'keyword1, keyword2, keyword3' },
        { name: 'author', content: 'khaled sawada' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: `الدورات الحيه | نورا` },
        { property: 'og:description', content: 'test test test' },
        { property: 'og:image', content: '/images/nora.png' },
    ],
});

</script>
<style lang="scss">
.liveCourse1 {
    .btns-live {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 30px;

        button {
            border-radius: 32px;
            display: flex;
            height: 56px;
            justify-content: center;
            align-items: center;
            gap: 10px;

            &.buy {
                padding: 13px 136px;
                background-color: #43806C;
                color: #fff;
            }

            &.gift {
                background-color: #43806C33;
                color: #43806C;
                padding: 13px 72px;

            }
        }
    }
}
</style>