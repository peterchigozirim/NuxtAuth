import { defineStore } from 'pinia'
import { useToast } from 'vue-toastification'

export const appStore = defineStore('app', ()=>{
  const apps = ref(null);
  const loader = ref(false);
  const toast = useToast();

  const isFetched = computed(() => !!apps.value)

  const handleFetch = async ()=>{
    loader.value = true;
    const {data, error, status, pending } = await useAuth('/api/app-settings')
    loader.value = pending.value;
    if (error.value) {
      toast.error(error.value.message) 
    }else if (status.value =='success') {
      apps.value = data.value;
      return
    }
  }

  const handleSubmit = async (form)=>{
    loader.value = true;
    const {data, error, status, pending } = await useAuth('/api/app-settings', {
      method : 'POST',
      body : form
    })
    loader.value = pending.value;
    if (error.value) {
      toast.error(error.value.message) 
    }else if (status.value =='success') {
      apps.value = data.value;
      return toast.success('App settings updated successfully')
    }
  }

  return {
    apps,
    loader,
    isFetched,
    handleFetch,
    handleSubmit
  }
}, {persist: true})
