import { defineStore } from 'pinia'
import { authStore } from './authStore'
import { useToast } from 'vue-toastification'


export const quoteStore = defineStore('quote', ()=>{
  const quotes = ref([]);
  const page = ref({})
  const loading = ref(false)

  const handleFetch = async()=>{
    loading.value = true;
    const { data, error, status, pending, refresh} = await useAuth('/api/quote');
    if(error.value) {
      let auth = authStore()
      console.log(error.value.statusCode);
      if(error.value.statusCode === 401 || error.value.statusCode === 405) {
        auth.resetUser();
        return notify(error.value.message, 'error')
      }
      return notify(error.value.message, 'error')
    }
    quotes.value = data.value.data;
    page.value = data.value;
    loading.value = pending.value;
  }

  const handleDelete = async(id)=>{
    loading.value = true;
    const { data, error,pending} = await useAuth('/api/quote/'+id, {
      method : 'DELETE'
    });
    const toast = useToast()
    if(error.value) {
      if(error.value.statusCode === 401 || error.value.statusCode === 405) {
        clearLogin();
      }
      return toast.error(error.value.message)

    }
    loading.value = pending.value;
    toast.success('quote deleted successfully')
    handleFetch();
  }

  return {
    quotes,
    loading,
    page,
    handleFetch,
    handleDelete
  }
})
