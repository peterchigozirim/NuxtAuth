export default defineNuxtRouteMiddleware(async(to, from) => {
    const auth = authStore();

    if (auth.isLoginedIn) {
        return await navigateTo("/dashboard", { replace: true });
    }
})
