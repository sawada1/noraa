<template>
    <div class="container-pdf">
        <div class="items p-4" :class="{'mobile': checkOpen}">
            <div class="mb-3 fC-green fs-3">
                <button @click="store.closePdf = false"> x </button>
            </div>
            <div class="btns-container">
                <button @click="activeBtn = 1" :class="{ 'active': activeBtn == 1 }">
                    <SvgNotes :width="18" :height="18" :color="activeBtn == 1 ? '#fff' : '#43806C'"></SvgNotes>
                    <span class="fC-green" :class="{ 'text-white': activeBtn === 1 }"> ملحوظات </span>
                </button>
                <button @click="activeBtn = 2" :class="{ 'active': activeBtn == 2 }">
                    <SvgMark :width="18" :height="18" :color="activeBtn == 2 ? '#fff' : '#43806C'"></SvgMark>
                    <span class="fC-green" :class="{ 'text-white': activeBtn === 2 }"> الاسئلة </span>

                </button>
            </div>
            <div v-if="activeBtn === 1" class="notes-container data-pdf">
                <div class="item" v-for="i in notes" @click="search(i?.main_text) , checkOpen = false">
                    <div class="d-flex flex-column gap-2">
                        <p> {{ i?.note }} </p>
                        <div class="d-flex align-items-center gap-3">
                            <SvgBook></SvgBook>
                            <span> {{ i?.page }} صفحة </span>
                        </div>
                    </div>
                    <!-- <button @click="search(i.text)"> {{ i.text }} </button> -->
                </div>
                <div v-if="notes.length == 0" class="h-100 d-flex align-items-center justify-content-center">
                    <div class="d-flex flex-column align-items-center gap-3">
                        <SvgNotes></SvgNotes>
                        <span style="color:#6C757D;" class="fw-bold fs-6"> لا توجد ملاحظات </span>
                    </div>
                </div>
            </div>
            <div v-if="activeBtn === 2" class="questions-container data-pdf">
                <div class="item" v-for="i in questions">
                    <div class="d-flex flex-column gap-2">
                        <p> {{ i?.question }} </p>
                        <div class="d-flex align-items-center gap-3">
                            <SvgBook></SvgBook>
                            <span> {{ i?.page }} صفحة </span>
                        </div>
                        <div class="pending data" v-if="i?.is_answer == 0">
                            <p> في انتظار الاجابة </p>
                        </div>
                        <div v-else class="answer data">
                            <p> {{ i?.answer }} </p>
                        </div>
                    </div>
                    <!-- <button @click="search(i.text)"> {{ i.text }} </button> -->
                </div>
            </div>
        </div>
        <div class="pdf-container" :class="{'mobile': checkOpen}">
            <ClientOnly>
                <VPdfViewer @mouseup="handleMouseUp" :toolbar-options="{
                    themeSwitchable: true,
                    newFileOpenable: false,
                    downloadable: false,
                    printable: false,
                    fullscreen: true,
                }" ref="vpvRef" @pageChanged="onPageChanged" :src="pdfUrl" :text-layer="true" />
            </ClientOnly>
        </div>
        <div class="modal fade" id="notesModal" tabindex="-1" aria-labelledby="notesModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header w-100  d-flex align-items-center justify-content-between">
                        <h5 class="modal-title fw-semibold" id="notesModalLabel" style="color:#212529;"> اضافة ملحوظة
                        </h5>
                        <button type="button" class="btn-close m-0" id="btn-close-notes"
                            data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <textarea class="mb-3 w-100 p-2" name="" v-model="noteText" id="" placeholder=" اكتب هنا... "
                            cols="20" rows="8"
                            style="resize: none; border: 1px solid  #DFE4EA; border-radius: 6px;"></textarea>
                        <!-- Note form or content goes here -->
                        <!-- <p>{{ selectedText }}</p> -->

                        <div class="d-flex align-items-center gap-4">

                            <button class="btn btn-success  bg-green px-4" style="width: 150px; height: 40px;"
                                @click="createNote()"> حفظ </button>
                            <button data-bs-dismiss="modal" class="btn solid fC-green px-4"
                                style="width: 150px; height: 40px; border-color: #43806C;"> رجوع </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <!-- Questions Modal -->
        <div class="modal fade" id="questionsModal" tabindex="-1" aria-labelledby="questionsModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header w-100  d-flex align-items-center justify-content-between">
                        <h5 class="modal-title" id="questionsModalLabel"> اضافة سؤال </h5>
                        <button type="button" class="btn-close m-0" id="btn-close-question"
                            data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <textarea class="mb-3 w-100 p-2" name="" v-model="questionText" id=""
                            placeholder=" اكتب هنا... " cols="20" rows="8"
                            style="resize: none; border: 1px solid  #DFE4EA; border-radius: 6px;"></textarea>


                        <!-- Question form or content goes here -->
                        <!-- <p>{{ selectedText }}</p> -->
                        <div class="d-flex align-items-center gap-4">

                            <button class="btn btn-success  bg-green px-4" style="width: 150px; height: 40px;"
                                @click="createQuestion()"> حفظ </button>
                            <button data-bs-dismiss="modal" class="btn solid fC-green px-4"
                                style="width: 150px; height: 40px; border-color: #43806C;"> رجوع </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <button @click="checkOpen = !checkOpen" class="openBtn">
            <span v-if="!checkOpen">
                <SvgNotes color="#fff" :width="25" :height="25"></SvgNotes>
            </span>
            <span v-else>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1.34313 1.34315L12.6568 12.6569M12.6568 1.34315L1.34313 12.6569" stroke="white"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </span>
        </button>
    </div>
    <GeneralLoader v-if="pending"></GeneralLoader>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed, watch } from 'vue';
