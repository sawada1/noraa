<template>
    <div class="container">
        <div class="blog-details mt-5 mb-5">
            <div class="row position-relative">
                <div class="col-9">
                    <div class="main-details">
                        <div class="image">
                            <img class="rounded w-100" height="330" :src="store.blog.image" alt="">
                        </div>
                        <h1 class="fs-2"> {{ store.blog.title }}
                        </h1>
                        <div class="d-flex align-items-center gap-3 mt-3">
                            <span> {{ store.blog.created_at }}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <g clip-path="url(#clip0_88_2396)">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M24 15.7801V19.4978C23.9993 20.2501 23.7002 20.9714 23.1682 21.5033C22.6363 22.0352 21.915 22.3343 21.1627 22.3349H2.83632C2.08416 22.3339 1.36309 22.0347 0.831213 21.5029C0.299336 20.971 6.5256e-05 20.25 -0.000976562 19.4978V15.7801C0.000377561 15.6317 0.0602694 15.4899 0.165669 15.3855C0.271068 15.281 0.413447 15.2224 0.561828 15.2224C0.71021 15.2224 0.852588 15.281 0.957988 15.3855C1.06339 15.4899 1.12328 15.6317 1.12463 15.7801V19.4978C1.12498 19.9517 1.30542 20.3869 1.62635 20.7078C1.94727 21.0288 2.38244 21.2093 2.83632 21.2097H21.1627C21.6166 21.2094 22.0518 21.0289 22.3728 20.7079C22.6938 20.387 22.8742 19.9517 22.8746 19.4978V15.7801C22.8759 15.6317 22.9358 15.4899 23.0412 15.3855C23.1466 15.281 23.289 15.2224 23.4374 15.2224C23.5858 15.2224 23.7282 15.281 23.8335 15.3855C23.9389 15.4899 23.9988 15.6317 24.0002 15.7801H24ZM14.1302 4.75512C12.1006 6.16607 10.466 8.07315 9.38204 10.2947C8.29812 12.5163 7.80101 14.9784 7.93805 17.4465C7.94529 17.5798 7.9998 17.7062 8.09181 17.8029C8.18382 17.8996 8.3073 17.9604 8.44009 17.9743C8.45996 17.9761 8.47988 17.9777 8.49976 17.9777C8.62338 17.9774 8.74346 17.9364 8.84141 17.8609C8.93935 17.7855 9.00971 17.6799 9.04159 17.5605C10.2603 13.0192 14.0262 10.3356 17.8653 11.2262L19.3051 13.721C19.3587 13.8129 19.4371 13.8879 19.5314 13.9373C19.6256 13.9867 19.7319 14.0085 19.838 14.0003C19.9441 13.9922 20.0456 13.954 20.1306 13.8901C20.2156 13.8262 20.2806 13.7394 20.3179 13.6398L23.9624 4.06203C23.9924 3.98402 24.0046 3.9003 23.9981 3.81699C23.9916 3.73367 23.9665 3.65286 23.9248 3.58047C23.883 3.50808 23.8256 3.44594 23.7567 3.39858C23.6879 3.35123 23.6093 3.31986 23.5268 3.30678L13.4116 1.67365C13.3064 1.65612 13.1983 1.66892 13.1002 1.71054C13.002 1.75216 12.9177 1.82089 12.8571 1.90868C12.7965 1.99647 12.7622 2.09969 12.7582 2.20626C12.7542 2.31283 12.7806 2.41835 12.8343 2.51046L14.1302 4.75512Z"
                                        fill="#6C757D" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_88_2396">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <p class="mt-3">
                         {{ store.blog.fully_description }}
                        </p>
                        <div class="mt-5">
                            <h3 class="fC-green"> التعليقات </h3>
                            <div class="container p-4 rounded mt-5 border">
                                <div class="row overflow-hidde">

                                    <div class="col-md-12">
                                        <div class="d-flex border-bottom align-items-center justify-content-between">
                                            <h4>

                                                {{ reviews.length }}

                                                تعليق
                                            </h4>

                                            <div class="d-flex align-items-center gap-2" style="margin-bottom: 10px;">

                                                <button data-bs-toggle="modal" data-bs-target="#exampleModal"
                                                    class="btn btn-success  bg-green"
                                                    style="border-radius: 20px; font-size: 14px;">
                                                    أضف تعليق
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        viewBox="0 0 16 16" fill="none">
                                                        <path d="M8 3V13M3 8H13" stroke="white" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div v-for="(review, index) in reviews" :key="index"
                                            class="mb-4 mt-4 border-bottom pb-3">
                                            <div class="d-flex align-items-center gap-3">

                                                <div class="image">
                                                    <Avatar image="/images/aboutBanner.jpg" class="mr-2" size="large"
                                                        shape="circle" />

                                                </div>

                                                <div>
                                                    <p class="mb-1 fw-bold">{{ review.name }}</p>
                                                    <div class="d-flex align-items-center gap-2 mb-2">
                                                        <span class="text-muted"
                                                            style="color: #758AA0; font-size: 14px;">{{ review.date
                                                            }}</span>
                                                    </div>
                                                    <p class="text-muted">{{ review.comment }}</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="d-flex justify-content-end border-top">
                                    <Paginator :rows="10" :totalRecords="120"></Paginator>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-3 position-relative">
                  <div class="lastNews position-sticky " style="top: 50px;">
                    <h6 class="mb-3"> اخر الاخبار </h6>
                    <div class="d-flex flex-column gap-3">
                        <img src="/images/journal1.png" class="w-100 rounded" height="190" alt="">
                        <h5> لــوريــم إيــبـسـوم هـو نص عربي غير معنى، يُستخدم ... </h5>
                        <span> 10/10/2024 </span>
                    </div>
                    <div class="d-flex flex-column gap-3">
                        <img src="/images/journal1.png" class="w-100 rounded" height="190" alt="">
                        <h5> لــوريــم إيــبـسـوم هـو نص عربي غير معنى، يُستخدم ... </h5>
                        <span> 10/10/2024 </span>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        <div class="modal fade modal-dialog-centere" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-heade pt-3 d-flex align-items-center justify-content-center">
                        <h1 class="modal-title text-center fs-5" id="exampleModalLabel"> اكتب تعليقًا </h1>
                    </div>
                    <div class="modal-body  w-100">
                        <form class="w-100 d-flex justify-content-center flex-column align-items-center">

                            <div class="mb-3 w-100">
                                <textarea class="form-control" v-model="comment" id="message-text"></textarea>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn  solid px-4" style="border-radius: 20px;"
                            data-bs-dismiss="modal"> رجوع </button>
                        <button @click="getComment()" type="button" class="btn btn-success  bg-green px-4" style="border-radius: 20px;"> إرسال
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import {useBlogsStore} from '@/stores/blogs';
let store = useBlogsStore();
let route = useRoute()
store.getBlog(route.query.id);
let comment = ref('');
const getComment = async() =>{
    store.createComment(route.query.id , comment.value);
}
const reviews = [
    { name: 'محمد أحمد', rating: 5, date: '6 يناير, 2024', comment: 'كل شيء يجب أن يعمل بشكل صحيح الآن...' },
    { name: 'أحمد مصطفى', rating: 5, date: '6 يناير, 2024', comment: 'العمل بشكل مثالي، شكراً!' },
    { name: 'مصطفى ماجد', rating: 4, date: '6 يناير, 2024', comment: 'كنت أتساءل عما إذا كان من الممكن إضافة المزيد...' },
    { name: 'معاذ جابر', rating: 4, date: '6 يناير, 2024', comment: 'مرحباً، أود أن أعرف كيفية الحصول على تحديثات...' },
    { name: 'معاذ جابر', rating: 4, date: '6 يناير, 2024', comment: 'مرحباً، أود أن أعرف كيفية الحصول على تحديثات...' },

];

const starBreakdown = [
    { stars: 5, percentage: 20 },
    { stars: 4, percentage: 20 },
    { stars: 3, percentage: 20 },
    { stars: 2, percentage: 20 },
    { stars: 1, percentage: 20 },
];
</script>
<style lang="">

</style>