export default defineNuxtRouteMiddleware(async(to, from) => {
    const auth = authStore();
    const parcel = parcelStore();

    if (!auth.isLoginedIn) {
        auth.resetUser()
    }
})

