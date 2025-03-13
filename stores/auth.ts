
import { defineStore } from 'pinia';
import { AxiosError } from 'axios';

interface User {
    id: number;
    name: string;
    verification_code: number;
    email: string;
    phone: string;
}

interface AuthState {
    user: User | null;
    token: string | null;
}


interface ApiResponse<T> {
    data: T;
    errors: any;
}


export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null as User | null, // Holds the logged-in user data
        token: null as string | null, // Holds the authentication token
        checkForm: 1 as number,
        checkOtp: 1 as number,
        pendingReg: false,
        pendingLogin: false,
        pendingOtp: false,
        errorsLogin: undefined,
        phoneLogin: undefined,
        errorsRegister: undefined,
        messageToast: '',
        checkToast: false,
        otpNum: '' as number | string,
        errorOtp: undefined,
    }),
    getters: {
        isLoggedIn: (state) => !!state.token, // Returns true if token exists
    },
    actions: {
        async login(form: any, resetForm: any , type: string) {
            const router = useRouter();
            const localePath = useLocalePath();
            this.pendingLogin = true;
            let formData = new FormData();
            if(type == 'email'){
                formData.append("email", form.email);
            } else{
                formData.append("phone", form.phone);
            }
            formData.append("password", form.password);
            try {
                const api = useApi();
                const response = await api.post<ApiResponse<AuthState>>('login', form);
                const { user, token } = response.data.data;
                response.data
                if (user && token) {
                    this.pendingLogin = false;
                    this.setUser(user, token);
                    this.errorsLogin = undefined;
                    resetForm({
                        values: {
                            password: "",
                            email: "",

                        },
                        errors: {},
                    });
                    router.push(localePath('/'));
                }
            } catch (error) {
                this.pendingLogin = false;
                     
                // const axiosError = error as AxiosError; // Cast error to AxiosError
                const axiosError = error as AxiosError; // Cast error to AxiosError
                this.errorsLogin = axiosError.response?.data?.errors;
                if (!axiosError.response?.data?.verified) {
                    this.checkToast = true;
                    this.checkOtp = 2;
                    this.checkForm = 2;
                    this.messageToast = axiosError.response?.data?.errors?.message;
                    this.otpNum = String(axiosError.response?.data?.errors?.otp);
                    this.phoneLogin = axiosError.response?.data?.errors?.phone;
                }
            }
        },
        async loginGoogle() {
            const router = useRouter();
            const localePath = useLocalePath();
            this.pendingLogin = true;
    
            try {
                const api = useApi();
                const response = await api.get('login/google');
                // const { user, token } = response.data.data;
                // response.data
                // if (user && token) {
                //     this.pendingLogin = false;
                //     this.setUser(user, token);
                //     this.errorsLogin = undefined;
                //     router.push(localePath('/'));
                // }
                if(response.status === 200){
                    if(process.client){
                        window.location.href =  response.data?.auth_url
                    }
                }
            } catch (error) {
                this.pendingLogin = false;
                     
                // const axiosError = error as AxiosError; // Cast error to AxiosError
                // const axiosError = error as AxiosError; // Cast error to AxiosError
                // this.errorsLogin = axiosError.response?.data?.errors;
                // if (!axiosError.response?.data?.errors?.verified) {
                //     this.checkToast = true;
                //     this.checkOtp = 2;
                //     this.checkForm = 2;
                //     this.messageToast = axiosError.response?.data?.errors?.message;
                //     this.otpNum = String(axiosError.response?.data?.errors?.otp);
                //     this.phoneLogin = axiosError.response?.data?.errors?.phone;
                // }
            }
        },
        async loginFacebook() {
            const router = useRouter();
            const localePath = useLocalePath();
            this.pendingLogin = true;
    
            try {
                const api = useApi();
                const response = await api.get('login/facebook');
                // const { user, token } = response.data.data;
                // response.data
                // if (user && token) {
                //     this.pendingLogin = false;
                //     this.setUser(user, token);
                //     this.errorsLogin = undefined;
                //     router.push(localePath('/'));
                // }
                if(response.status === 200){
                    if(process.client){
                        window.location.href =  response.data?.auth_url
                    }
                }
            } catch (error) {
                this.pendingLogin = false;
                     
                // // const axiosError = error as AxiosError; // Cast error to AxiosError
                // const axiosError = error as AxiosError; // Cast error to AxiosError
                // this.errorsLogin = axiosError.response?.data?.errors;
                // if (!axiosError.response?.data?.errors?.verified) {
                //     this.checkToast = true;
                //     this.checkOtp = 2;
                //     this.checkForm = 2;
                //     this.messageToast = axiosError.response?.data?.errors?.message;
                //     this.otpNum = String(axiosError.response?.data?.errors?.otp);
                //     this.phoneLogin = axiosError.response?.data?.errors?.phone;
                // }
            }
        },
        async register(form: any, resetForm: any) {
            let formData = new FormData();
            formData.append("phone", form.phone);
            formData.append("name", form.name);
            formData.append("email", form.email);
            formData.append("password", form.password);
            formData.append("password_confirmation", form.password_confirmation);
            this.pendingReg = true;
            try {
                const api = useApi();
                const response = await api.post<ApiResponse<AuthState>>('register', formData);
                if (response.data) {
                    this.pendingReg = false;
                    this.phoneLogin = form.phone;
                    this.checkOtp = 2;
                    this.otpNum = String(response.data.data?.user?.verification_code);
                    this.errorsRegister = undefined;
                    resetForm({
                        values: {
                            name: "",
                            password: "",
                            email: "",
                            password_confirmation: "",
                            phone: "",

                        },
                        errors: {},
                    });
                }
            } catch (error) {
                this.errorsRegister = error.response?.data?.errors;
                this.pendingReg = false;
            }
        },
        async checkOtpFunc() {
            const router = useRouter();
            try {
                const api = useApi();
                const response = await api.post(`verify-otp`, { otp: this.otpNum, phone: this.phoneLogin });
                if (response.data) {
                    this.checkOtp = 1;
                    this.checkForm = 1;
                    this.errorOtp = undefined;

                }
            } catch (error) {
                this.errorOtp = error.response?.data?.errors;
            }
        },
        setUser(user: User, token: string) {
            this.user = user;
            this.token = token;
            if (process.client) {
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));
            }
        },
        clearAuth() {
            this.user = null;
            this.token = null;
            if (process.client) {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
            }
            const router = useRouter();
            const localePath = useLocalePath();
            router.push(localePath('/'));
        },
        initializeAuth() {
            // Restore token from localStorage
            if (process.client) {
                const token = localStorage.getItem('token');
                const user = localStorage.getItem('user');
                if (token && user) {
                    this.token = token;
                    this.user = JSON.parse(user);
                    // Optionally fetch user data with the token
                }
            }
        },
    },
});