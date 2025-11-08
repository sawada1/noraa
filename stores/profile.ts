import { defineStore } from 'pinia';
import { AxiosError } from 'axios';
// import { Modal } from "bootstrap";

interface ApiResponse<T> {
    data: T;
}

interface User {
    id: number;
    name: string;
    verification_code: number;
    email: string;
    phone: string;
}
export const useProfileStore = defineStore('profile', {
    state: () => ({
        profileDetails: null as User | null,
        errorsProfile: undefined,
        successEdit:false,
        pendingEdit: false
        
    }),
    getters: {

    },
    actions: {
     
        async editProfile(form:any) {
            this.pendingEdit = true;
            this.successEdit = false;
            const api = useApi();
            const response = await api.post(`update-profile`,form);
            try {
                if(response.data){
                    this.pendingEdit = false;
                    this.errorsProfile = undefined;
                    this.successEdit = true;
                    this.getProfile();
                    
                }
            } catch (error) {
                this.pendingEdit = false;
                this.errorsProfile = error.response?.data?.errors;
            }
        },
        async getProfile() {
            try {
       
                const api = useApi();
                const response = await api.get(`profile`);
                if(response.status === 200){
                    this.profileDetails = response.data.data;
                    
                }
            } catch (error) {
              
            }
        },
    
    }
});