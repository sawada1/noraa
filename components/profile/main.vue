<template>
    <div>
        <ProfileDetails v-if="store.profileStat == 1"></ProfileDetails>
         <ProfileProducts v-if="store.profileStat == 2"></ProfileProducts>
         <ProfileBooks v-if="store.profileStat == 3"></ProfileBooks>
         <ProfileCourses v-if="store.profileStat == 4"></ProfileCourses>
         <ProfileChat v-if="store.profileStat == 6"></ProfileChat>
    </div>
</template>
<script setup>
import {useGeneralStore} from '@/stores/general';
let store = useGeneralStore();
</script>
<style lang="">
    
</style>