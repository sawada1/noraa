<template>
    <div class="container mb-5 mt-5">
        <div class="chat-container">
            <div class="persons">
                <div class="head d-flex flex-column gap-3">
                    <h3> جميع الاعضاء </h3>
                    <span> {{ profile ? groups.length : store.groupDetails?.group?.members_count }} عضو </span>
                </div>
                <div class="persons-main d-flex flex-column gap-3">
                    <div v-if="profile" v-for="i in groups" @click=" groupId = i, store.get_messages(groupId?.id)"
                        :class="{ 'active': i?.id == groupId?.id }" style="cursor: pointer;"
                        class="person chatProfile d-flex align-items-center gap-3">
                        <img :src="i?.image" alt="">
                        <div class="text d-flex flex-column gap-1">
                            <h6> {{ i?.title }} </h6>
                            <div class="d-flex align-items-center gap-2">
                                <div class="status mt-1 active"></div>
                                <span> {{ i?.online_vendors }} متصل </span>
                            </div>
                        </div>
                    </div>
                    <div v-else v-for="i in store.groupDetails?.clients" class="person d-flex align-items-center gap-3">
                        <img :src="i.image" alt="">
                        <div class="text d-flex flex-column gap-1">
                            <h6> {{ i.name }} </h6>
                            <div class="d-flex align-items-center gap-2">
                                <div class="status mt-1" :class="{ 'active': i?.status == 'online' }"></div>
                                <span> {{ i.status }} </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main-chat">
                <div class="head d-flex align-items-center justify-content-between">
                    <div v-if="profile" class="image d-flex align-items-center gap-3">
                        <img :src="groupId?.image" alt="">
                        <div class="text d-flex flex-column gap-1">
                            <h5> {{ groupId?.title }} </h5>
                            <p> {{ groupId?.description }} </p>
                        </div>
                    </div>
                    <div v-else class="image d-flex align-items-center gap-3">
                        <img :src="store.groupDetails?.group?.image" alt="">
                        <div class="text d-flex flex-column gap-1">
                            <h5> {{ store.groupDetails?.group?.title }} </h5>
                            <p> {{ store.groupDetails?.group?.description }} </p>
                        </div>
                    </div>
                    <nuxt-link to="/conversitions">
                        <button class="d-flex align-items-center gap-2">
                            <span class="fC-green"> رجوع </span>
                            <svg class="mt-1" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                viewBox="0 0 18 18" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M8.2725 2.97701C8.16703 2.87167 8.02406 2.8125 7.875 2.8125C7.72594 2.8125 7.58297 2.87167 7.4775 2.97701L1.8525 8.60201C1.74716 8.70747 1.68799 8.85044 1.68799 8.9995C1.68799 9.14857 1.74716 9.29154 1.8525 9.397L7.4775 15.022C7.529 15.0773 7.5911 15.1216 7.6601 15.1523C7.7291 15.1831 7.80358 15.1996 7.87911 15.2009C7.95464 15.2023 8.02966 15.1884 8.0997 15.1601C8.16974 15.1318 8.23336 15.0897 8.28678 15.0363C8.34019 14.9829 8.3823 14.9192 8.41059 14.8492C8.43888 14.7792 8.45278 14.7041 8.45144 14.6286C8.45011 14.5531 8.43358 14.4786 8.40284 14.4096C8.37209 14.3406 8.32776 14.2785 8.2725 14.227L3.6075 9.562H15.75C15.8992 9.562 16.0423 9.50274 16.1477 9.39725C16.2532 9.29176 16.3125 9.14869 16.3125 8.9995C16.3125 8.85032 16.2532 8.70725 16.1477 8.60176C16.0423 8.49627 15.8992 8.437 15.75 8.437H3.6075L8.2725 3.77201C8.37784 3.66654 8.43701 3.52357 8.43701 3.3745C8.43701 3.22544 8.37784 3.08247 8.2725 2.97701Z"
                                    fill="#43806C" stroke="#43806C" stroke-width="0.5" />
                            </svg>
                        </button>
                    </nuxt-link>
                </div>
                <div class="chat-msgs">
                    <div class="main-items d-flex flex-column gap-5" ref="chatContainer">
                        <div v-for="item, i in store.messages" class="item-container"
                            :class="{ 'active': authStore.user?.id == item.sender_id }">
                            <div class="item d-flex align-items-center gap-2">
                                <img class="mainImage" :src="item?.sender?.image" alt="">
                                <div class="d-flex flex-column gap-3">
                                    <div class="text">
                                        <p>
                                            {{ item.message }}
                                        </p>
                                        <span> {{ item.time }} </span>
                                    </div>
                                    <a v-if="item.file" :href="item.file" target="_blank">
                                        <Avatar v-if="isImageOrPdf(item.file) == 'image'" :image="item.file"
                                            class="mr-2" size="xlarge" shape="circle" />
                                        <img v-if="isImageOrPdf(item.file) == 'pdf'" src="/images/pdfIcon.svg" alt=""
                                            width="50" height="50">

                                    </a>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="foot d-flex align-items-center justify-content-between px-3">
                        <input type="text" v-model="text" @keydown.enter="sendMessage()" :readonly="pendingChat"
                            placeholder=" اكتب رسالتك هنا ... ">
                        <div class="position-relative">
                            <Avatar v-if="previewImage" :image="previewImage" class="mr-2" size="large"
                                shape="circle" />
                            <img v-if="isPdf" src="/images/pdfIcon.svg" alt="" width="30" height="30">
                            <button v-if="previewImage || isPdf" @click="deleteFile()"> x </button>
                        </div>

                        <div class="icons d-flex align-items-center gap-3">
                            <label for="file-input1" style="cursor: pointer;">
                                <input id="file-input1" @change="handleFileChange" type="file" class="d-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"
                                    fill="none">
                                    <path
                                        d="M6.32721 16.1443C6.32721 17.7683 6.89229 19.1502 8.02246 20.29C9.15246 21.43 10.528 22 12.1492 22C13.7704 22 15.1476 21.43 16.281 20.29C17.4143 19.1502 17.981 17.7683 17.981 16.1443V7.15375C17.981 5.99992 17.5803 5.01917 16.779 4.2115C15.9778 3.40383 15.0003 3 13.8465 3C12.6926 3 11.715 3.40383 10.9137 4.2115C10.1124 5.01917 9.71171 5.99992 9.71171 7.15375V15.6635C9.71171 16.3403 9.94746 16.9182 10.419 17.397C10.8906 17.8758 11.4653 18.1152 12.143 18.1152C12.8208 18.1152 13.3991 17.8775 13.878 17.402C14.3568 16.9265 14.5962 16.347 14.5962 15.6635V6.88475H13.0965V15.6635C13.0965 15.9315 13.0064 16.1572 12.8262 16.3405C12.646 16.5238 12.422 16.6155 12.154 16.6155C11.8861 16.6155 11.6621 16.5238 11.482 16.3405C11.3018 16.1572 11.2117 15.9315 11.2117 15.6635V7.14425C11.222 6.40575 11.4785 5.78042 11.9812 5.26825C12.4839 4.75608 13.1056 4.5 13.8465 4.5C14.5841 4.5 15.2076 4.75767 15.717 5.273C16.2263 5.7885 16.481 6.41542 16.481 7.15375V16.1443C16.4913 17.3533 16.0734 18.3814 15.2272 19.2288C14.381 20.0763 13.3539 20.5 12.1457 20.5C10.9547 20.5 9.94229 20.0763 9.10846 19.2288C8.27479 18.3814 7.84771 17.3533 7.82721 16.1443V6.88475H6.32721V16.1443Z"
                                        fill="#43806C" />
                                </svg>
                            </label>
                            <button :disabled="pendingChat" @click="sendMessage()">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"
                                    fill="none">
                                    <path
                                        d="M20.5222 2.90478C20.6522 2.86702 20.7899 2.86513 20.9209 2.89932C21.0518 2.9335 21.1711 3.00248 21.266 3.09895C21.3609 3.19541 21.428 3.31576 21.4601 3.44724C21.4922 3.57873 21.4881 3.71644 21.4482 3.84578L19.0162 11.7508H10.5002C10.3013 11.7508 10.1105 11.8298 9.96988 11.9704C9.82923 12.1111 9.75021 12.3019 9.75021 12.5008C9.75021 12.6997 9.82923 12.8905 9.96988 13.0311C10.1105 13.1718 10.3013 13.2508 10.5002 13.2508H19.0162L21.4482 21.1558C21.4878 21.2851 21.4917 21.4226 21.4596 21.554C21.4274 21.6853 21.3603 21.8055 21.2654 21.9018C21.1705 21.9981 21.0514 22.067 20.9205 22.1011C20.7897 22.1353 20.6521 22.1334 20.5222 22.0958C13.9072 20.1721 7.66929 17.1331 2.07721 13.1098C1.98058 13.0403 1.90187 12.9489 1.84757 12.843C1.79327 12.7371 1.76496 12.6198 1.76496 12.5008C1.76496 12.3818 1.79327 12.2645 1.84757 12.1586C1.90187 12.0527 1.98058 11.9612 2.07721 11.8918C7.6692 7.86807 13.9072 4.82873 20.5222 2.90478Z"
                                        fill="#43806C" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Toast />

        <GeneralLoader v-if="store.pendingGroup_details"></GeneralLoader>
    </div>
