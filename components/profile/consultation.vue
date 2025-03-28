<template>
    <div class="custom-shadow-container">
        <div class="d-flex flex-column gap-5">
            <div v-for="i in 5" class="consultation-item">
                <div class="d-flex flex-column gap-4">
                    <h4> هنا يكتب اسم الاستشارة هنا يكتب اسم الاستشارة هنا يكتب ه... </h4>
                    <p class="type"> هنا يكتب نوع الاستشارة </p>
                    <p class="date"> موعد الانتهاء 2025\12\12</p>
                    <button class="d-flex align-items-center justify-content-center text-light"> التفاصيل </button>
                </div>
                <div class="float-text"> <span> استشارات قادمة </span> </div>
            </div>
        </div>
        <div class="d-flex justify-content-end mt-4">
                    <Paginator :rows="10" :totalRecords="120"></Paginator>
                </div>
    </div>
</template>
<script setup>

</script>
<style lang="scss">
.consultation-item {
    padding: 24px;
    border-radius: 16px;
    background: #F7F7F7;
    position: relative;

    .float-text {
        position: absolute;
        top: 20px;
        left: 0;
        width: 145px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        border-radius: 0px 24px 24px 0px;
        background: #43806C;
    }

    h4 {
        color: #43806C;
        font-size: 24px;
        font-weight: 500;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    p {
        font-size: 18px;
        font-weight: 400;

        &.type {
            color: #212529;
        }

        &.date {
            color: #6C757D;
        }
    }

    button {
        width: 143px;
        height: 40px;
        border-radius: 24px;
        background: #43806C;
    }
}
</style>