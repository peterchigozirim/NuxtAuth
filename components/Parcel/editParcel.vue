<template>
  <div>
    <div class="bg-black bg-opacity-60 fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div class="max-w-md bg-white md:w-full mt-20 w-11/12  dark:bg-neutral-950 rounded-md shadow-lg overflow-hidden">
        <div class="dark:bg-emerald-800 left-0 h-10 sticky top-0 bg-white flex items-center px-2">
          {{ parcelData.tracking_number }}
        </div>
        <div class="pt-4">
          <VeeForm :validation-schema="schema" @submit="submit">
            <div class="space-y-4 h-[20rem] overflow-y-auto  scrollbar-thin scrollbar-thumb-emerald-700 scrollbar-track-neutral-900 scrollbar-track-rounded-full scrollbar-thumb-rounded-full px-4">
              <div class="w-full">
                <label class="block text-sm font-medium mb-1">Sender Name</label>
                <VeeField type="text" name="sender_name" :value="parcelData.sender_name" placeholder="Enter Sender name" class="border-gray-500 border w-full rounded-md h-9 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500 px-2 text-sm" />
                <VeeErrorMessage name="sender_name" class="text-xs text-red-500" />
              </div>
              <div class="w-full">
                <label class="block text-sm font-medium mb-1">Recepient </label>
                <VeeField type="text" name="recepient" :value="parcelData.recepient" placeholder="Enter Recepient's fullname" class="border-gray-500 border w-full rounded-md h-9 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500  px-2 text-sm" />
                <VeeErrorMessage name="recepient" class="text-xs text-red-500" />
              </div>
              
              <div class="w-full">
                <label class="block text-sm font-medium mb-1">Recepient Email </label>
                <VeeField type="email" name="recepient_email" :value="parcelData.recepient_email" placeholder="Enter Sender Email Address" class="border-gray-500 border w-full rounded-md h-9 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500  px-2 text-sm" />
                <VeeErrorMessage name="recepient_email" class="text-xs text-red-500" />
              </div>

              
              <div class="w-full">
                <label class="block text-sm font-medium mb-1">Recepient Address</label>
                <VeeField type="text" name="recepient_address" :value="parcelData.recepient_address" placeholder="Enter Recepient's Address" class="border-gray-500 border w-full rounded-md h-9 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500  px-2 text-sm" />
                <VeeErrorMessage name="recepient_address" class="text-xs text-red-500" />
              </div>
              <div class="w-full">
                <label class="block text-sm font-medium mb-1">Recepient Country</label>
                <VeeField type="text" name="recepient_country" :value="parcelData.recepient_country" placeholder="Enter Recepient Country" class="border-gray-500 border w-full rounded-md h-9 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500  px-2 text-sm" />
                <VeeErrorMessage name="recepient_country" class="text-xs text-red-500" />
              </div>
              <div class="w-full">
                <label class="block text-sm font-medium mb-1">Recepient Telephone</label>
                <VeeField type="text" name="recepient_phone" :value="parcelData.recepient_phone" placeholder="eg. +12469" class="border-gray-500 border w-full rounded-md h-9 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500  px-2 text-sm" />
                <VeeErrorMessage name="recepient_phone" class="text-xs text-red-500" />
              </div>
              
              <div class="w-full">
                <label class="block text-sm font-medium mb-1">Parcel Description:</label>
                <VeeField type="text" as="textarea" name="parcel_description" :value="parcelData.pracel_description" placeholder="Description of Parcel" class="border-gray-500 min-h-[100px] border w-full rounded-md h-9 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500  p-2 text-sm" />
                <VeeErrorMessage name="parcel_description" class="text-xs text-red-500" />
              </div>
              
              <div class="w-full">
                <label class="block text-sm font-medium mb-1">Logitsic Type:</label>
                <VeeField as="select" name="logitsic_type" :value="parcelData.logitsic_type" class="border-gray-500 border w-full rounded-md h-9 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500  px-2 text-sm">
                  <option value="" selected disabled>Select Logitsic</option>
                  <option value="air frieght service">Air frieght service</option>
                  <option value="road and rail frieght service">Road and rail frieght service</option>
                  <option value="ocean frieght service">Ocean frieght service</option>
                </VeeField>
                <VeeErrorMessage name="logitsic_type" class="text-xs text-red-500" />
              </div>
              
              <div class="w-full">
                <label class="block text-sm font-medium mb-1">Parcel Dimension and Weight:</label>
                <VeeField type="text" name="weight" :value="parcelData.weight" placeholder="lenght x width x height" class="border-gray-500 border w-full rounded-md h-9 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500  px-2 text-sm" />
                <VeeErrorMessage name="weight" class="text-xs text-red-500" />
              </div>
              <div class="w-full">
                <label class="block text-sm font-medium mb-1">Current Location:</label>
                <VeeField type="text" name="location" :value="parcelData.location" placeholder="Current Location Of Parcel" class="border-gray-500 border w-full rounded-md h-9 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500  px-2 text-sm" />
                <VeeErrorMessage name="location" class="text-xs text-red-500" />
              </div>
              <div class="w-full">
                <label class="block text-sm font-medium mb-1">No. of Days:</label>
                <VeeField type="text" name="total_days" :value="parcelData.total_days" placeholder="Total Number Of Days For Delivery" class="border-gray-500 border w-full rounded-md h-9 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500  px-2 text-sm" />
                <VeeErrorMessage name="total_days" class="text-xs text-red-500" />
              </div>
              <div class="w-full">
                <label class="block text-sm font-medium mb-1">Day Of Departuer:</label>
                <VeeField type="date" name="deputuer_day" :value="parcelData.deputuer_day" class="border-gray-500 border w-full rounded-md h-9 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500  px-2 text-sm" />
                <VeeErrorMessage name="deputuer_day" class="text-xs text-red-500" />
              </div>
              <div class="w-full">
                <label class="block text-sm font-medium mb-1">Date Of Arrival:</label>
                <VeeField type="date" name="arrival_day" :value="parcelData.arrival_day" class="border-gray-500 border w-full rounded-md h-9 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500  px-2 text-sm" />
                <VeeErrorMessage name="arrival_day" class="text-xs text-red-500" />
              </div>
            </div>
            
            <div class="p-4 gap-2 flex">
              <button class="flex border w-full justify-center text-sm border-emerald-500 text-emerald-500 hover:bg-emerald-500 p-1.5 rounded hover:text-white">Save Changes</button>
              <button @click="emit('close')" type="button" class="flex border w-full justify-center text-sm border-rose-500 text-rose-500 hover:bg-rose-500 p-1.5 rounded hover:text-white">Close</button>
            </div>
          </VeeForm>
        </div>
      </div>
    </div>
  </div>
  <UtilityLoader v-show="loader" />
</template>

<script setup>
import { useToast } from 'vue-toastification'

  const stores = parcelStore()
  const parcelData = stores.parcel
  const toast = useToast()

  const emit = defineEmits(["close"]);
  const loader = ref(false)
  const schema = {
    sender_name : 'required',
    recepient: 'required',
    recepient_email: 'required|email',
    recepient_address: 'required',
    recepient_country: 'required',
    recepient_phone: 'required',
    parcel_description: 'required',
    logitsic_type: 'required',
    weight: 'required',
    location: 'required',
    total_days: 'required',
    deputuer_day: 'required',
    arrival_day: 'required',
  }

  const submit = async (values, { resetForm }) => {
    loader.value = true
    emit("close");
    const { data, error, status} = await useAuth('/api/parcel/'+parcelData.id, {
      method: "PUT",
      body: values,
      watch: false,
      headers: {
        "Content-Type": "application/json"
      },
    });
    if (error.value) {
      loader.value = false
      emit("close");
      console.log(error.value);
      toast.error(error.value.data.message) 
    }else if (status.value =='success') {
      await stores.fetchParcels()
      toast.success('Parcel update Successfully')
      loader.value = false
    }
    console.log(data.value);
    console.log(status.value);
  }  

</script>