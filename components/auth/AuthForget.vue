<template>
    <div v-if="store.checkForm == 4" class="form-container mb-4">
        <NuxtImg src="/images/logoAuth.svg" width="150" height="150"></NuxtImg>
        <div class="text d-flex flex-column mt-4 align-items-center gap-3">
            <h3> نسيت كلمة المرور</h3>
            <p class="fc-grey"> الرجاء ادخال البريد الإلكتروني </p>
        </div>
        <div class="inputs mt-3">
            <div class="mb-3">
                <label class="form-label "> البريد الإلكتروني</label>
                <input type="email" class="form-control form-control-l" placeholder=" أدخل بريد إلكتروني ">
            </div>


            <div class="btns d-flex flex-column gap-3">
                <button type="button" class="btn btn-success bg-green w-100"> ارسال </button>
            </div>

            <div class="sign d-flex align-items-center justify-content-center mt-4 gap-1">
                <p class="m-0"> هل لديك حساب بالفعل؟ </p>
                <button @click="store.checkForm = 1" class="btn fC-green p-0 m-0 forget"> تسجيل دخول</button>
            </div>
        </div>

    </div>
</template>
<script setup>
 import {useAuthStore} from "@/stores/auth.ts";
 let store = useAuthStore();
</script>
<style lang="">

</style>