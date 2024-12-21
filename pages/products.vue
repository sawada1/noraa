<template>
    <div>
        <div class="generalBanner">
                <div class="container-fluid">
                    <div class="row">
                        <div class="bannerImage productTopBanner" style="background-image: url(/images/subscription-banner.png);">
                            <div>
                                <h1 class="fC-LightOrange">المنتجات</h1>
                                <p>لوريم إيبسوم هو ببساطة نص وهمي للطباعة والتنضيد</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="prdctMidban">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-11">
                            <h2>Banner</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div class="productsSec">
                <div class="container">
                    <div class="row">
                        <div v-for="i in 6" class="col-md-4 text-center mb-4">
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