import { VPdfViewer, Locales } from '@vue-pdf-viewer/viewer';
import { useBooksStore } from '@/stores/books';
let store = useBooksStore();
let activeBtn = ref(1);
const pending = ref(true);
const showModal = ref(false)
const selectedText = ref<string>('')
const noteText = ref('');
const questionText = ref('');
const items = ref<{ page: number; text: string; note: string }[]>([]);
const notes = ref([]);
const questions = ref([]);
const pdfUrl = ref('/testBook1.pdf');
const vpvRef = ref<InstanceType<typeof VPdfViewer>>();
let route = useRoute();
const checkOpen = ref(false);
const searchValue = ref<string>('')
const searchControl = computed(() => vpvRef.value?.searchControl)
const searching = computed(() => searchControl?.value?.searching?.value)

const search = (text: string) => {
    console.log(text);
    if (process.client) {
        document.querySelector('.vpv-toolbar-start .vpv-toolbar-btn')?.click();
    }
    searchControl.value?.search(text)
}

const currentPage = ref(1)
const totalPages = ref(0);
const highlightControl = computed(() => vpvRef.value?.highlightControl);
const onPageChanged = (page: number) => {
    // Do something with the current focused page
    currentPage.value = page;
    console.log(currentPage.value);

};
// const highlight = () => {
//     highlightControl.value?.highlight([
//         {
//             keyword: "GUIDE TO THE GALAXY",
//             highlightColor: "rgba(0, 255, 0, 0.5)", // Green color
//         },
//         {
//             // This regular expression matches the word "type" in a case-insensitive manner
//             keyword: /type/gi,
//             highlightColor: "rgba(0, 0, 255, 0.5)", // Blue color
//         },
//     ]);
// };

// watch(vpvRef, (vpvInstance) => {
//     if (!vpvInstance) return;
//     // Initiate the highlight
//     // highlight();
// });
const handleMouseUp = () => {
    const text = window.getSelection()?.toString().trim() as string;
    // Get the element where the selection began
    const selection = window.getSelection();
    const anchorNode = selection?.anchorNode;
    const parentElement = anchorNode?.parentElement;

    // If the selection is inside an input with class `vpv-input-search`, exit early
    if (parentElement?.closest('.vpv-popover')) {
        return;
    }

    if (text != '') {
        if (activeBtn.value === 1) {
            const notesModal = new bootstrap.Modal(document.getElementById('notesModal')!);
            notesModal.show();
        } else if (activeBtn.value === 2) {
            const questionsModal = new bootstrap.Modal(document.getElementById('questionsModal')!);
            questionsModal.show();
        }
        console.log('Selected text:', selectedText.value);
        selectedText.value = text
        showModal.value = true
        // You can show a popup or highlight the selection here
    }
};

const cancelNote = () => {
    showModal.value = false
    selectedText.value = ''
    noteText.value = ''
}

