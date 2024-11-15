// middleware/auth.ts
import { useAuthStore } from '@/stores/auth';
import { navigateTo } from '#app';
import { useRoute, useRouter } from "vue-router";
const localePath = useLocalePath();

export default defineNuxtRouteMiddleware(async (to) => {
    const authStore = useAuthStore();
    const route = useRoute();
    const router = useRouter();
    // Initialize auth state
    authStore.initializeAuth();

    // If the user is already logged in and tries to go to login or signup page, redirect to dashboard
    if (authStore.isLoggedIn && to.path === '/login') {
        return router.push(localePath("profile"));  // Redirect logged-in users to dashboard
    }

    // If the user is not logged in and tries to access a protected route, redirect to login page
    if (!authStore.isLoggedIn && to.path !== '/login') {
        return router.push(localePath("auth")); // Redirect non-authenticated users to login
    }

    //   if (!authStore.isLoggedIn) {
    //     // Redirect to login page if not authenticated
    //     return navigateTo('/login');
    //   }

    //   if (to.path === '/login' && authStore.isLoggedIn) {
    //     return navigateTo('/dashboard'); // Redirect logged-in users
    //   }
    // 
    //   // Fetch user if not already loaded
    //   if (!authStore.user) {
    //     try {
    //       await authStore.fetchUser();
    //     } catch (error) {
    //       // Clear auth and redirect to login if fetchUser fails
    //       authStore.clearAuth();
    //       return navigateTo('/login');
    //     }
    //   }
});
