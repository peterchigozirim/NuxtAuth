export default defineNuxtRouteMiddleware((to, from) => {
    const auth = authStore();

    if (auth.isLoginedIn) {
        return navigateTo("/dashboard", { replace: true });
    }
})
