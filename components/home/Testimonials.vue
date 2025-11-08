<template>
  <div>
    <div class="testimonials_sec text-center">
      <div class="container-fluid">
        <div class="row">
          <h2 class="fC-green"> {{ store.HomeData?.section6?.title }} </h2>
          <p> {{ store.HomeData?.section6?.description }} </p>
        </div>
        <section id="demos">
          <div class="row">
            <div class="large-12 columns p-0">
              <swiper :effect="'fade'" :centeredSlides="true" :loop="true" :centeredSlidesBounds="true" :autoplay="{
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
                <swiper-slide v-for="(item, index) in store.HomeData?.section6?.details" class="">
                  <div class="item " :class="getColorForItem(index + 1)">
                    <figure><span><img :src="item?.image" alt="testimonials"></span>
                      <figcaption class="h2"> {{ item?.title }} </figcaption>
                    </figure>
                    <p> {{ item?.description }} </p>
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
<script setup>
import { useGeneralStore } from '@/stores/general';
const store = useGeneralStore();
let testArr = ref([
  'bg-yellow',
  'bg-black',
  'bg-green',
]);
const colorMap = ref({});
// console.log(Math.floor(Math.random() * testArr.value.length));

function getColorForItem(itemId) {
  if (!colorMap.value[itemId]) {
    const randomIndex = Math.floor(Math.random() * testArr.value.length);
    colorMap.value[itemId] = testArr.value[randomIndex];
  }
  return colorMap.value[itemId];
}
</script>
<style lang="">

</style>