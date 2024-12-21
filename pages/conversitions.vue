<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="bannerImage" style="background-image: url(/images/consultation-banner.png);">
                    <div>
                        <h1 class="text-light"> المحادثات الجماعية </h1>
                        <p>  لوريم إيبسوم هو نص عربي غير معنى، يُستخدم في مجالات الطباعة  </p>
                    </div>
                </div>
            </div>
        </div> 

        <div class="container mt-5 mb-5">
            <div class="multipleQuizSec">
                <div class="container">
                    <div class="row justify-content-center">
                        <div v-for="i in 6" class="col-md-11">
                            <div class="card quizCard bg-offwhite3">
                                <div class="card-header" style="background-image:url(/images/journal3.png);"></div>
                                <div class="card-body">
                                    <h2 class="fs-3 fC-green"> هنا يكتب عناون المجموعة </h2>
                                    <p>لوريم إيبسوم هو ببساطة نص وهمي من صناعة الطباعة والتنضيد.</p>
                                </div>
                                <nuxt-link to="/conversation">
                                    <button class="btn btn-success bg-green py-3 px-5"> دخول الي المجموعة </button>
                                </nuxt-link>
                         
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style lang="">
    
</style>