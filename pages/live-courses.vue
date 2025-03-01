<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="bannerImage" style="background-image: url(/images/consultation-banner.png);">
                    <div>
                        <h1 class="text-light"> الدورات الحية </h1>
                        <p> لوريم إيبسوم هو نص عربي غير معنى، يُستخدم في مجالات الطباعة </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="bundledCourse topMargin">
            <div class="container">
                <div class="checkBtnsLive">
                   <button @click="checkBtn = 1" :class="{'active': checkBtn == 1}"> ندوات الحالية </button>
                   <button @click="checkBtn = 2" :class="{'active': checkBtn == 2}"> ندوات القادمة </button>
                </div>
                <div class="row">
                    <div v-for="i in 6" class="col-md-4  mb-4">
                        <CardLive></CardLive>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>
<script setup>
let checkBtn = ref(1);
useHead({
      title: ` الدورات الحيه `,
      meta: [
        { name: 'description', content: 'test test test'},
        { name: 'keywords', content: 'keyword1, keyword2, keyword3' },
        { name: 'author', content: 'khaled sawada' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: `الدورات الحيه | نورا` },
        { property: 'og:description', content: 'test test test' },
        { property: 'og:image', content: '/images/nora.png' },
      ],
    });
</script>
<style lang="scss">

</style>