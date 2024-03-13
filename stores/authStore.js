import { useToast } from 'vue-toastification'
import {useAuth} from '~/composables/useAuth'

export const authStore = defineStore('auth', () => {
  const user = ref(null)
  const loader = ref(false)
  
  const isLoginedIn = computed(() => !!user.value)
  async function handleLogin(form) {
      await useAuth("/sanctum/csrf-cookie");
		  const login = await useAuth("/api/login", {
				method: "POST",
				body: form,
		    watch: false,
			});
      return login;
  }

  async function handleRegister(form) {
    await useAuth("/sanctum/csrf-cookie");
    const register = await useAuth("/register", {
      method: "POST",
      body: form,
      watch: false,
      headers: {
        "Content-Type": "application/json"
      },
    })
    return register;
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

  const handleChangePassword = async(form)=>{
    loader.value = true
    const {data, error, status, pending } = await useAuth('/api/change-password',{
      method: "POST",
      body: form,
    })
    loader.value = pending.value
    if (error.value) {
      if(error.value.statusCode === 401 || error.value.statusCode === 405) {
        return resetUser();
      }
      return notify(error.value.message, 'error')
    }
    if (status.value === 'success') {
      return notify(data.value.message, 'success')
    }
  }

  async function handleLogout() {
     await useAuth("/api/log-out", {
      method: "POST",
    });
    const token = useCookie("XSRF-TOKEN");
    window.localStorage.removeItem('token')
    token.value = null
    user.value = null
    isLoginedIn.value = false
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
    window.localStorage.removeItem('token')
    token.value = null
    user.value = null
  }

  return { user, loader, isLoginedIn, notify, handleLogin, handleLogout, handleFetchUser, handleRegister, resetUser, handleChangePassword }
})
