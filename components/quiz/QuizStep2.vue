<template>
     <div class="container consultation-questions mb-5 ">
        <h3 class="fC-green text-center my-5"> {{ store.quizzes?.title }} </h3>
        
        <div class="row">
            <div class="col-xl-3 col-lg-3 col-12 mb-5 mb-xl-0 mb-lg-0  position-relative">
                <div class="custom-shadow-container position-sticky top-0">
                    <div>
                        <div class="head d-flex align-items-center gap-3">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M16.2344 6.35151H9.52567C8.68403 6.35275 7.87729 6.68797 7.28261 7.28353C6.68792 7.8791 6.3539 8.68634 6.3539 9.52798V18.3515C5.60506 18.3515 4.88688 18.054 4.35737 17.5245C3.82785 16.995 3.53037 16.2768 3.53037 15.528V6.45315C3.53037 5.03668 4.5892 3.80751 6.03767 3.68609C6.24869 3.66895 6.45984 3.65327 6.67108 3.63903C6.90932 3.18001 7.26906 2.79524 7.71104 2.5267C8.15302 2.25816 8.66027 2.11616 9.17743 2.11621H10.5892C11.1064 2.11616 11.6136 2.25816 12.0556 2.5267C12.4976 2.79524 12.8573 3.18001 13.0956 3.63903C13.3073 3.65315 13.5191 3.66915 13.729 3.68609C15.1426 3.80562 16.1854 4.97927 16.2344 6.35151ZM10.5892 3.52798C10.9636 3.52798 11.3227 3.67671 11.5875 3.94147C11.8522 4.20623 12.001 4.56532 12.001 4.93974H7.76567C7.76567 4.56532 7.91441 4.20623 8.17916 3.94147C8.44392 3.67671 8.80301 3.52798 9.17743 3.52798H10.5892Z"
                                        fill="#43806C" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M20.4717 9.52838C20.4717 8.55332 19.6811 7.76367 18.707 7.76367H9.5305C8.55544 7.76367 7.7658 8.55426 7.7658 9.52838V20.1166C7.7658 21.0907 8.55639 21.8813 9.5305 21.8813H18.707C19.175 21.8813 19.6239 21.6954 19.9548 21.3644C20.2858 21.0335 20.4717 20.5846 20.4717 20.1166V9.52838ZM17.6482 11.999C17.6482 11.8118 17.5738 11.6322 17.4414 11.4998C17.309 11.3675 17.1295 11.2931 16.9423 11.2931H16.9347C16.7475 11.2931 16.568 11.3675 16.4356 11.4998C16.3032 11.6322 16.2289 11.8118 16.2289 11.999V12.0065C16.2289 12.1937 16.3032 12.3733 16.4356 12.5056C16.568 12.638 16.7475 12.7124 16.9347 12.7124H16.9423C17.1295 12.7124 17.309 12.638 17.4414 12.5056C17.5738 12.3733 17.6482 12.1937 17.6482 12.0065V11.999ZM15.5305 11.999C15.5305 11.8118 15.4561 11.6322 15.3238 11.4998C15.1914 11.3675 15.0118 11.2931 14.8246 11.2931H11.2952C11.108 11.2931 10.9285 11.3675 10.7961 11.4998C10.6637 11.6322 10.5893 11.8118 10.5893 11.999C10.5893 12.1862 10.6637 12.3657 10.7961 12.4981C10.9285 12.6305 11.108 12.7048 11.2952 12.7048H14.8246C15.0118 12.7048 15.1914 12.6305 15.3238 12.4981C15.4561 12.3657 15.5305 12.1862 15.5305 11.999ZM17.6482 14.8225C17.6482 14.6353 17.5738 14.4557 17.4414 14.3234C17.309 14.191 17.1295 14.1166 16.9423 14.1166H16.9347C16.7475 14.1166 16.568 14.191 16.4356 14.3234C16.3032 14.4557 16.2289 14.6353 16.2289 14.8225V14.83C16.2289 15.0172 16.3032 15.1968 16.4356 15.3292C16.568 15.4615 16.7475 15.5359 16.9347 15.5359H16.9423C17.1295 15.5359 17.309 15.4615 17.4414 15.3292C17.5738 15.1968 17.6482 15.0172 17.6482 14.83V14.8225ZM15.5305 14.8225C15.5305 14.6353 15.4561 14.4557 15.3238 14.3234C15.1914 14.191 15.0118 14.1166 14.8246 14.1166H11.2952C11.108 14.1166 10.9285 14.191 10.7961 14.3234C10.6637 14.4557 10.5893 14.6353 10.5893 14.8225C10.5893 15.0097 10.6637 15.1893 10.7961 15.3216C10.9285 15.454 11.108 15.5284 11.2952 15.5284H14.8246C15.0118 15.5284 15.1914 15.454 15.3238 15.3216C15.4561 15.1893 15.5305 15.0097 15.5305 14.8225ZM17.6482 17.646C17.6482 17.4588 17.5738 17.2793 17.4414 17.1469C17.309 17.0145 17.1295 16.9401 16.9423 16.9401H16.9347C16.7475 16.9401 16.568 17.0145 16.4356 17.1469C16.3032 17.2793 16.2289 17.4588 16.2289 17.646V17.6536C16.2289 17.8408 16.3032 18.0203 16.4356 18.1527C16.568 18.2851 16.7475 18.3594 16.9347 18.3594H16.9423C17.1295 18.3594 17.309 18.2851 17.4414 18.1527C17.5738 18.0203 17.6482 17.8408 17.6482 17.6536V17.646ZM15.5305 17.646C15.5305 17.4588 15.4561 17.2793 15.3238 17.1469C15.1914 17.0145 15.0118 16.9401 14.8246 16.9401H11.2952C11.108 16.9401 10.9285 17.0145 10.7961 17.1469C10.6637 17.2793 10.5893 17.4588 10.5893 17.646C10.5893 17.8332 10.6637 18.0128 10.7961 18.1452C10.9285 18.2775 11.108 18.3519 11.2952 18.3519H14.8246C15.0118 18.3519 15.1914 18.2775 15.3238 18.1452C15.4561 18.0128 15.5305 17.8332 15.5305 17.646Z"
                                        fill="#43806C" />
                                </svg>
                            </div>
                            <h4 class="fw-bold fc-Darkgreay fs-6"> عدد الاسألة {{ questionNum }} من 12 </h4>
                        </div>
                        <div class=" d-flex align-items-center flex-column gap-4">
                            <Knob v-model="updatePercentage" :size="80" valueTemplate="{value}%" valueColor="#43806C" readonly />

                            <span> المتبقي من محتوي الكورس </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-9 col-lg-9 col-12">
                <div class="custom-shadow-container">
                    <div v-if="selectedInputs == 1"  class="row">
                        <div v-for="input , index in store.quizzes?.steps?.step_1" class="col-xl-6 col-lg-6 col-12 mb-4">
                            <div class="input  d-flex flex-column gap-2">
                                <label for=""> {{ input?.name }} </label>
                                <Select  v-model="selectedStep1[`selected${index}`]" @update:modelValue="updateAnswer(input.id, $event)" v-if="input?.type == 'single'"  :options="input?.answers" style="min-height: 41px;" optionValue="id" optionLabel="name"
                                    placeholder="  " class="" />
                                    <InputText v-else name="" v-model="selectedStep1[`selected${index}`]"   @update:modelValue="updateAnswer(input.id, $event)"
                                    type="text" placeholder="" />

                            </div>
                        </div>
                    
                    </div>
                    <div v-if="selectedInputs == 2"  class="row">
                        <h4> {{ store.quizzes?.steps?.step_2[0]?.name }} </h4>
                        <div class="mt-4">
                            <div class="radio-check-inputs">
                                <label v-for="(theinput, index) in  store.quizzes?.steps?.step_2[0]?.answers" :key="`check-${index}`" :for="`check-${index}`"
                                    class="input d-flex align-items-center justify-content-between">
                                    <span>
                                      {{ theinput.name }}
                                    </span>
                                    <Checkbox v-model="selectedStep2"  :inputId="`check-${index}`" :value="theinput.id"    @change="updateAnswer(store.quizzes?.steps?.step_2[0]?.id, selectedStep2, true)"                                     />
                                </label>
                            </div>
                        </div>
                    
                    </div>
                    <div v-if="selectedInputs == 3"  class="row">
                        <h4> {{ store.quizzes?.steps?.step_3[0]?.name }} </h4>
                        <div class="mt-4">
                            <div class="radio-check-inputs">
                                <label v-for="(theinput, index) in  store.quizzes?.steps?.step_3[0]?.answers" :key="`check-${index}`" :for="`check-${index}`"
                                    class="input d-flex align-items-center justify-content-between">
                                    <span>
                                      {{ theinput.name }}
                                    </span>
                                    <Checkbox v-model="selectedStep3"  :inputId="`check-${index}`" :value="theinput.id"    @change="updateAnswer(store.quizzes?.steps?.step_3[0]?.id, selectedStep3, true)"                                     />
                                </label>
                            </div>
                        </div>
                    
                    </div>
                  
                    <div v-if="selectedInputs == 4" class="">
                        <div v-for="input , index in store.quizzes?.steps?.step_4" class="col-xl-6 col-lg-6 col-12 mb-4">
                            <div class="input  d-flex flex-column gap-2">
                                <label for=""> {{ input?.name }} </label>
                                <Select  v-model="selectedStep4[`selected${index}`]" @update:modelValue="updateAnswer(input.id, $event)" v-if="input?.type == 'single'"  :options="input?.answers" style="min-height: 41px;" optionValue="id" optionLabel="name"
                                    placeholder="  " class="" />
                                    <InputText v-else name="" v-model="selectedStep4[`selected${index}`]"   @update:modelValue="updateAnswer(input.id, $event)"
                                    type="text" placeholder="" />

                            </div>
                        </div>
                    </div>
        

                    <div v-if="selectedInputs == 5">
                        <div class="d-flex align-items-center flex-column gap-3 mb-5">
                            <img src="/images/success1.svg" alt="">
                            <span> تم الانتهاء من عملية الاختبار بنجاح </span>
                            <button @click="sendConsultation()" :disabled="pendingBtn" class="bg-green px-5 py-2 rounded-5 text-light"> ادفع الان </button>
                        </div>
                    </div>
                
                    <div class="d-flex align-items-center justify-content-between">
                        <button v-if="selectedInputs >= 2" @click="selectedInputs--" class="bg-green text-light py-2 px-5 rounded-5 mt-5"> رجوع
                        </button>
                        <button v-if="selectedInputs != 4"  @click="nextStep()" 
                        :disabled="!isStepValid" class="bg-green text-light py-2 px-5 rounded-5 mt-5"> {{ selectedInputs <= 4 ? 'التالي' : 'انهاء' }} 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useConsultationStore } from '@/stores/consultation';
