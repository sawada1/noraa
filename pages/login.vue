<template>
    <div>
        <div class="container mh-full">

            <!-- login  -->
           
             <AuthLogin></AuthLogin>

            <!-- sign up  -->
          
            <AuthSign></AuthSign>


            <!-- phone number  -->

        
              <AuthPhone></AuthPhone>

            <!-- forget password  -->

          <AuthForget></AuthForget>
        </div>
    </div>
</template>
<script setup>
 import {useAuthStore} from "@/stores/auth.ts";
 let store = useAuthStore();
 useHead({
      title: ` تسحيل الدخول `,
      meta: [
        { name: 'description', content: 'test test test'},
        { name: 'keywords', content: 'keyword1, keyword2, keyword3' },
        { name: 'author', content: 'khaled sawada' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: `تسجيل الدخول  | نورا ` },
        { property: 'og:description', content: 'test test test' },
        { property: 'og:image', content: '/images/nora.png' },
      ],
    });
</script>
<style lang="scss">
.form-container {
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .inputs {
        width: 360px;
    }

    .forget {
        text-decoration: underline;
    }
}
@media(max-width:900px){
    .form-container{
        .inputs{
            width: 100%;
        }
    }
}
</style>