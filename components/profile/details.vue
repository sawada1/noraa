<template>
    <div class="details-profile">
        <div class="custom-shadow-container mb-5">
            <div class="main-image mb-5">
                <SvgUser1 v-if="!imageSrc"></SvgUser1>
                <NuxtImg v-if="imageSrc" :src="imageSrc" class="profileImage"></NuxtImg>
                <label for="changeImge1" class="float-input">
                    <input id="changeImge1" @change="onFileChange1" type="file" class="d-none">
                    <SvgCamera></SvgCamera>
                </label>
            </div>
            <div class="inputss mb-5">
                <div class="row">
                    <div class="col-12 col-xl-6 col-lg-6 mb-4">
                        <div class="input">
                            <label class="form-label "> الاسم كامل </label>
                            <input type="text" class="form-control form-control-l" placeholder="" readonly
                                v-model="name">
                        </div>
                    </div>
                    <div class="col-12 col-xl-6 col-lg-6 mb-4">
                        <div class="input">
                            <label class="form-label "> البريد الإلكتروني </label>
                            <input type="email" class="form-control form-control-l" placeholder="" readonly
                                v-model="email">
                        </div>
                    </div>
                    <div class="col-12 col-xl-6 col-lg-6 mb-4">
                        <div class="input">
                            <label class="form-label "> رقم الجوال </label>
                            <input type="text" class="form-control form-control-l" placeholder="" readonly
                                v-model="phone">
                            <div class="num">
                                <div class="divide"></div>
                                <span>
                                    966+
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="edit">
                <button data-bs-toggle="modal" data-bs-target="#editModal">
                    <span> تعديل البيانات </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <path
                            d="M14.0517 4.23937L15.4575 2.83271C15.7506 2.53964 16.148 2.375 16.5625 2.375C16.977 2.375 17.3744 2.53964 17.6675 2.83271C17.9606 3.12577 18.1252 3.52325 18.1252 3.93771C18.1252 4.35216 17.9606 4.74964 17.6675 5.04271L8.81833 13.8919C8.37777 14.3322 7.83447 14.6558 7.2375 14.8335L5 15.5002L5.66667 13.2627C5.8444 12.6657 6.16803 12.1224 6.60833 11.6819L14.0517 4.23937ZM14.0517 4.23937L16.25 6.43771M15 12.1669V16.1252C15 16.6225 14.8025 17.0994 14.4508 17.451C14.0992 17.8027 13.6223 18.0002 13.125 18.0002H4.375C3.87772 18.0002 3.40081 17.8027 3.04917 17.451C2.69754 17.0994 2.5 16.6225 2.5 16.1252V7.37521C2.5 6.87793 2.69754 6.40101 3.04917 6.04938C3.40081 5.69775 3.87772 5.50021 4.375 5.50021H8.33333"
                            stroke="#43806C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </div>

        <div class="custom-shadow-container password-container">
            <div @click="selectPass = !selectPass" class="head d-flex align-items-center justify-content-between">
                <h5> تعديل كلمة المرور </h5>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M9.19209 3.30778C9.30914 3.42497 9.37488 3.58382 9.37488 3.74945C9.37488 3.91508 9.30914 4.07393 9.19209 4.19112L4.00876 9.37445H17.5004C17.6662 9.37445 17.8252 9.4403 17.9424 9.55751C18.0596 9.67472 18.1254 9.83369 18.1254 9.99945C18.1254 10.1652 18.0596 10.3242 17.9424 10.4414C17.8252 10.5586 17.6662 10.6244 17.5004 10.6244H4.00876L9.19209 15.8078C9.2535 15.865 9.30275 15.934 9.33691 16.0107C9.37107 16.0873 9.38944 16.1701 9.39092 16.254C9.3924 16.3379 9.37696 16.4213 9.34553 16.4991C9.3141 16.5769 9.26731 16.6476 9.20796 16.707C9.14861 16.7663 9.07792 16.8131 9.00009 16.8446C8.92227 16.876 8.83891 16.8914 8.75499 16.8899C8.67107 16.8885 8.58831 16.8701 8.51165 16.8359C8.43498 16.8018 8.36598 16.7525 8.30876 16.6911L2.05876 10.4411C1.94172 10.3239 1.87598 10.1651 1.87598 9.99945C1.87598 9.83382 1.94172 9.67497 2.05876 9.55778L8.30876 3.30778C8.42595 3.19074 8.5848 3.125 8.75043 3.125C8.91605 3.125 9.07491 3.19074 9.19209 3.30778Z"
                        fill="#212529" />
                </svg>
            </div>
            <div class="inputs mt-5" v-if="selectPass">
                <div class="row mb-4">
                    <div class="col- mb-4">

                        <div class="input">
                            <label class="form-label "> كلمة المرور الحالية </label>
                            <div class="pass-input">
                                <input :type="typePass1 ? 'password' : 'text'" class="form-control form-control-l"
                                    placeholder=" ************ " v-model="old_password">
                                <button @click="typePass1 = !typePass1" class="">
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
                            <div class="text-danger" v-if="errors.old_password"> {{ errors.old_password }} </div>
                            <div class="text-danger" v-if="errorsPasswords?.old_password"> {{
                                errorsPasswords?.old_password[0] }} </div>
                        </div>
                    </div>
                    <div class="col-12 col-xl-6 col-lg-6 mb-4">
                        <div class="input">
                            <label class="form-label "> كلمة المرور الجديدة</label>
                            <div class="pass-input">
                                <input :type="typePass2 ? 'password' : 'text'" class="form-control form-control-l"
                                    placeholder=" ************ " v-model="password">
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
                            <div class="text-danger"> {{ errors.password }} </div>
                            <div class="text-danger" v-if="errorsPasswords?.password"> {{ errorsPasswords?.password[0]
                                }} </div>
                        </div>
                    </div>
                    <div class="col-12 col-xl-6 col-lg-6 mb-4">
                        <div class="input">
                            <label class="form-label "> تاكيد كلمة المرور </label>
                            <div class="pass-input">
                                <input :type="typePass3 ? 'password' : 'text'" class="form-control form-control-l"
                                    placeholder=" ************ " v-model="password_confirmation">
                                <button @click="typePass3 = !typePass3" class="">
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

                            <div class="text-danger"> {{ errors.password_confirmation }} </div>
                            <div class="text-danger" v-if="errorsPasswords?.password_confirmation"> {{
                                errorsPasswords?.password_confirmation[0] }} </div>

                        </div>
                    </div>
                </div>
                <button @click="changePassword()" class="btn btn-success bg-green px-5 rounded-5"> حفظ البيانات
                </button>
            </div>
        </div>
        <Toast />
        <ProfileEditModal></ProfileEditModal>
    </div>
