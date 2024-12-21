
import { defineStore } from 'pinia';


interface User {
    id: number;
    name: string;
}

interface AuthState {
    user: User | null;
    token: string | null;
}

  
interface ApiResponse<T> {
    data: T;
  }
  

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null as User | null , // Holds the logged-in user data
        token: null as string | null, // Holds the authentication token
        checkForm: 1 as number
    }),
    getters: {
        isLoggedIn: (state) => !!state.token, // Returns true if token exists
    },
    actions: {
        async login(email: string, password: string) {
            try {
                const api = useApi();
                const response = await api.post<ApiResponse<AuthState>>('/login', { email, password });
                const { user, token } = response.data.data;
                if (user && token){
                    this.setUser(user, token);
                } 
            } catch (error: any) {
                throw new Error(error.response?.data?.message || 'Login failed');
            }
        },
        setUser(user: User, token: string) {
            this.user = user;
            this.token = token;
            if (process.client) {
                localStorage.setItem('token', token);
            }
        },
        clearAuth() {
            this.user = null;
            this.token = null;
            if (process.client) {
                localStorage.removeItem('token');
            }
        },
        initializeAuth() {
            // Restore token from localStorage
            if(process.client){
                const token = localStorage.getItem('token');
                if (token) {
                    this.token = token;
                    // Optionally fetch user data with the token
                }
            }
        },
    },
});