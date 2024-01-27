import { useToast } from 'vue-toastification'
import {useAuth} from '~/composables/useAuth'

export const authStore = defineStore('auth', () => {
  const user = ref(null)
  
  const isLoginedIn = computed(() => !!user.value)
  async function handleLogin(form) {
      await useAuth("/sanctum/csrf-cookie");
		  const login = await useAuth("/login", {
				method: "POST",
				body: form,
		    watch: false,
			});
      return login;
  }

  async function handleRegister(form) {
    await useFetch("http://localhost:8000/sanctum/csrf-cookie", {
				credentials: "include",
			});
			await useFetch("http://localhost:8000/register", {
				method: "POST",
				body: form.value,
				watch: false,
				headers: {
					"Content-Type": "application/json"
				},
			});
  }

  async function handleFetchUser() {
    const {data, error} = await useAuth("/api/user");
    if(error.value) {
      if(error.value.statusCode === 401 || error.value.statusCode === 405) {
        return resetUser();
      }
      return notify(error.value.message, 'error')
    }
    user.value = data.value
  }

  async function handleLogout() {
     await useAuth("/logout", {
      method: "POST",
    });
    const token = useCookie("XSRF-TOKEN");
    const session = useCookie("laravel_session");
    session.value = null
    token.value = null
    const auth = useCookie("auth");
    // user.value = null
    notify("Logout successful", 'info')
    return navigateTo("/login")
  }

  function notify(msg, type){
    const toast = useToast()
    toast(msg,{
        type: type,	
    })
  }

  const resetUser = async () => {
    
    const token =  useCookie("XSRF-TOKEN");
    const session =  useCookie("laravel_session");
    session.value = null
    token.value = null
    user.value = null
    return navigateTo("/login")
  }

  return { user, isLoginedIn, notify, handleLogin, handleLogout, handleFetchUser, handleRegister, resetUser }
}, {persist: true})
