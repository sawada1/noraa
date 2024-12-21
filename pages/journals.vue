<template>
    <div>
        <div class="generalBanner journalsBanner">
                <div class="container-fluid">
                    <div class="row">
                        <div class="bannerImage" style="background-image: url(/images/journals_banner.png);">
                            <div>
                                <h2 class="fC-LightOrange">لوريم إيبسوم هو ببساطة نص وهمي للنص<br>صناعة الطباعة والتنضيد.</h2>
                                <p>عندما أخذت طابعة غير معروفة لوح الكتابة وخلطته لعمل نموذج كتاب. لقد نجا ليس فقط خمسة ...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="journalsSecSearch">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-5 journalsSecRht">
                            <h2 class="fC-green">المجلات</h2>
                        </div>
                        <div class="col-md-7 journalsSecLft">
                            <select class="writtenBy">
                                <option>كتب بواسطة</option>
                                <option>Author 1</option>
                                <option>Author 2</option>
                                <option>Author 3</option>
                            </select>
                            <select class="shortBydate">
                                <option>رتب حسب التاريخ</option>
                                <option>April - May</option>
                                <option>May - June</option>
                                <option>June - July</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="journalsSec">
                <div class="container">
                    <div class="row">
                        <div v-for="i in 6" class="col-md-4 text-center">
                         <CardJournal2></CardJournal2>
                        </div>
                      
                    </div>
                  
                </div>
            </div>

            <div class="recentjournalsSec">
                <div class="container">
                    <div class="row">
                        <h2 class="fC-green">المجلات الحديثة</h2>
                        <div v-for="i in 4" class="col-md-3 text-center">
                         <CardJournal2></CardJournal2>
                        </div>
                   
                    </div>
                </div>
            </div>

            <div class="subscribeUpdate text-center">
                <GeneralSubscribe1></GeneralSubscribe1>
            </div>
    </div>
</template>
<script>

</script>
<style lang="">
    
</style>