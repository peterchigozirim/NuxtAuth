export default defineNuxtPlugin(async (nuxtApp) => {
    const auth = authStore();

    if (!auth.isLoginedIn) {
        await auth.handleFetchUser();
    }
})
