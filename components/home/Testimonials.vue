<template>
  <div>
    <div class="testimonials_sec text-center">
      <div class="container-fluid">
        <div class="row">
          <h2 class="fC-green">ماذا يقول المستخدمون</h2>
          <p>لوريم إيبسوم هو ببساطة نص وهمي من صناعة الطباعة والتنضيد، وكان<br>لوريم إيبسوم هو الصناعة.</p>
        </div>
        <section id="demos">
          <div class="row">
            <div class="large-12 columns p-0">
              <swiper :effect="'fade'" :centeredSlides="true" :loop="true" :centeredSlidesBounds="true"
                 :autoplay="{
            delay: 4000,
            disableOnInteraction: false,
          }" :breakpoints="{
            '300': {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            '768': {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            '1024': {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
          }" :modules="[SwiperPagination, SwiperAutoplay]" class="testimonial-carousel owl-carousel owl-theme">
                <swiper-slide v-for="(item, index) in testArr" class="">
                  <div class="item " :class="item.background">
                    <figure><span><img src="/images/user1.png" alt="testimonials"></span>
                      <figcaption class="h2">الآنسة أنفال نبيل</figcaption>
                    </figure>
                    <p>لوريم إيبسوم هو ببساطة نص وهمي من صناعة الطباعة والتنضيد. لقد كان لوريم إيبسوم هو النص الوهمي
                      القياسي في الصناعة منذ عام 1500. لوريم إيبسوم هو ببساطة نص وهمي في صناعة الطباعة والتنضيد.</p>
                  </div>
                </swiper-slide>
              </swiper>
            
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useGeneralStore } from '@/stores/general';
const store = useGeneralStore();
let testArr = ref([
  {
    background:'bg-yellow',
  },
  {
    background:'bg-black',
  },
  {
    background:'bg-green',
  },
  {
    background:'bg-yellow',
  },
  {
    background:'bg-black',
  },
  {
    background:'bg-green',
  },
])
</script>
<style lang="">

</style>