</template>
<script setup>
import { useChatStore } from "@/stores/chat";
import { useAuthStore } from '@/stores/auth';
let authStore = useAuthStore();
let store = useChatStore();
const toast = useToast();
let props = defineProps({
    profile: {
        default: false
    }
})
// import { io } from "socket.io-client";
// const socket = io('ws://localhost:8080');
const arr = ref([]);
let route = useRoute();
// socket.on('message', text => {
//      console.log(text);

//     arr.value.push(text);

// });

const isImageOrPdf = (url) => {
    // Define valid image extensions and PDF extension
    const imageExtensions = /\.(jpg|jpeg|png|gif|webp|svg)$/i;
    const pdfExtension = /\.pdf$/i;

    // Check if the URL ends with an image or PDF extension
    if (imageExtensions.test(url)) {
        return "image"; // It's an image
    } else if (pdfExtension.test(url)) {
        return "pdf"; // It's a PDF
    } else {
        return "invalid"; // Neither image nor PDF
    }
};
const isPdf = ref(false);
let text = ref('');
let file = ref();
let previewImage = ref();
const validateFileType = (event) => {
    let filee = event.target.files[0];

    if (!filee) return false;

    const allowedExtensions = ["application/pdf"];
    const isImage = filee.type.startsWith("image/");
    const isAllowedPdf = allowedExtensions.includes(filee.type);

    isPdf.value = isAllowedPdf; // Set isPdf to true if file is a PDF, else false

    return isImage || isAllowedPdf;
};

