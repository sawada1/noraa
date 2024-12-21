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
    </div>
</template>
<script setup lang="ts">
import { useExampleStore } from '@/stores/example';
const exampleStore = useExampleStore();
let value = ref(0);

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


   

     
</script>

<style lang="">
    
</style>