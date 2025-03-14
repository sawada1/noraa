<template>
    <div v-if="store.checkForm == 4">
        <div class="form-container mb-4">
            <NuxtImg src="/images/logoAuth.svg" width="150" height="150"></NuxtImg>
            <div class="text d-flex flex-column mt-4 align-items-center gap-3">
                <h3> نسيت كلمة المرور</h3>
                <p class="fc-grey"> الرجاء ادخال البريد الإلكتروني </p>
            </div>
            <div v-if="checkStep == 1" class="inputs mt-3">
                <div class="mb-3">
                    <label class="form-label "> البريد الإلكتروني</label>
                    <input type="email" v-model="email" class="form-control form-control-l"
                        placeholder=" أدخل بريد إلكتروني ">
                    <div class="text-danger"> {{ emailForm.errors.value.email }} </div>

                </div>


                <div class="btns d-flex flex-column gap-3">
                    <button @click="onSubmit()" type="button" class="btn btn-success bg-green w-100"> ارسال </button>
                </div>

                <div class="sign d-flex align-items-center justify-content-center mt-4 gap-1">
                    <p class="m-0"> هل لديك حساب بالفعل؟ </p>
                    <button @click="store.checkForm = 1" class="btn fC-green p-0 m-0 forget"> تسجيل دخول</button>
                </div>
            </div>
            <div v-if="checkStep == 2">
                <div class="inputs d-flex align-items-center justify-content-center mb-5 mt-4">
                    <InputOtp v-model="otp" integerOnly size="large" dir="ltr" />

                </div>
                <div class="btns d-flex flex-column gap-3">
                    <button @click="otpSubmit" type="button" class="btn btn-success bg-green px-5 w-100"> ابدأ الان

                    </button>
                </div>
            </div>
            <div v-if="checkStep == 3" class="inputs mt-3">
                <div class="mb-3">
                    <label class="form-label "> كلمة المرور الجديدة </label>

                    <div class="pass-input">
                        <input :type="typePass ? 'password' : 'text'" v-model="password"
                            class="form-control form-control-l" placeholder=" أدخل كلمة المرور ">
                        <button @click="typePass = !typePass" class="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17"
                                fill="none">
                                <path
                                    d="M16 8.5C16 8.5 13 3 8 3C3 3 0 8.5 0 8.5C0 8.5 3 14 8 14C13 14 16 8.5 16 8.5ZM1.173 8.5C1.65651 7.76512 2.21264 7.08069 2.833 6.457C4.12 5.168 5.88 4 8 4C10.12 4 11.879 5.168 13.168 6.457C13.7884 7.08069 14.3445 7.76512 14.828 8.5C14.77 8.587 14.706 8.683 14.633 8.788C14.298 9.268 13.803 9.908 13.168 10.543C11.879 11.832 10.119 13 8 13C5.88 13 4.121 11.832 2.832 10.543C2.21165 9.91931 1.65652 9.23487 1.173 8.5Z"
                                    fill="#6C757D" />
                                <path
                                    d="M8 6C7.33696 6 6.70107 6.26339 6.23223 6.73223C5.76339 7.20107 5.5 7.83696 5.5 8.5C5.5 9.16304 5.76339 9.79893 6.23223 10.2678C6.70107 10.7366 7.33696 11 8 11C8.66304 11 9.29893 10.7366 9.76777 10.2678C10.2366 9.79893 10.5 9.16304 10.5 8.5C10.5 7.83696 10.2366 7.20107 9.76777 6.73223C9.29893 6.26339 8.66304 6 8 6ZM4.5 8.5C4.5 7.57174 4.86875 6.6815 5.52513 6.02513C6.1815 5.36875 7.07174 5 8 5C8.92826 5 9.8185 5.36875 10.4749 6.02513C11.1313 6.6815 11.5 7.57174 11.5 8.5C11.5 9.42826 11.1313 10.3185 10.4749 10.9749C9.8185 11.6313 8.92826 12 8 12C7.07174 12 6.1815 11.6313 5.52513 10.9749C4.86875 10.3185 4.5 9.42826 4.5 8.5Z"
                                    fill="#6C757D" />
                            </svg>
                        </button>
                    </div>
                    <div class="text-danger"> {{ resetForm.errors.value.password }} </div>
                    <div class="text-danger" v-if="forgetErrors?.password"> {{ forgetErrors?.password[0] }}
                    </div>
                </div>
                <div class="mb-3">
                    <label class="form-label "> تاكيد كلمة المرور الجديدة </label>

                    <div class="pass-input">
                        <input :type="typePass2 ? 'password' : 'text'" v-model="password_confirmation"
                            class="form-control form-control-l" placeholder=" أدخل كلمة المرور ">
                        <button @click="typePass2 = !typePass2" class="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17"
                                fill="none">
                                <path
                                    d="M16 8.5C16 8.5 13 3 8 3C3 3 0 8.5 0 8.5C0 8.5 3 14 8 14C13 14 16 8.5 16 8.5ZM1.173 8.5C1.65651 7.76512 2.21264 7.08069 2.833 6.457C4.12 5.168 5.88 4 8 4C10.12 4 11.879 5.168 13.168 6.457C13.7884 7.08069 14.3445 7.76512 14.828 8.5C14.77 8.587 14.706 8.683 14.633 8.788C14.298 9.268 13.803 9.908 13.168 10.543C11.879 11.832 10.119 13 8 13C5.88 13 4.121 11.832 2.832 10.543C2.21165 9.91931 1.65652 9.23487 1.173 8.5Z"
                                    fill="#6C757D" />
                                <path
                                    d="M8 6C7.33696 6 6.70107 6.26339 6.23223 6.73223C5.76339 7.20107 5.5 7.83696 5.5 8.5C5.5 9.16304 5.76339 9.79893 6.23223 10.2678C6.70107 10.7366 7.33696 11 8 11C8.66304 11 9.29893 10.7366 9.76777 10.2678C10.2366 9.79893 10.5 9.16304 10.5 8.5C10.5 7.83696 10.2366 7.20107 9.76777 6.73223C9.29893 6.26339 8.66304 6 8 6ZM4.5 8.5C4.5 7.57174 4.86875 6.6815 5.52513 6.02513C6.1815 5.36875 7.07174 5 8 5C8.92826 5 9.8185 5.36875 10.4749 6.02513C11.1313 6.6815 11.5 7.57174 11.5 8.5C11.5 9.42826 11.1313 10.3185 10.4749 10.9749C9.8185 11.6313 8.92826 12 8 12C7.07174 12 6.1815 11.6313 5.52513 10.9749C4.86875 10.3185 4.5 9.42826 4.5 8.5Z"
                                    fill="#6C757D" />
                            </svg>
                        </button>
                    </div>
                    <div class="text-danger"> {{ resetForm.errors.value.password_confirmation }} </div>
                    <div class="text-danger" v-if="forgetErrors?.password_confirmation"> {{ forgetErrors?.password_confirmation[0] }}
                    </div>
                </div>


                <div class="btns d-flex flex-column gap-3">
                    <button @click="resetPassword()" :disabled="pendingReset" type="button" class="btn btn-success bg-green w-100"> ارسال </button>
                </div>

                <div class="sign d-flex align-items-center justify-content-center mt-4 gap-1">
                    <p class="m-0"> هل لديك حساب بالفعل؟ </p>
                    <button @click="store.checkForm = 1" class="btn fC-green p-0 m-0 forget"> تسجيل دخول</button>
                </div>
            </div>

        </div>

    </div>
