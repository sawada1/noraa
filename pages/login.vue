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