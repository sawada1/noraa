<template>
    <div v-if="store.checkForm == 1" class="form-container mb-4">
        <NuxtImg src="/images/logoAuth.svg" width="150" height="150"></NuxtImg>
        <div class="text d-flex flex-column mt-4 align-items-center gap-3">
            <h3> تسجيل الدخول إلى حسابك </h3>
            <p class="fc-grey"> مرحبًا بك مرة أخرى! الرجاءادخل التفاصيل. </p>
        </div>
        <div class="inputs mt-3">
            <div class="mb-3">
                <label class="form-label "> بريد إلكتروني </label>
                <input type="email" v-model="email" class="form-control form-control-l"
                    placeholder=" أدخل بريدك الإلكتروني ">
                <div class="text-danger"> {{ errors.email }} </div>
                <div class="text-danger" v-if="store.errorsLogin?.email"> {{ store.errorsLogin?.email[0] }} </div>

            </div>
            <div class="mb-3">
                <label class="form-label "> كلمة المرور </label>

                <div class="pass-input">
                    <input type="password" v-model="password" class="form-control form-control-l"
                        placeholder=" أدخل كلمة المرور ">
                    <button class="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                            <path
                                d="M16 8.5C16 8.5 13 3 8 3C3 3 0 8.5 0 8.5C0 8.5 3 14 8 14C13 14 16 8.5 16 8.5ZM1.173 8.5C1.65651 7.76512 2.21264 7.08069 2.833 6.457C4.12 5.168 5.88 4 8 4C10.12 4 11.879 5.168 13.168 6.457C13.7884 7.08069 14.3445 7.76512 14.828 8.5C14.77 8.587 14.706 8.683 14.633 8.788C14.298 9.268 13.803 9.908 13.168 10.543C11.879 11.832 10.119 13 8 13C5.88 13 4.121 11.832 2.832 10.543C2.21165 9.91931 1.65652 9.23487 1.173 8.5Z"
                                fill="#6C757D" />
                            <path
                                d="M8 6C7.33696 6 6.70107 6.26339 6.23223 6.73223C5.76339 7.20107 5.5 7.83696 5.5 8.5C5.5 9.16304 5.76339 9.79893 6.23223 10.2678C6.70107 10.7366 7.33696 11 8 11C8.66304 11 9.29893 10.7366 9.76777 10.2678C10.2366 9.79893 10.5 9.16304 10.5 8.5C10.5 7.83696 10.2366 7.20107 9.76777 6.73223C9.29893 6.26339 8.66304 6 8 6ZM4.5 8.5C4.5 7.57174 4.86875 6.6815 5.52513 6.02513C6.1815 5.36875 7.07174 5 8 5C8.92826 5 9.8185 5.36875 10.4749 6.02513C11.1313 6.6815 11.5 7.57174 11.5 8.5C11.5 9.42826 11.1313 10.3185 10.4749 10.9749C9.8185 11.6313 8.92826 12 8 12C7.07174 12 6.1815 11.6313 5.52513 10.9749C4.86875 10.3185 4.5 9.42826 4.5 8.5Z"
                                fill="#6C757D" />
                        </svg>
                    </button>
                </div>
                <div class="text-danger"> {{ errors.password }} </div>
                <div class="text-danger" v-if="store.errorsLogin?.password"> {{ store.errorsLogin?.password[0] }} </div>

            </div>
            <button @click="store.checkForm = 4" class="btn fC-green forget"> هل نسيت كلمة السر؟ </button>

            <div class="btns d-flex flex-column gap-3">
                <button type="button" @click="onSubmit" :disabled="store.pendingLogin" class="btn btn-success d-flex align-items-center gap-2 justify-content-center bg-green w-100"> تسجيل الدخول 
                    <div v-if="store.pendingLogin" class="spinner-border text-light" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </button>
                <button type="button" @click="store.checkForm = 3" class="btn bg-light-green fC-green  w-100"> تسجيل عبر
                    رقم الجوال </button>
            </div>
            <div class="divide my-4"></div>
            <div class="btns d-flex flex-column gap-3">
                <button type="button"
                    class="btn d-flex align-items-center justify-content-center gap-2 btn-outline-success w-100">
                    تسجيل الدخول عبر جوجل
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <g clip-path="url(#clip0_62_470)">
                            <path
                                d="M15.545 6.55706C15.6383 7.09402 15.6848 7.63806 15.684 8.18306C15.684 10.6171 14.814 12.6751 13.3 14.0681H13.302C11.978 15.2911 10.158 15.9991 8 15.9991C5.87827 15.9991 3.84344 15.1562 2.34315 13.6559C0.842855 12.1556 0 10.1208 0 7.99906C0 5.87733 0.842855 3.8425 2.34315 2.34221C3.84344 0.841918 5.87827 -0.000936957 8 -0.000936957C9.98594 -0.0241953 11.9038 0.721896 13.352 2.08106L11.068 4.36506C10.2424 3.57804 9.1405 3.14705 8 3.16506C5.913 3.16506 4.14 4.57306 3.508 6.46906C3.17291 7.46257 3.17291 8.53856 3.508 9.53206H3.511C4.146 11.4251 5.916 12.8331 8.003 12.8331C9.081 12.8331 10.007 12.5571 10.725 12.0691H10.722C11.1389 11.7929 11.4955 11.4351 11.7704 11.0172C12.0452 10.5994 12.2325 10.1303 12.321 9.63806H8V6.55806H15.545V6.55706Z"
                                fill="#43806C" />
                        </g>
                        <defs>
                            <clipPath id="clip0_62_470">
                                <rect width="16" height="16" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
                <button type="button"
                    class="btn btn-outline-success d-flex align-items-center gap-2 justify-content-center  w-100">
                    تسجيل الدخول عبر فيس بوك
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                        <g clip-path="url(#clip0_62_559)">
                            <path
                                d="M16.5 8.04805C16.5 3.60205 12.918 -0.00195312 8.50005 -0.00195312C4.08005 -0.000953125 0.498047 3.60205 0.498047 8.04905C0.498047 12.066 3.42405 15.396 7.24805 16V10.375H5.21805V8.04905H7.25005V6.27405C7.25005 4.25705 8.44505 3.14305 10.272 3.14305C11.148 3.14305 12.063 3.30005 12.063 3.30005V5.28005H11.054C10.061 5.28005 9.75105 5.90105 9.75105 6.53805V8.04805H11.969L11.615 10.374H9.75005V15.999C13.574 15.395 16.5 12.065 16.5 8.04805Z"
                                fill="#43806C" />
                        </g>
                        <defs>
                            <clipPath id="clip0_62_559">
                                <rect width="16" height="16" fill="white" transform="translate(0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>
            <div class="sign d-flex align-items-center justify-content-center mt-4 gap-1">
                <p class="m-0"> ليس لديك حساب؟ </p>
                <button @click="store.checkForm = 2" class="btn fC-green p-0 m-0 forget"> سجل الان </button>
            </div>
        </div>

    </div>
    <Toast />

</template>
<script setup>
import { useToast } from "primevue/usetoast";
import { useAuthStore } from "@/stores/auth.ts";
let store = useAuthStore();
import { useForm } from "vee-validate";
import * as yup from "yup";
const toast = useToast();
const { locale } = useI18n();
const { errors, handleSubmit, values, resetForm, defineField } = useForm({
    validationSchema: yup.object({
        email: yup.string().email(locale.value == 'ar' ? 'يجب أن يكون البريد الإلكتروني بريدًا إلكترونيًا صالحًا' : 'email must be a valid email').required(locale.value == 'ar' ? 'هذا الحقل مطلوب' : 'this field is required'),
        password: yup.string().required(locale.value == 'ar' ? 'هذا الحقل مطلوب' : 'this field is required'),
    }),
});
const [email, emailAttrs] = defineField("email");
const [password, passwordAttrs] = defineField("password");
const onSubmit = handleSubmit(() => {
    store.login(values , resetForm);
});
watch(()=>store.checkToast , (val)=>{
    if(val){
        toast.add({ severity: 'error', summary: 'Error Message', detail: store.messageToast, life: 5000 });
    }
})
</script>
<style lang="">

</style>