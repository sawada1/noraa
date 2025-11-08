<template>
    <div class="main-videos-container mb-5">
        <div class="head-container">
            <div class="container head flex-column flex-xl-row flex-lg-row">
                <div class=" d-flex align-items-center gap-4">
                    <Knob v-model="updatePercentage" :size="80" valueColor="#43806C" readonly  />

                    <span> المتبقي من محتوي الكورس </span>
                </div>
                <h1 class="fs-6"> {{ store.videos?.course }} </h1>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 col-xl-3 col-lg-3">
                    <div class="main-videos px-3 py-2">
                        <div class="item" v-for="i, index in store.videos?.videos"
                            :class="{ 'active': index + 1 == indexVideo}">

                            <svg class="active-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                viewBox="0 0 20 20" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M1.875 10C1.875 5.5125 5.5125 1.875 10 1.875C14.4875 1.875 18.125 5.5125 18.125 10C18.125 14.4875 14.4875 18.125 10 18.125C5.5125 18.125 1.875 14.4875 1.875 10ZM13.5617 9.18083C13.7076 9.26208 13.8293 9.38086 13.9139 9.52488C13.9986 9.6689 14.0432 9.83293 14.0432 10C14.0432 10.1671 13.9986 10.3311 13.9139 10.4751C13.8293 10.6191 13.7076 10.7379 13.5617 10.8192L8.8925 13.4133C8.74982 13.4925 8.58895 13.5331 8.42578 13.5311C8.26261 13.529 8.1028 13.4844 7.96215 13.4017C7.8215 13.319 7.70488 13.2009 7.62383 13.0593C7.54277 12.9177 7.50009 12.7573 7.5 12.5942V7.40583C7.5 6.69167 8.2675 6.23917 8.8925 6.58667L13.5617 9.18083Z"
                                    fill="#43806C" />
                            </svg>
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M1.875 10C1.875 5.5125 5.5125 1.875 10 1.875C14.4875 1.875 18.125 5.5125 18.125 10C18.125 14.4875 14.4875 18.125 10 18.125C5.5125 18.125 1.875 14.4875 1.875 10ZM13.5617 9.18083C13.7076 9.26208 13.8293 9.38086 13.9139 9.52488C13.9986 9.6689 14.0432 9.83293 14.0432 10C14.0432 10.1671 13.9986 10.3311 13.9139 10.4751C13.8293 10.6191 13.7076 10.7379 13.5617 10.8192L8.8925 13.4133C8.74982 13.4925 8.58895 13.5331 8.42578 13.5311C8.26261 13.529 8.1028 13.4844 7.96215 13.4017C7.8215 13.319 7.70488 13.2009 7.62383 13.0593C7.54277 12.9177 7.50009 12.7573 7.5 12.5942V7.40583C7.5 6.69167 8.2675 6.23917 8.8925 6.58667L13.5617 9.18083Z"
                                    fill="#6C757D" />
                            </svg>

                            <span> {{ index + 1 }}- {{ i.title }} </span>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-xl-9 col-lg-9">
                    <div>
                        <div class="video-container">
                            <!-- <img :src="videoActive" alt=""> -->
                            <iframe :src="videoActive" frameborder="0"></iframe>
                            <!-- <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="100" height="100"
                                viewBox="0 0 100 100" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M9.375 50C9.375 27.5625 27.5625 9.375 50 9.375C72.4375 9.375 90.625 27.5625 90.625 50C90.625 72.4375 72.4375 90.625 50 90.625C27.5625 90.625 9.375 72.4375 9.375 50ZM67.8083 45.9042C68.5382 46.3104 69.1463 46.9043 69.5696 47.6244C69.993 48.3445 70.2162 49.1647 70.2162 50C70.2162 50.8353 69.993 51.6555 69.5696 52.3756C69.1463 53.0957 68.5382 53.6896 67.8083 54.0958L44.4625 67.0667C43.7491 67.4627 42.9447 67.6656 42.1289 67.6554C41.313 67.6452 40.514 67.4222 39.8107 67.0085C39.1075 66.5948 38.5244 66.0047 38.1191 65.2966C37.7139 64.5884 37.5004 63.7867 37.5 62.9708V37.0292C37.5 33.4583 41.3375 31.1958 44.4625 32.9333L67.8083 45.9042Z"
                                    fill="#43806C" />
                            </svg> -->
                        </div>
                        <div
                            class="btns d-flex flex-column flex-xl-row flex-lg-row gap-4 align-items-center justify-content-between mt-4">
                            <button v-if="activeVideo.length" class="next" @click="nextVideo()"> التالي </button>
                            <button class="prev" @click="prevVideo()"> السابق </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <GeneralLoader v-if="store.pendingVideos"></GeneralLoader>

    </div>
