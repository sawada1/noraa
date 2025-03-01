<template>
    <div class="min-vh-100">
        <div class="bundledCourse topMargin">
                <div class="container">
                    <div class="row bundleHdng">
                        <h1 class="text-center fC-LightOrange">باقات الدورات</h1>
                        <p class="text-center">لوريم إيبسوم هو ببساطة نص وهمي للطباعة والتنضيد</p>
                    </div>
                    <div v-if="store.courses.length >= 1" class="row">
                        <div v-for="i in store.courses" class="col-md-4 text-center mb-4">
                          <CardJournal :course="i"></CardJournal>
                        </div>
                     
                    </div>

                     <GeneralEmpty v-if="store.lengthCourses"></GeneralEmpty>
                    
                </div>
           </div>
           
           

        <GeneralLoader v-if="store.pendingCourses"></GeneralLoader>
    </div>
</template>
<script setup>
import {useCoursesStore} from '@/stores/courses';
let store = useCoursesStore();
store.getCourses();
useHead({
      title: ` باقات الدورات `,
      meta: [
        { name: 'description', content: 'test test test'},
        { name: 'keywords', content: 'keyword1, keyword2, keyword3' },
        { name: 'author', content: 'khaled sawada' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: `باقات الدورات | نورا` },
        { property: 'og:description', content: 'test test test' },
        { property: 'og:image', content: '/images/nora.png' },
      ],
    });
</script>
<style lang="">
    
</style>