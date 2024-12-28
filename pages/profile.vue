<template>
  <div class="container mt-5 mb-5 main-profile-container" style="min-height: 100vh;">
    <div class="row">
      <div class="col-3">
       <ProfileNav></ProfileNav>
      
      </div>    
      <div class="col-9">
       <ProfileMain></ProfileMain>
      </div>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  middleware: "auth",
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