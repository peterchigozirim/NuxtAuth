export default defineNuxtRouteMiddleware(async(to, from) => {
    const auth = authStore();
    

    // if (!auth.isLoginedIn) {
    //     auth.resetUser()
    // }
    if (!auth.isLoginedIn) {
        
        if (to.path === '/login') {
            return true
        }
        else if (to.path === '/forget-password') {
            return true
        }
        else{
            return navigateTo('/login', {replace: true})
        }


    }
    
    // if (to.path === '/_dashboard' && !auth.isLoginedIn) {
    //     return navigateTo('/login', {replace: true})
    // }
})

