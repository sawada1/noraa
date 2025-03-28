<template>
   
        <ProfileDetails v-if="store.profileStat == 1"></ProfileDetails>
         <ProfileProducts v-if="store.profileStat == 2"></ProfileProducts>
         <ProfileBooks v-if="store.profileStat == 3"></ProfileBooks>
         <ProfileCourses v-if="store.profileStat == 4"></ProfileCourses>
         <ProfileConsultation v-if="store.profileStat == 5"></ProfileConsultation>
         <ProfileEvents v-if="store.profileStat == 6"></ProfileEvents>
         <ProfileChat v-if="store.profileStat == 7"></ProfileChat>
         <ProfileNotes v-if="store.profileStat == 8"></ProfileNotes>

</template>
<script setup>
import {useGeneralStore} from '@/stores/general';
let store = useGeneralStore();
</script>
<style lang="">
    
</style>