const saveNote = () => {
    items.value.push({
        page: currentPage.value,
        text: selectedText.value,
        note: noteText.value
    })
    showModal.value = false
    selectedText.value = ''
    noteText.value = ''
}

const createNote = async () => {
    if (noteText.value != '') {
        let result = await useApi().post(`books/notes`, {
            text: selectedText.value,
            note: noteText.value,
            page: currentPage.value,
            book_id: route.query.id,
        });
        if (result.status === 200 || result.status === 201) {
            if (process.client) {
                // Close the modal
                getDataNotes();
                document.getElementById('btn-close-notes')?.click()
                // const notesModal = new bootstrap.Modal(document.getElementById('notesModal')!);
                // notesModal.hide();
                selectedText.value = '';
                noteText.value = '';
            }
        }
    }
}
const createQuestion = async () => {
    if (questionText.value != '') {
        let result = await useApi().post(`books/question`, {
            text: selectedText.value,
            page: currentPage.value,
            question: questionText.value,
            book_id: route.query.id,
        });
        if (result.status === 200 || result.status === 201) {
            if (process.client) {
                // Close the modal
                getDataQuestion();
                document.getElementById('btn-close-question')?.click()
                // const notesModal = new bootstrap.Modal(document.getElementById('notesModal')!);
                // notesModal.hide();
                selectedText.value = '';
                questionText.value = '';
            }
        }
    }
}

const getDataNotes = async () => {
    let result = await useApi().get(`books/notes/${route.query.id}`);
    if (result.status === 200) {
        notes.value = result.data?.data;
    }
}
const getDataQuestion = async () => {
    let result = await useApi().get(`books/question/${route.query.id}`);
    if (result.status === 200) {
        questions.value = result.data?.data;
    }
}


onMounted(() => {
    getDataNotes();
    getDataQuestion();
    setTimeout(() => {
        pending.value = false
    }, 1000);
});
</script>

<style scoped lang="scss">
.text-white {
    color: #fff !important;
}

.data-pdf {
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 10px;
    height: 95%;

    p {
        color: #6C757D;
        font-size: 12px;
    }

    span {
        color: #212529;
        font-size: 12px;
        font-weight: 500;
    }
}

.questions-container {
    .data {
        background: #FFF;
        padding: 5px;
        border-radius: 4px;

        p {
            // font-size: 14px !important;
            font-weight: 500;
        }

        &.answer {
            border: 1px solid #43806C;

            p {
                color: #43806C !important;
            }
        }

        &.pending {
            border: 1px solid #6C757D;
        }
    }
}

.notes-container {
    .item {
        cursor: pointer;
        transition: all 0.4 ease-in-out;
        border-radius: 12px;
        padding: 4px;
        border-width: 1px;
        border-style: solid;
        border-color: transparent;
        position: relative;

        &::before {
            content: '';
            position: absolute;
            top: 105%;
            width: 100%;
            left: 0;
            right: 0;
            height: 1px;
            background-color: #DEE2E6;
        }

        &:hover {
            border-color: #43806C;
        }
    }
}

.container-pdf {
    position: fixed;
    display: flex;
    width: 100vw;
    top: 0;
    right: 0;
    left: 0;
    z-index: 55555555;
    height: 100vh;

    .pdf-container {
        width: 75%;
        height: 100%;
    }

    .items {
        background-color: #fff;
        width: 25%;
        height: 100%;

        .btns-container {
            display: flex;
            width: 100%;
            height: 40px;
            justify-content: center;
            align-items: flex-end;
            gap: 10px;
            border-radius: 40px;
            background: #E9ECEF;

            button {
                display: flex;
                align-items: center;
                gap: 5px;
                width: 50%;
                height: 100%;
                justify-content: center;
                border-radius: 40px;
                background: #E9ECEF;
                color: #43806C;

                &.active {
                    background-color: #43806C;
                    color: white;
                }

            }
        }
    }

    .openBtn {
        position: absolute;
        bottom: 10px;
        right: 10px;
        width: 40px;
        height: 40px;
        background-color: #366656;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        display: none;
    }
}

@media (max-width:1024px) {
    .container-pdf {
        flex-direction: column;
       .openBtn{
        display: flex;
       }
       .items{
        display: none;
        &.mobile{
            display: block;
        }
       }
       .pdf-container{
        display: block;
        &.mobile{
            display: none;
        }
       }
        .pdf-container,
        .items {
            width: 100% !important;
        }
    }
}
</style>