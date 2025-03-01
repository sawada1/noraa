<template >
    <div>
      <section ref="content" @mouseup="highlightText"  class="main-body">
          
        <HomeHero></HomeHero>


            <HomeMentalHealth ></HomeMentalHealth>

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
import { useExampleStore } from '@/stores/example';
const exampleStore = useExampleStore();
let value = ref(0);
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
    setTimeout(() => {
      checkLoader.value = false;
    }, 1000);
   });

     
</script>

<style lang="scss">
    
</style>