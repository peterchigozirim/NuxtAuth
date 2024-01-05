export default defineNuxtRouteMiddleware(async(to, from) => {
    const auth = authStore();
    const parcel = parcelStore();

    if (!auth.isLoginedIn) {
        return await navigateTo("/login", { replace: true });
    }
    // else if(to === '/dashboard/parcel'){
    //     await parcel.fetchParcels();
    // }
})
