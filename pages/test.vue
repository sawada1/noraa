<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="bannerImage" style="background-image: url(/images/bookBack.png);">
                    <div>
                        <h2 class="fC-LightOrange mb-3 fs-1"> الاختبار 1 </h2>
                        <p> لوريم إيبسوم هو نص عربي غير معنى، يُستخدم في مجالات الطباعة </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container quiz-container mt-5 mb-5">
            <div class="row gap-3">
                <div class="col-3">
                    <div class="questions">
                        <div class="count-main">
                            <div class="head d-flex align-items-center gap-3">
                                <div>
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
                                <h4> عدد الاسألة {{ currentQuestionIndex + 1 }} من {{ questionsData.length }} </h4>
                            </div>
                            <!-- <div class="timer mt-3 d-flex align-items-center justify-content-center flex-column gap-2">
                                <div class="circle d-flex align-items-center justify-content-center">
                                    <span> 0:50 </span>
                                </div>
                                <span class="rest"> الوقت المتبقي </span>
                            </div> -->
                            <div class="d-flex align-items-center justify-center mt-3 gap-1 flex-column">
                                <div class="timer">
                                    <svg viewBox="0 0 36 36" class="circular-progress">
                                        <path class="circle-bg" d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831" />
                                        <path class="circle" :style="{ strokeDasharray: `${progress} 100` }" d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    </svg>
                                    <div class="time">{{ formattedTime }}</div>
                                </div>
                                <span class="rest"> الوقت المتبقي </span>
                            </div>
                        </div>
                        <div class="rest-quetsions mt-5">
                            <Accordion value="0">
                                <AccordionPanel value="0">
                                    <AccordionHeader class="head"> قائمة اسئلة الاختبارات </AccordionHeader>
                                    <AccordionContent>
                                        <div class="items d-flex flex-column gap-3">
                                            <div v-for="item , index in questionsData" :class="{'active': item.answer}" class="item d-flex align-items-center justify-content-between">
                                                <p> {{ item.label }} </p>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none">
                                                    <path
                                                        d="M10.5808 16.2538L17.3038 9.53075L16.25 8.477L10.5808 14.1463L7.73075 11.2963L6.677 12.35L10.5808 16.2538ZM12.0017 21.5C10.6877 21.5 9.45267 21.2507 8.2965 20.752C7.14033 20.2533 6.13467 19.5766 5.2795 18.7218C4.42433 17.8669 3.74725 16.8617 3.24825 15.706C2.74942 14.5503 2.5 13.3156 2.5 12.0017C2.5 10.6877 2.74933 9.45267 3.248 8.2965C3.74667 7.14033 4.42342 6.13467 5.27825 5.2795C6.13308 4.42433 7.13833 3.74725 8.294 3.24825C9.44967 2.74942 10.6844 2.5 11.9983 2.5C13.3123 2.5 14.5473 2.74933 15.7035 3.248C16.8597 3.74667 17.8653 4.42342 18.7205 5.27825C19.5757 6.13308 20.2528 7.13833 20.7518 8.294C21.2506 9.44967 21.5 10.6844 21.5 11.9983C21.5 13.3123 21.2507 14.5473 20.752 15.7035C20.2533 16.8597 19.5766 17.8653 18.7218 18.7205C17.8669 19.5757 16.8617 20.2528 15.706 20.7518C14.5503 21.2506 13.3156 21.5 12.0017 21.5Z"
                                                        fill="#6C757D" />
                                                </svg>
                                            </div>
                                           
                                        </div>
                                    </AccordionContent>
                                </AccordionPanel>
                            </Accordion>
                        </div>
                    </div>
                </div>
                <div class="col-8">
                    <div class="all-questions">
                        <div v-if="!lastStep" class="question">
                            <!-- Text Question -->
                            <div v-if="currentQuestion.type === 'text'">
                                <h3 class="mb-4">{{ currentQuestion.label }}</h3>
                                <div class="main-input">
                                    <textarea v-model="currentQuestion.answer" placeholder="اكتب الاجابة هنا..."
                                        rows="5" class="w-100"></textarea>
                                </div>
                            </div>

                            <!-- Radio Question -->
                            <div v-if="currentQuestion.type === 'radio'">
                                <h3 class="mb-4">{{ currentQuestion.label }}</h3>
                                <div class="main-input">
                                    <div class="radio-check-inputs">
                                        <label v-for="(theinput, index) in currentQuestion.content"
                                            :key="`radio-${index}`" :for="`radio-${index}`"
                                            class="input d-flex align-items-center justify-content-between">
                                            <span :class="{ active: currentQuestion.answer === theinput.value }">
                                                {{ theinput.name }}
                                            </span>
                                            <RadioButton v-model="currentQuestion.answer" :inputId="`radio-${index}`"
                                                :value="theinput.value" />
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <!-- Checkbox Question -->
                            <div v-if="currentQuestion.type === 'check'">
                                <h3 class="mb-4">{{ currentQuestion.label }}</h3>
                                <div class="main-input">
                                    <div class="radio-check-inputs">
                                        <label v-for="(theinput, index) in currentQuestion.content"
                                            :key="`check-${index}`" :for="`check-${index}`"
                                            class="input d-flex align-items-center justify-content-between">
                                            <span :class="{ active: currentQuestion.answer.includes(theinput.value) }">
                                                {{ theinput.name }}
                                            </span>
                                            <Checkbox v-model="currentQuestion.answer" :inputId="`check-${index}`"
                                                :value="theinput.value" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button v-if="!lastStep" @click="nextQuestion"
                            class="btn submit mt-4 btn-success bg-green px-5">
                            التالي
                        </button>

                     


                        <div v-if="lastStep" class="success-final">
                            <div class="d-flex align-items-center flex-column gap-3 mb-5">
                                <img src="/images/success1.svg" alt="">
                                <span> تم الانتهاء من عملية الاختبار بنجاح </span>
                            </div>
                            <div>
                                <h3 class="fw-bold mb-4"> باقات الدورات الموصي بها </h3>
                                <div class="row">
                                    <div v-for="i in 3" class="col-12 col-xl-4 col-lg-4">
                                        <CardJournal class="text-center"></CardJournal>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const radio1 = ref('');
