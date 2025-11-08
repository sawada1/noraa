<template>
    <div ref="modalRef" class="modal fade modal-dialog-cente" id="editModal" tabindex="-1" aria-labelledby="editModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content px-3">
                <div class="modal-heade pt-3">
                    <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
                    <h1 class="modal-title fC-green fs-5" id="editModalLabel"> تعديل البيانات </h1>
                </div>
                <div class="modal-body  w-100">
                    <div class="row">
                        <div class="col-12 mb-4">
                            <div class="input">
                                <label class="form-label "> الاسم كامل </label>
                                <input type="text" class="form-control form-control-l" placeholder=""
                                    v-model="name">
                                    <span class="text-danger"> {{ errors.name }} </span>
                                    <span v-if="store.errorsProfile?.name" class="text-danger">{{ store.errorsProfile?.name[0] }}</span>
                            </div>
                        </div>
                        <div class="col-12 mb-4">
                            <div class="input">
                                <label class="form-label "> البريد الإلكتروني </label>
                                <input type="email" class="form-control form-control-l"  v-model="email" placeholder="">
                                <span class="text-danger"> {{ errors.email }} </span>
                                <span v-if="store.errorsProfile?.name" class="text-danger">{{ store.errorsProfile?.email[0] }}</span>
                            </div>
                        </div>
                        <div class="col-12 mb-4">
                            <div class="input">
                                <label class="form-label "> رقم الجوال </label>
                                <input type="text" class="form-control form-control-l" placeholder=""
                                    v-model="phone">
                                <div class="num">
                                    <div class="divide"></div>
                                    <span>
                                        966+
                                    </span>
                                </div>
                                <span class="text-danger"> {{ errors.phone }} </span>
                            </div>
                            <span v-if="store.errorsProfile?.phone" class="text-danger">{{ store.errorsProfile?.phone[0] }}</span>
                            
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button @click="onSubmit" :disabled="store.pendingEdit" type="button" class="btn btn-success   bg-green px-4" style="border-radius: 20px;"> حفظ
                        البيانات </button>
                    <button type="button" class="btn  solid px-4 " style="border-radius: 20px;" data-bs-dismiss="modal">
                        رجوع </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useForm } from "vee-validate";
import * as yup from "yup";
import { useAuthStore } from '@/stores/auth';
import { useProfileStore } from '@/stores/profile';
const store = useProfileStore();
const authStore = useAuthStore();
import { useToast } from "primevue/usetoast";
const toast = useToast();

let typePass = ref(true);
const { locale } = useI18n();
const { errors, handleSubmit, values, resetForm, defineField } = useForm({
    validationSchema: yup.object({
        email: yup.string().email(locale.value == 'ar' ? 'يجب أن يكون البريد الإلكتروني بريدًا إلكترونيًا صالحًا' : 'email must be a valid email').required(locale.value == 'ar' ? 'هذا الحقل مطلوب' : 'this field is required'),
        name: yup.string().required(locale.value == 'ar' ? 'هذا الحقل مطلوب' : 'this field is required'),
        phone: yup.string().required(locale.value == 'ar' ? 'هذا الحقل مطلوب' : 'this field is required'),
    }),
    initialValues: {
        email: store.profileDetails?.email ? store.profileDetails?.email : '',
        phone: store.profileDetails ? store.profileDetails?.phone.replace('966','') : '',
        name: store.profileDetails ? store.profileDetails?.name : '',
  },
});
const [email] = defineField("email");
const [name] = defineField("name");
const [phone] = defineField("phone");
const onSubmit = handleSubmit(async() => {
    await store.editProfile(values);
  if (store.successEdit) {
    toast.add({ severity: 'success', summary: '', detail: 'تم تعديل البيانات بنجاح', life: 3000 });
  }
});

const modalRef = ref(null);

watch(()=> store.profileDetails , (val)=>{
    name.value = val?.name ? val?.name : '';
    phone.value = val?.name ? val?.phone.replace('966','') : '';
    email.value = val?.name ? val?.email : '';
})
const closeModal = () => {
  const modal = document.querySelector('[data-bs-dismiss="modal"]')?.closest('.modal');
  if (modal) {
    const bsModal = bootstrap.Modal.getInstance(modal);
    bsModal?.hide();
  }
};


watch(()=> store.successEdit , (val)=>{
    if(val){
        closeModal();
    }
})
</script>