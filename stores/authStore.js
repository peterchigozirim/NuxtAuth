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
    user.value = data.value
    if(!error.value === null) {
      notify(error.value.message, 'error')
      return navigateTo("/login", { replace: true })
    }
  }

  async function handleLogout() {
     await useAuth("/logout", {
      method: "POST",
    });
    user.value = null
    notify("Logout successful", 'info')
    return navigateTo("/login")
  }

  function notify(msg, type){
    const toast = useToast()
    toast(msg,{
        type: type,	
    })
  }

  return { user, isLoginedIn, notify, handleLogin, handleLogout, handleFetchUser, handleRegister }
}, {persist: true})
