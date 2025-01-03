<template>
    <div class="card-bundle">
        <img :src="course.image" alt="journals image">
        <div class="details">
            <h4> {{ course.title }} </h4>
            <p> {{ course.short_description }}  </p>
            <nuxt-link :to="localePath({ path: '/bundled-course', query:{id: course?.id} })">
                <button> عرض التفاصيل </button>
            </nuxt-link>
        </div>
    </div>
    <!-- <div class="card journalCard">
        <div class="card-header">
            <figure>
                <img src="/images/journal2.png" alt="journals image">
            </figure>
        </div>
        <div class="card-body">
            <h4 class="fC-green">الباقة 1</h4>
            <p class="journalDetails">لوريم إيبسوم هو ببساطة نص وهمي للطباعة</p>
            <nuxt-link to="/bundled-course">
                <button class="btn btn-primary bg-green btnGreen1">عرض التفاصيل</button>
            </nuxt-link>
        </div>
    </div> -->
</template>

<script setup>
const localePath = useLocalePath();

let props = defineProps({
    course:{
        required: true,
        default:{
            id: 1,
            title: 'title',
            image: '/images/journal2.png',
            short_description: 'dsdsdsd'
        }
    }
})
</script>
<style lang="scss">
.card-bundle {
    border-radius: 16px;
    background: #FFF;
    box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.12);

    img {
        border-radius: 16px 16px 0px 0px;
        object-fit: cover;
        width: 100%;
        height: 185px;
    }

    .details {
        padding: 16px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h4 {
        text-align: center;
        color: #43806C;
        margin-bottom: 10px;
        font-size: 18px;
    }

    p {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 26px;
    }

    button {
        margin-top: 24px;
        border-radius: 32.5px;
        background: #43806C;
        display: flex;
        width: 200px;
        height: 40px;
        padding: 6px 36px;
        justify-content: center;
        align-items: center;
        color: #fff;
    }
}
</style>