const checkBox1 = ref([]);
let steps = ref(0);
const lastStep = ref(false);
const duration = 60;
const timeLeft = ref(duration);

const progress = computed(() => ((duration - timeLeft.value) / duration) * 100);
const questionsData = ref([
    {
        type: 'text',
        label: 'question 1',
        content: '',
        answer: '', 
    },
    {
        type: 'radio',
        label: 'question 2',
        content: [
            { name: 'radio 1', value: 'radio 1' },
            { name: 'radio 2', value: 'radio 2' },
            { name: 'radio 3', value: 'radio 3' },
            { name: 'radio 4', value: 'radio 4' },
        ],
        answer: '', 
    },
    {
        type: 'check',
        label: 'question 3',
        content: [
            { name: 'check 1', value: 'check 1' },
            { name: 'check 2', value: 'check 2' },
            { name: 'check 3', value: 'check 3' },
            { name: 'check 4', value: 'check 4' },
        ],
        answer: '', 
    },
]);

const currentQuestionIndex = ref(0); 
const currentQuestion = computed(() => questionsData.value[currentQuestionIndex.value]); 


function nextQuestion() {
    if (validateAnswer(currentQuestion.value)) {
       
        if (currentQuestionIndex.value < questionsData.value.length - 1) {
            currentQuestionIndex.value++;
            timeLeft.value = duration;
        } else {
            const mapedArray = questionsData.value.map((ele) => { return ele.answer });
            console.log(mapedArray);
            lastStep.value = true;
            timeLeft.value = 0;

        }
    } else {
        alert('Please answer the question before proceeding.');
    }
}


function validateAnswer(question) {
    if (question.type === 'text') {
        return question.answer.trim() !== ''; 
    } else if (question.type === 'radio') {
        return question.answer !== ''; 
    } else if (question.type === 'check') {
        return question.answer.length > 0;
    }
    return false;
}



const formattedTime = computed(() => {
  const minutes = Math.floor(timeLeft.value / 60).toString().padStart(2, '0');
  const seconds = (timeLeft.value % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
});

let timer;

const startCountdown = () => {
  timer = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value -= 1;
    } else {
        console.log('sssssss');
        if(currentQuestionIndex.value < questionsData.value.length - 1){
            currentQuestionIndex.value++;
            timeLeft.value = duration;

        } else{
            lastStep.value = true;
            clearInterval(timer);
        }
    }
  }, 1000);
};

onMounted(() => {
  startCountdown();
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<style lang="scss">
.quiz-container {
    .questions {
        .count-main {
            box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.08);
            border-radius: 16px;
            background-color: #fff;
            padding: 16px;

            .head {
                h4 {
                    font-size: 16px;
                }
            }

            .timer {
                .circle {
                    width: 90px;
                    height: 90px;
                    border-radius: 50%;
                    border: 2px solid #43806c6e;
                    background: conic-gradient(#43806c 0deg, #ddd 0deg);
                    position: relative;

                    .line {
                        position: absolute;
                        left: 0;
                        top: 0;
                        bottom: 0;
                        height: 100%;
                        width: 0;
                        width: 100%;
                        border-radius: 50%;
                        border: 2px solid red;
                        // background-color: red;
                    }

                    span {
                        color: #43806C;
                        font-size: 20px;
                        font-weight: 700;
                    }
                }


            }
        }

        .rest-quetsions {
            box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.08);
            border-radius: 16px;

            .head {
                color: #000;
                font-size: 16px;
                font-weight: 500;
            }

            .items {
                .item {
                    border-radius: 24px;
                    background-color: #dee2e659;
                    padding: 9px;

                    span {
                        color: #6C757D;
                        font-size: 12px;
                    }

                    &.active {
                        background-color: #43806c48;

                        p {
                            color: #43806C;
                        }

                        svg {
                            fill: #43806C !important;

                            path {
                                fill: #43806C !important;
                            }
                        }
                    }
                }
            }
        }
    }
}

.timer {
    position: relative;
    width: 100px;
    height: 100px;
}

.circular-progress {
    width: 100px;
    height: 100px;
    transform: rotate(-90deg);
}

.circle-bg {
    fill: none;
    stroke: #43806c4b;
    stroke-width: 2;
}

.circle {
    fill: none;
    stroke: #43806C;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-dasharray: 0 100;
    transition: stroke-dasharray 0.5s linear;
}

.time {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
    color: #43806C;
    font-weight: bold;
}


.all-questions {
    .submit {
        border-radius: 32.5px;
    }

    input,
    textarea {
        resize: none;
        outline: none;
        border-radius: 8px;
        border: 1px solid #DEE2E6;
        padding: 5px;
    }

    
    
}
</style>
