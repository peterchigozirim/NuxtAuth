import { defineStore } from 'pinia'
import { useToast } from 'vue-toastification'
import { clearLogin } from '@/composables/useAuth'
import { authStore } from './authStore'

export const parcelStore = defineStore('parcel', () => {
  const parcels = ref([]);
  const parcel = ref(null);
  const logs = ref([])
  const page = ref(null)
  const loading = ref(false);

  async function fetchParcels()  {
    loading.value = true;
    const { data, error, status, pending, refresh} = await useAuth('/api/parcel');
    if(error.value) {
      console.log(error.value.statusCode);
      if(error.value.statusCode === 401 || error.value.statusCode === 405) {
        clearLogin();
        return notify(error.value.message, 'error')
      }
      return notify(error.value.message, 'error')
    }
    parcels.value = data.value.data;
    page.value = data.value;
    loading.value = pending.value;
  }

  async function fetchOneParcel(id) {
    loading.value = true;
    const { data, error, status, pending, refresh} = await useAuth('/api/parcel/'+id);
    const toast = useToast()
    if(error.value) {
      if(error.value.statusCode === 401 || error.value.statusCode === 405) {
        clearLogin();
      }
      return toast.error(error.value.message)
      
    }
    parcel.value = data.value.parcel;
    logs.value  = data.value.logs;
    loading.value = pending.value;
    console.log(pending.value);
  }

  async function updateLogs(form) {
    loading.value = true;
    const { data, error, pending} = await useAuth('/api/log-parcel',{
      method : 'POST',
      body : form,
    })
    const toast = useToast()
    if(error.value) {
      return toast.error(error.value.statusMessage)
    }
    fetchOneParcel(form.parcel_id)
    toast.success('Parcel updated successfully')
  }

  async function deleteParcel(id) {
    loading.value = true;
    const res = await useAuth('/api/parcel/'+id, {
      method : 'DELETE',
    })
    await fetchParcels();
    loading.value = false;
    return res;
  }

  function notify(msg, type){
    const toast = useToast()
    toast(msg,{
        type: type,	
    })
  }
  
  function resetUser (){
    const auth = authStore()
    auth.resetUser()
    return notify(error.value.message, 'error')
  }


  return {fetchParcels, deleteParcel, fetchOneParcel, updateLogs, parcels, parcel, logs, notify, fetchOneParcel, page, loading} 
}, {persist: true})
