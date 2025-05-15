<template >
    <div>
      <!-- ref="content" @mouseup="highlightText" -->
      <section   class="main-body">
          
        <HomeHero></HomeHero>


            <HomeMentalHealth class="" style="margin-top: 100px;"></HomeMentalHealth>

          <HomeHappy></HomeHappy>

            <div class="benefitSec">
                <HomeBenifits></HomeBenifits>
               <HomeTestimonials></HomeTestimonials>
            </div>

           <HomeProducts></HomeProducts>

         <HomeAbout></HomeAbout>
        </section> 
        <GeneralLoader v-if="checkLoader"></GeneralLoader>
    </div>


</template>
<script setup lang="ts">
import { useGeneralStore } from '@/stores/general';
import { useAuthStore } from '@/stores/auth';
const store = useGeneralStore();
const authStore = useAuthStore();
let checkLoader = ref(true);
const content = ref<HTMLElement | null>(null);

const highlightText = () => {
  const selection = window.getSelection();
  if (selection && selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    const span = document.createElement('span');
    span.style.backgroundColor = 'yellow'; // Default highlight color
    span.dataset.noteId = 'some-id'; // You can use this to map to a note
    range.surroundContents(span);
    selection.removeAllRanges();
  }
};

const router = useRouter();

useHead({
      title: ` الرئيسية `,
      meta: [
        { name: 'description', content: 'test test test'},
        { name: 'keywords', content: 'keyword1, keyword2, keyword3' },
        { name: 'author', content: 'khaled sawada' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: `الرئيسية | نورا` },
        { property: 'og:description', content: 'test test test' },
        { property: 'og:image', content: '/images/nora.png' },
      ],
    });


   onMounted(() => {
    store.getHome();

    const urlParams = new URLSearchParams(window.location.search);
    const encodedData = urlParams.get("data");

    if (encodedData) {
      try {
        const decodedData = JSON.parse(atob(encodedData)); // Decode Base64
        // localStorage.setItem("token", decodedData.token);
        // localStorage.setItem("user", JSON.stringify(decodedData.user));
         authStore.setUser(decodedData.user , decodedData.token)

        // Redirect to home page
        router.push("/");
      } catch (error) {
        console.error("Error decoding authentication data:", error);
        router.push("/login");
      }
    } else {
      // router.push("/login");
    }
    setTimeout(() => {
      checkLoader.value = false;
    }, 1000);
   });

     
</script>

<style lang="scss">
    
</style>