</template>
<script setup>
import { useAuthStore } from "@/stores/auth.ts";
import { useToast } from "primevue/usetoast";
import { useForm } from "vee-validate";
import * as yup from "yup";
let store = useAuthStore();
let checkStep = ref(1);
let typePass = ref(true);
let typePass2 = ref(true);
let otp = ref();
const toast = useToast();
const { locale } = useI18n();
let forgetErrors = ref();
// const { errors, handleSubmit, values, resetForm, defineField } = useForm({
//     validationSchema: yup.object({
//         email: yup.string().email( 'يجب أن يكون البريد الإلكتروني بريدًا إلكترونيًا صالحًا' ).required('this field is required'),
//         password: yup.string().required( 'هذا الحقل مطلوب'),
//     }),
// });

const emailForm = useForm({
    validationSchema: yup.object({
        email: yup.string().email('يجب أن يكون البريد الإلكتروني بريدًا إلكترونيًا صالحًا').required('هذا الحقل مطلوب'),
    }),
});

const resetForm = useForm({
  validationSchema: yup.object({
    password: yup.string().required("هذا الحقل مطلوب"),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref("password")], "كلمة المرور غير متطابقة")
      .required( "هذا الحقل مطلوب"),
  }),
});
const [email, ] = emailForm.defineField("email");
const [password] = resetForm.defineField("password");
const [password_confirmation] = resetForm.defineField("password_confirmation");

// const [password, passwordAttrs] = defineField("password");
const onSubmit = emailForm.handleSubmit(async () => {
    try {
        const response = await useApi().post(`send-otp`, { email: email.value });
        if (response.status === 200 || response.status === 201) {
            checkStep.value = 2;
            otp.value = String(response.data.data.verification_code)
        }
    } catch (error) {
        toast.add({ severity: 'error', summary: 'خطأ', detail: error.response?.data?.errors, life: 5000 });

    }
});


let errorOtp = ref();
let pendingReset = ref(false);
const otpSubmit = async () => {
    try {
        const response = await useApi().post(`verify-otp`, { otp: otp.value, email: email.value });
        if (response.status === 200 || response.status === 201) {
            checkStep.value = 3;
        }

    } catch (error) {
        errorOtp.value = error.response?.data?.errors;
        toast.add({ severity: 'error', summary: 'خطأ', detail: error.response?.data?.errors, life: 5000 });

    }
    // if(otp.value){
    // }
}

const resetPassword = resetForm.handleSubmit(async () => {
    try {
        pendingReset.value = true;
        const response = await useApi().post(`reset-password`, { password: password.value, password_confirmation: password_confirmation.value , email: email.value });
        if (response.status === 200 || response.status === 201) {
            pendingReset.value = false;
            toast.add({ severity: 'success', summary: 'نجاح', detail: 'تم تغيير كلمه المرور بنجاح', life: 5000 });
            checkStep.value = 1;
            store.checkForm = 1;
            forgetErrors.value = undefined;
        }
    } catch (error) {
        pendingReset.value = false;
        forgetErrors.value = error?.response?.data?.errors;
    }
});

</script>
<style lang="">

</style>