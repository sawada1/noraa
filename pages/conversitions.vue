<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="bannerImage" style="background-image: url(/images/chat-background.png);">
                    <div>
                        <h1 class="text-light"> المحادثات الجماعية </h1>
                    </div>
                </div>
            </div>
        </div> 

        <div class="container mt-5 mb-5">
            <div class="multipleQuizSec">
                <div class="">
                    <div class="row justify-content-center">
                        <div v-for="group in store.groups" class="col-md-11">
                            <div class="card quizCard bg-offwhite3">
                                <img :src="group.image" alt="" class="" >
            
                                <div class="card-body">
                                    <h2 class="fs-3 fC-green">  {{ group.title }} </h2>
                                    <p > {{ group.description }}  </p>
                                </div>
                                    <button @click="joinChat(group.id)" class="btn btn-success bg-green py-3 px-5"> دخول الي المجموعة </button>
                         
                            </div>
                        </div>
                    
                    </div>
                <GeneralEmpty v-if="store.lengthChat"></GeneralEmpty>

                </div>
            </div>
        </div>

        <GeneralLoader v-if="store.pendingGroup"></GeneralLoader>

    </div>
</template>
<script  setup>
import {useChatStore} from "@/stores/chat";
import { useAuthStore } from '@/stores/auth';
let authStore = useAuthStore();
let store = useChatStore();
const router = useRouter();
const joinChat = async (id) => {
    if(authStore.isLoggedIn){
        store.joinGroup(id);
    } else{
      router.push('/login')
    }
}
onMounted(() => {
   store.getGroups(); 
});
useHead({
      title: ` المحادثات `,
      meta: [
        { name: 'description', content: 'test test test'},
        { name: 'keywords', content: 'keyword1, keyword2, keyword3' },
        { name: 'author', content: 'khaled sawada' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: `المحادثات  | نورا ` },
        { property: 'og:description', content: 'test test test' },
        { property: 'og:image', content: '/images/nora.png' },
      ],
    });
</script>
<style lang="">
    
</style>