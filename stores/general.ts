import { defineStore } from 'pinia';

export const useGeneralStore = defineStore('general', {
    state: () => ({
      profileStat: 1,
      HomeData:{}
    }),
    getters: {
       
    },
    actions: {
      async getHome() {
        try {
            const api = useApi();
            const response = await api.get(`home_page`);
            if (response.data) {
                this.HomeData = response.data.data;
            }
        } catch (error) {
            console.log(error);

        }
    },
    },
});