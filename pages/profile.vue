<template>
  <div style="min-height: 100vh;">
    <Toast />
    <div v-if="showPage" class="container mt-5 mb-5 main-profile-container" >
      <div class="row position-relative">
        <div class="col-xl-3 col-lg-3 col-12  position-relative">
         <ProfileNav class="" style="position: sticky; top: 20px;"></ProfileNav>
        
        </div>    
        <div class="col-xl-9 col-lg-9 col-12 mt-5 mt-xl-0 mt-lg-0">
         <ProfileMain id="mainProfile"></ProfileMain>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  middleware: "auth",
});
import { useToast } from "primevue/usetoast";
const toast = useToast();

const show = () => {
    toast.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000 });
};

const showPage = ref(false);

onMounted(() => {
  setTimeout(() => {
    showPage.value = true;
  }, 500);
});

</script>
<style lang="scss">
.main-profile-container {
  .nav-profile {

    .items {
      .item {
        cursor: pointer;
        &:not(:last-child){
          padding-bottom: 15px;
          border-bottom: 1px solid #DEE2E6;
        }
        .icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #E9ECEF;
        }
        span{
          color: #6C757D;
          font-size: 18px;
          font-weight: 400;
        }
        &.active{
          svg{
            fill: #43806C !important;
            path{
              fill: #43806C !important;
            }
          }
          span{
            font-weight: 700;
            color: #212529;
          }
        }
      }
    }
  }
}
</style>