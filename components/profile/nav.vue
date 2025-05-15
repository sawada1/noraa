<template>
     <div class="nav-profile custom-shadow-container">
          <div class="items d-flex flex-column gap-4 align-items-cente">
            <a href="#mainProfile" class="item d-flex align-items-center gap-2" @click="store.profileStat = 1" :class="{'active': store.profileStat == 1}">
              <div class="icon">
                <SvgProfile1></SvgProfile1>
              </div>
              <span>  الملف الشخصي </span>
            </a>
            <a href="#mainProfile" class="item d-flex align-items-center gap-2" @click="store.profileStat = 2" :class="{'active': store.profileStat == 2}">
              <div class="icon">
                <SvgProfile2></SvgProfile2>
              </div>
              <span>  المشتريات</span>
            </a>
            <a href="#mainProfile" class="item d-flex align-items-center gap-2" @click="store.profileStat = 3" :class="{'active': store.profileStat == 3}">
              <div class="icon">
                <SvgProfile3></SvgProfile3>
              </div>
              <span>  كتبي </span>
            </a>
            <a href="#mainProfile" class="item d-flex align-items-center gap-2" @click="store.profileStat = 4" :class="{'active': store.profileStat == 4}">
              <div class="icon">
                <SvgProfile4></SvgProfile4>
              </div>
              <span>  دوراتي </span>
            </a>
            <a href="#mainProfile" class="item d-flex align-items-center gap-2" @click="store.profileStat = 5" :class="{'active': store.profileStat == 5}">
              <div class="icon">
                <SvgProfile9></SvgProfile9>
              </div>
              <span> استشاراتي </span>
            </a>
            <a href="#mainProfile" class="item d-flex align-items-center gap-2" @click="store.profileStat = 6" :class="{'active': store.profileStat == 6}">
              <div class="icon">
                <SvgProfile5></SvgProfile5>
              </div>
              <span> الأحداث القادمة </span>
            </a>
            <a href="#mainProfile" class="item d-flex align-items-center gap-2" @click="store.profileStat = 7" :class="{'active': store.profileStat == 7}">
              <div class="icon">
                <SvgProfile6></SvgProfile6>
              </div>
              <span>  الردشة </span>
            </a>
            <!-- <a href="#mainProfile" class="item d-flex align-items-center gap-2" @click="store.profileStat = 8" :class="{'active': store.profileStat == 8}">
              <div class="icon">
                <SvgProfile7></SvgProfile7>
              </div>
              <span>  الملاحظات </span>
            </a> -->
            <div class="item d-flex align-items-center gap-2" @click="store2.clearAuth()" :class="{'active': store.profileStat == 9}">
              <div class="icon">
                <SvgProfile8></SvgProfile8>
              </div>
              <span> تسجيل خروج </span>
            </div>
          </div>
        </div>
</template>
<script setup>
import {useGeneralStore} from '@/stores/general';
import { useAuthStore } from "@/stores/auth.ts";
let store = useGeneralStore();
let store2 = useAuthStore();
</script>
<style lang="">
    
</style>