</template>
<script setup>
import { useCoursesStore } from '@/stores/courses';
let store = useCoursesStore();
let route = useRoute()
let percentage = ref(10);
let arrData = ref([
    {
        name: " هنا يكتب اسم الفيديو ",
        video: "/images/video1.png"
    },
    {
        name: " هنا يكتب اسم الفيديو ",
        video: "/images/onlineConsultation.png"
    },
    {
        name: " هنا يكتب اسم الفيديو ",
        video: "/images/journal5.png"
    },
    {
        name: " هنا يكتب اسم الفيديو ",
        video: "/images/journals_banner.png"
    },
    {
        name: " هنا يكتب اسم الفيديو ",
        video: "/images/live1.png"
    },
    {
        name: " هنا يكتب اسم الفيديو ",
        video: "/images/journal3.png"
    },

])
let activeVideo = ref([]);
let videoActive = ref();
let indexVideo = ref(1);


const updatePercentage = computed(()=>{
    return percentage.value = Math.round(((activeVideo.value.length) / store.videos?.videos?.length) * 100);
});

watch(()=> store.videos?.videos , (val)=>{
if(val.length >= 1){
    videoActive.value = val[0]?.video_path
    activeVideo.value = Array.from({ length: val.length }, (_, i) => i + 1);    
}
})
const nextVideo = ()=>{
    if(activeVideo.value.length == 0)return;
    if(indexVideo.value == store.videos?.videos.length){
        activeVideo.value.length -1;
    }
    activeVideo.value.pop(++indexVideo.value);
    console.log(activeVideo.value);
    
    videoActive.value = store.videos?.videos[indexVideo.value - 1].video_path
    // console.log(indexVideo.value);
    // console.log(videoActive.value);
    // updatePercentage();
    
}
const prevVideo = ()=>{
    if(indexVideo.value <= 1)return;
    activeVideo.value.push(--indexVideo.value);
    videoActive.value = store.videos?.videos[indexVideo.value - 1].video_path
    console.log(indexVideo.value);
    
    // updatePercentage();
    
}

onMounted(() => {
    store.getVideos(route.query?.id);
    // updatePercentage()  
});
</script>
<style lang="scss">
.main-videos-container {

    .head-container {
        background: #FFF;
        box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.12);

        .head {
            display: flex;
            padding: 12px 40px;
            align-items: center;
            gap: 100px;
        }
        .p-knob{
            svg{
                text{

                }
            }
        }
    }

    .btns {
        button {
            width: 196px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 20px;

            &.next {
                background-color: #43806C;
                color: #fff;
            }

            &.prev {
                background-color: #fff;
                border: 1px solid #43806C;
                color: #43806C;
            }

        }
    }

    .video-container {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 568px;

        .icon {
            position: absolute;
            top: 40%;
            cursor: pointer;
            left: 50%;
            transform: translateX(-50%);
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        &::before {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0px;
            background: rgba(0, 0, 0, 0.30);
        }
    }

    .main-videos {
        border-radius: 0px 0px 16px 16px;
        background: #FFF;
        box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
        display: flex;
        flex-direction: column;
        gap: 20px;
        height: 620px;
        overflow-y: auto;

        .item {
            transition: 0.4s all;
            display: flex;
            align-items: center;
            gap: 5px;
            .active-icon{
                display: none;
            }
            &.active{
                .active-icon{
                    display: block;
                }
                .icon{
                    display: none;
                }
            }

            &:not(:last-child) {
                border-bottom: 1px solid #DEE2E6;
                padding-bottom: 10px;
            }

            span {
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
            }

            &:hover {
                background: rgba(67, 128, 108, 0.10);
            }
        }
    }
}

@media(max-width: 770px) {
    .main-videos-container {
        .head-container {
            .head {
                gap: 20px;
            }
        }

        .video-container {
            margin-top: 20px;
            height: 350px;
        }
    }
}
</style>