const deleteFile = () => {
    file.value = undefined;
    previewImage.value = undefined;
    isPdf.value = false;
}
const handleFileChange = (event) => {
    if (validateFileType(event)) {
        const mainfile = event.target.files[0];
        if (!mainfile) return;

        file.value = mainfile;

        if (isPdf.value) {
            previewImage.value = null; // No preview for PDFs
        } else {
            previewImage.value = URL.createObjectURL(mainfile);
        }
    } else {
        alert("نوع الملف غير صالح. يُسمح فقط بالصور وملفات PDF");
    }
};
const chatContainer = ref(null);

// Scroll to bottom function
const scrollToBottom = () => {
    nextTick(() => {
        if (chatContainer.value) {
            chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
        }
    });
};

watch(() => store.messages, (newMessages, oldMessages) => {
    if (!oldMessages || newMessages.length > oldMessages.length) {
        scrollToBottom();
    }
}, { deep: true });

let pendingChat = ref(false);

const sendMessage = async () => {
    let formData = new FormData();
    formData.append("chat_group_id", groupId.value ? groupId.value?.id : route.query?.id);
    formData.append("message", text.value);
    if (file.value) {
        formData.append("file", file.value);
    }
    if (text.value.trim()) {
        pendingChat.value = true;
        let result = await useApi().post(`group/${groupId.value ? groupId.value?.id : route.query?.id}/send-message`, formData);
        if (result.status == 200 || result.status == 201) {
            pendingChat.value = false;
            text.value = '';
            file.value = undefined;
            deleteFile();
            store.get_messages(groupId.value ? groupId.value?.id : route.query?.id);
        }
    } else {
        console.log('dsdsds');

        toast.add({ severity: 'error', summary: 'خطأ', detail: 'الرساله مطلوبة', life: 30000 });

    }
}

let groups = ref([]);
let groupId = ref();

const group_details = async () => {
    try {
        const api = useApi();
        const response = await api.get(`group_details/${route.query?.id}`);
        if (response.data) {
            store.groupDetails = response.data.data;
        }
    } catch (error) {
        console.log(error);

    }
};
const get_groups = async () => {
    try {
        const api = useApi();
        const response = await api.get(`my-chats`);
        if (response.data) {
            groups.value = response.data.groups;
            groupId.value = groups.value[0];
            store.get_messages(groupId.value?.id);
        }
    } catch (error) {
        console.log(error);

    }
};

const fetchData = async () => {
    if (props.profile) {
        if(groups.value.length){
            get_groups();
        } else{
            return;
        }
    } else {
        group_details();
        store.get_messages(route.query?.id);
    }

};
const intervalId = ref(null);
const startPolling = () => {

    intervalId.value = window.setInterval(fetchData, 3000);
};

const stopPolling = () => {
    if (intervalId.value) {
        clearInterval(intervalId.value);
        intervalId.value = null;
    }
};

onMounted(() => {
    if (props.profile) {
        get_groups();
    } else {
        store.group_details(route.query?.id);
        store.get_messages(route.query?.id);
    }
    if (route.path.includes('conversation') || route.path.includes('chat') || route.path.includes('profile')) {
        startPolling();
    }
});



onBeforeUnmount(() => {
    stopPolling();
});
</script>
<style lang="scss">
.chatProfile {
    position: relative;

    &.active {
        &::before {
            content: '';
            border-radius: 8px 0px 0px 8px;
            position: absolute;
            right: -15px;
            background: rgba(67, 128, 108, 0.70);
            width: 8px;
            height: 48px;
            flex-shrink: 0;
        }

    }
}
</style>