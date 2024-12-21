<template>
    <div>
        <div class="generalBanner">
                <div class="container-fluid">
                    <div class="row">
                        <div class="bannerImage" style="background-image: url(/images/subscription-banner.png);">
                            <div>
                                <h1 class="fC-LightOrange">التشاور الجماعي</h1>
                                <p>لوريم إيبسوم هو ببساطة نص وهمي <br>للطباعة والتنضيد</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="howtobookGC">
              <GeneralBooked1></GeneralBooked1>
            </div>
            
            <div class="groupConsltnProdcts">
                <div class="container">
                    <div class="row groupConsultation">
                        <h2 class="text-center fC-green">لماذا تعتبر المشاورات الجماعية مهمة؟</h2>
                    </div>
                    <div class="row">
                        <div v-for="i in 3" class="col-md-4 text-center">
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