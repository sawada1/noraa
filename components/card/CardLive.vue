<template>
    <div class="live-course-card" :class="{'profile': profile}">
        <!-- <img class="mainImg" src="/images/live1.png" alt=""> -->
        <img class="mainImg" :src="card.image" alt="">
        <div class="main">
            <h4> {{ card.title }} </h4>
            <p> {{ card.description }}  </p>
            <div class="details d-flex flex-column gap-2">
                <div class="d-flex align-items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.90326 3.23705 6.33097 3.65901 5.90901C4.08097 5.48705 4.65326 5.25 5.25 5.25H18.75C19.3467 5.25 19.919 5.48705 20.341 5.90901C20.7629 6.33097 21 6.90326 21 7.5V18.75M3 18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75M3 18.75V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H18.75C19.3467 9 19.919 9.23705 20.341 9.65901C20.7629 10.081 21 10.6533 21 11.25V18.75"
                            stroke="#212529" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span> {{ card?.day_date }} </span>
                </div>
                <div class="d-flex align-items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M12 6V12H16.5M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                            stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div class="d-flex align-items-center gap-2"> <span> {{ card.to }} </span> <span> - </span>  <span> {{ card.from }} </span>  </div>
                    <span class="fc-grey"> بتوقيت السعودية </span>
                </div>
                <div class="d-flex align-items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
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
                    <div v-if="!card?.is_free">
                        <span class="fC-green fw-bold"> السعر {{ card?.have_discount ? card?.price_after_discount : card?.price }} ر.س </span>
                        <span v-if="card?.have_discount" class="text-decoration-line-through" style="font-size: 14px;"> السعر {{ card?.price }} ر.س </span>
                    </div>
                    <span class="fC-green fw-bold" v-else> مجاني </span>
                </div>
            </div>
            <button v-if="profile" class="w-100 d-flex align-items-center justify-content-center">
                <a :href="card?.zoom_join_url" target="_blank">
                    عرض التفاصيل
                </a>
            </button>
              <nuxt-link v-else :to="{path:'/live-course' , query:{id:card.id}}">
                  <button class="w-100 d-flex align-items-center justify-content-center">
                    عرض التفاصيل
                  </button>
              </nuxt-link>

        </div>

        <div class="status">
          {{ card?.is_free ? 'مجاني' : `خصم ${card?.discount_percentge}` }} 
        </div>

    </div>
</template>
<script setup>
let props = defineProps({
    profile:{
        default: false,
        type: Boolean
    },
    card:{
        required: true,
        default:{
            id: 1,
            title: 'title',
            description:"",
            price:"",
            day_date:"",
            from:"",
            to:"",
            image: ''
        }
    }
})

</script>
<style lang="scss">
.live-course-card {
    border-radius: 32px;
    background: #FFF;
    box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
    position: relative;
   .status{
    position: absolute;
    border-radius: 32px 0px 16px 0px;
background: rgba(67, 128, 108, 0.80);
width: 111px;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
top: 0;
left: 0;
color: #fff;
   }
    .mainImg {
        height: 250px;
        width: 100%;
        object-fit: cover;
        border-top-left-radius: 32px;
        border-top-right-radius: 32px;
    }
    .main{
        padding: 16px;
    }
    .details{
        margin-top: 16px;
    }

    button {
        border-radius: 32.5px;
        background: #43806C;
        height: 48px;
        margin-top: 16px;
        color: #fff;
    }

    h4 {
        color: #212529;
        font-size: 22px;
        font-style: normal;
        font-weight: 600;
        line-height: 38px;
        // margin-top: 18px;
        margin-bottom: 10px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    p {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 26px;
        color: #6C757D;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    &.profile{
        
    }
}
</style>