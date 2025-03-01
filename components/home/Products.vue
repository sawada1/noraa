<template>
    <div>
        <div class="homeProductsSec">
                <div class="container">
                    <div class="row justify-content-center align-items-center text-center">
                        <div class="col-md-11">
                            <div class="row">
                                <div class="col-md-4 col-12" data-aos="fade-up" data-aos-duration="500">
                                    <div class="card bg-offwhite">
                                        <span><img src="/images/product1.png" alt="product1"/></span>
                                        <h2>كتاب الزواج من A-Z</h2>
                                        <p>لوريم إيبسوم هو ببساطة نص وهمي من صناعة الطباعة والتنضيد. لقد كان لوريم إيبسوم هو النص الوهمي القياسي في هذه الصناعة منذ عام 1500.</p>    
                                    </div>
                                    <button class="btn btn-primary btn-pr bg-green">اشتري الآن</button>
                                </div>
                                <div class="col-md-4 col-12" data-aos="fade-up" data-aos-duration="700">
                                    <div class="card bg-offwhite">
                                        <span><img src="/images/product2.png" alt="product1"/></span>
                                        <h2>كتاب الزواج من A-Z</h2>
                                        <p>لوريم إيبسوم هو ببساطة نص وهمي من صناعة الطباعة والتنضيد. لقد كان لوريم إيبسوم هو النص الوهمي القياسي في هذه الصناعة منذ عام 1500.</p>    
                                    </div>
                                    <button class="btn btn-primary btn-pr bg-green">اشتري الآن</button>
                                </div>
                                <div class="col-md-4 col-12" data-aos="fade-up" data-aos-duration="900">
                                    <div class="card bg-offwhite">
                                        <span><img src="/images/product3.png" alt="product1"/></span>
                                        <h2>كتاب الزواج من A-Z</h2>
                                        <p>لوريم إيبسوم هو ببساطة نص وهمي من صناعة الطباعة والتنضيد. لقد كان لوريم إيبسوم هو النص الوهمي القياسي في هذه الصناعة منذ عام 1500.</p>    
                                    </div>
                                    <button class="btn btn-primary btn-pr bg-green">اشتري الآن</button>
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
<style lang="scss">
@media(max-width:770px){
    .homeProductsSec{
        .card{
            img{
                height: 300px;
                object-fit: contain;
            }
        }
        button{
            margin-top: 10px !important;
            margin-bottom: 30px;
        }
    }

    .homeAboutSecImg {
        img{
            height: 450px;
            object-fit: contain;
            margin-bottom: 20px;
        }
    }

}
</style>