let store = useConsultationStore();
let percentage = ref(10);
const selectedInputs = ref(1);
const activeBtn = ref(0);
const questionNum = computed(() => selectedAnswers.value.length);

const selectedStep1 = ref({
    selected1: undefined, 
    selected2: '', 
    selected3: undefined, 
    selected4: undefined, 
    selected5: undefined, 
    selected6: undefined, 
    selected7: undefined, 
})
const selectedStep2 = ref([])
const selectedStep3 = ref([])
const selectedStep4 = ref({
    selected1: undefined, 
    selected2: undefined, 
    selected3: undefined, 
});





let selectedAnswers = ref([]);
const updateAnswer = (questionId, answerValue, isCheckbox = false) => {
  const existingIndex = selectedAnswers.value.findIndex(ans => ans.question_id === questionId);

  if (isCheckbox) {
    // Ensure value is an array
    const updatedValues = Array.isArray(answerValue) ? [...answerValue] : [answerValue];

    if (existingIndex !== -1) {
      selectedAnswers.value[existingIndex].value = updatedValues;
      
      // Remove entry if empty
      if (updatedValues.length === 0) {
        selectedAnswers.value.splice(existingIndex, 1);
      }
    } else {
      // Create a new entry
      selectedAnswers.value.push({ question_id: questionId, value: updatedValues });
    }
  } else {
    // Handle non-checkbox inputs (Select, Text)
    if (existingIndex !== -1) {
      selectedAnswers.value[existingIndex].value = answerValue;
    } else {
      selectedAnswers.value.push({ question_id: questionId, value: answerValue });
    }
  }

  console.log(selectedAnswers.value);
};



const isStepValid = computed(() => {
  const stepInputs = store.quizzes?.steps?.[`step_${selectedInputs.value}`] || [];
  return stepInputs.every(input => selectedAnswers.value.some(ans => ans.question_id === input.id && ans.value !== undefined && ans.value !== ''));
});

const nextStep = ()=>{
    if(isStepValid.value){
        selectedInputs.value++
    }
}

const updatePercentage = computed(() => Math.round((questionNum.value / 12) * 100));
let pendingBtn = ref(false);
const sendConsultation = async()=>{
    pendingBtn.value = true;
    try{
        let result = await useApi().post('consultation-orders',{
            date: store.date,
            time: store.time,
            consultaion_type_id: store.activeType,
            consultaion_id: store?.dataConsultation?.id,
            quiz_id: store.quizzes?.id,
            answers: selectedAnswers.value,
            type: "consultation",
            total_price: 150.00,
            payment_method: "visa",
            
        });
        if(result.status == 200 || result.data == 201){
         pendingBtn.value = false;
         store.nextQuiz = false
        //  store.date = '';
        //  store.time = '';
    
     }

    }catch(error){
        pendingBtn.value = false;

    }
}


</script>
<style lang="">
    
</style>