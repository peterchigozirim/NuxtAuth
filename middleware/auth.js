export default defineNuxtRouteMiddleware((to, from) => {
    const auth = authStore();

    if (!auth.isLoginedIn) {
        return navigateTo("/login", { replace: true });
    }
})