</template>
<script setup>
let selectPass = ref(false);
import { useAuthStore } from '@/stores/auth';
import { useProfileStore } from '@/stores/profile';
const store = useProfileStore();
const authStore = useAuthStore();
import { useToast } from "primevue/usetoast";
import * as yup from "yup";
const toast = useToast();
let name = ref('');
let phone = ref('');
let email = ref('');
let typePass1 = ref(true);
let typePass2 = ref(true);
let typePass3 = ref(true);
watch(() => store.profileDetails, (val) => {
    name.value = val?.name ? val?.name : '';
    phone.value = val?.name ? val?.phone : '';
    email.value = val?.name ? val?.email : '';
});

const image = ref();
const imageSrc = ref();
const { locale } = useI18n();
const { errors, handleSubmit, values, resetForm, defineField } = useForm({
    validationSchema: yup.object({
        password: yup.string().required(locale.value == 'ar' ? 'هذا الحقل مطلوب' : 'this field is required'),
        old_password: yup.string().required(locale.value == 'ar' ? 'هذا الحقل مطلوب' : 'this field is required'),
        password_confirmation: yup.string().required(locale.value == 'ar' ? 'هذا الحقل مطلوب' : 'this field is required'),
    }),
});
const [old_password] = defineField("old_password");
const [password] = defineField("password");
const [password_confirmation] = defineField("password_confirmation");

const onFileChange1 = (event) => {
    const target = event.target;
    if (!target || !target.files || target.files.length === 0) return;
    image.value = target.files[0];
    console.log(image.value);

    imageSrc.value = URL.createObjectURL(target.files[0]);
    changePhoto();
};

const changePhoto = async () => {
    let formData = new FormData();
    formData.append("image", image.value)
    try {
        let result = await useApi().post('profile_image', formData);
        if (result.status === 200 || result.status === 201) {
            image.value = undefined;
            store.getProfile();
        }

    } catch (error) {
        toast.add({ severity: 'error', summary: 'خطأ', detail: error?.response?.data?.errors?.image[0], life: 5000 });
    }
}
let pendingPass = ref(false);
let errorsPasswords = ref();
const changePassword = handleSubmit(async () => {
    pendingPass.value = true;
    try {
        let result = await useApi().post('change-password', values);
        if (result.status === 200 || result.status === 201) {
            pendingPass.value = false;
            errorsPasswords.value = undefined;
            toast.add({ severity: 'success', summary: 'نجاح', detail: ' تم تغير كلمه المرور بنجاح ', life: 5000 });
            resetForm({
                values: {
                    password: "",
                    password_confirmation: "",
                    old_password: "",

                },
                errors: {},
            });
        }
    } catch (error) {
        errorsPasswords.value = error?.response?.data?.errors;
        pendingPass.value = false;

    }

});

watch(()=> store.profileDetails , (val)=>{
    if(val?.image){
        imageSrc.value = val?.image
    }
})


onMounted(() => {
    store.getProfile();
});
</script>
<style lang="scss">
.details-profile {
    .main-image {
        position: relative;
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #E9ECEF;
        border-radius: 50%;

        .profileImage {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
        }

        .float-input {
            width: 24px;
            height: 24px;
            background-color: #43806C;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            position: absolute;
            cursor: pointer;
            top: 70%;
            left: 2px;
        }
    }

    .edit {
        button {
            color: #43806C;
            border: 1px solid #43806C;
            background-color: #fff;
            padding: 8px 24px;
            border-radius: 24px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
    }

    .password-container {
        .head {
            cursor: pointer;
        }
    }
}

.input {
    position: relative;

    .num {
        position: absolute;
        top: 55%;
        display: flex;
        align-items: center;
        gap: 10px;
        left: 20px;

        .divide {
            width: 1px;
            height: 20px;
            background-color: #6C757D;
        }
    }

}
</style>