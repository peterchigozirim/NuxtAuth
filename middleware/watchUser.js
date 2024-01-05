export default defineNuxtRouteMiddleware((to, from) => {
    // const user = useState('authStore').user
    const user = authStore()
    
  
  watch(user.user, (newVal) => {
    if (!newVal) {
      navigateTo('/login')
    }
  })
})
