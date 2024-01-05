import { defineStore } from 'pinia'
import { useToast } from 'vue-toastification'

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
      notify(error.value.message, 'error')
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
      toast.error(error.value.message)
    }
    parcel.value = data.value.parcel;
    logs.value  = data.value.logs;
    loading.value = pending.value;
    console.log(pending.value);
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

  return {fetchParcels, deleteParcel, fetchOneParcel, parcels, parcel, logs, notify, fetchOneParcel, page, loading} 
}, {persist: true})
