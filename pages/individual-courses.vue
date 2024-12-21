<template>
    <div>
        <div class="bundledCourse topMargin">
                <div class="container">
                    <div class="row bundleHdng">
                        <h1 class="text-center fC-LightOrange">قائمة الدورات الفردية</h1>
                        <p class="text-center">لوريم إيبسوم هو ببساطة نص وهمي للطباعة والتنضيد</p>
                    </div>
                    <div class="row">
                        <div v-for="i in 6" class="col-md-4 text-center mb-5">
                          <CardJournal></CardJournal>
                          
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