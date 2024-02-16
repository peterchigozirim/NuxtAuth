<template>
  <NuxtLoadingIndicator  />
  <div class="py-6 space-y-6 text-sm">
    <div class="text-2xl font-semibold">
      Parcel Information
    </div>
    <div>
      <section class="max-w-4xl mx-auto space-y-6">
        <div class="text-base font-medium">
          <p>Add Parcel</p>
        </div>
        <div>
          <VeeForm :validation-schema="schema" @submit="submit">
            <div class="space-y-4">
              <div class="w-full">
                <label class="block text-sm font-medium mb-1">Sender Name</label>
                <VeeField type="text" name="sender_name" placeholder="Enter Sender name" class="border-gray-500 border w-full rounded-md h-9 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500 px-2 text-sm" />
                <VeeErrorMessage name="sender_name" class="text-xs text-red-500" />
              </div>
              <div class="w-full">
                <label class="block text-sm font-medium mb-1">Recepient </label>
                <VeeField type="text" name="recepient" placeholder="Enter Recepient's fullname" class="border-gray-500 border w-full rounded-md h-9 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500  px-2 text-sm" />
                <VeeErrorMessage name="recepient" class="text-xs text-red-500" />
              </div>
              
              <div class="w-full">
                <label class="block text-sm font-medium mb-1">Recepient Email </label>
                <VeeField type="email" name="recepient_email" placeholder="Enter Sender Email Address" class="border-gray-500 border w-full rounded-md h-9 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500  px-2 text-sm" />
                <VeeErrorMessage name="recepient_email" class="text-xs text-red-500" />
              </div>

              
              <div class="w-full">
                <label class="block text-sm font-medium mb-1">Recepient Address</label>
                <VeeField type="text" name="recepient_address" placeholder="Enter Recepient's Address" class="border-gray-500 border w-full rounded-md h-9 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500  px-2 text-sm" />
                <VeeErrorMessage name="recepient_address" class="text-xs text-red-500" />
              </div>
              <div class="w-full">
                <label class="block text-sm font-medium mb-1">Recepient Country</label>
                <VeeField type="text" name="recepient_country" placeholder="Enter Recepient Country" class="border-gray-500 border w-full rounded-md h-9 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500  px-2 text-sm" />
                <VeeErrorMessage name="recepient_country" class="text-xs text-red-500" />
              </div>
              <div class="w-full">
                <label class="block text-sm font-medium mb-1">Recepient Telephone</label>
                <VeeField type="text" name="recepient_phone" placeholder="eg. +12469" class="border-gray-500 border w-full rounded-md h-9 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500  px-2 text-sm" />
                <VeeErrorMessage name="recepient_phone" class="text-xs text-red-500" />
              </div>
              
              <div class="w-full">
                <label class="block text-sm font-medium mb-1">Parcel Description:</label>
                <VeeField type="text" as="textarea" name="parcel_description" placeholder="Description of Parcel" class="border-gray-500 min-h-[100px] border w-full rounded-md h-9 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500  p-2 text-sm" />
                <VeeErrorMessage name="parcel_description" class="text-xs text-red-500" />
              </div>
              
              <div class="w-full">
                <label class="block text-sm font-medium mb-1">Logitsic Type:</label>
                <VeeField as="select" name="logitsic_type" class="border-gray-500 border w-full rounded-md h-9 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500  px-2 text-sm">
                  <option value="" selected disabled>Select Logitsic</option>
                  <option value="air frieght service">Air frieght service</option>
                  <option value="road and rail frieght service">Road and rail frieght service</option>
                  <option value="ocean frieght service">Ocean frieght service</option>
                </VeeField>
                <VeeErrorMessage name="logitsic_type" class="text-xs text-red-500" />
              </div>
              
              <div class="w-full">
                <label class="block text-sm font-medium mb-1">Parcel Dimension and Weight:</label>
                <VeeField type="text" name="weight" placeholder="lenght x width x height" class="border-gray-500 border w-full rounded-md h-9 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500  px-2 text-sm" />
                <VeeErrorMessage name="weight" class="text-xs text-red-500" />
              </div>
              <div class="w-full">
                <label class="block text-sm font-medium mb-1">Current Location:</label>
                <VeeField type="text" name="location" placeholder="Current Location Of Parcel" class="border-gray-500 border w-full rounded-md h-9 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500  px-2 text-sm" />
                <VeeErrorMessage name="location" class="text-xs text-red-500" />
              </div>
              <div class="w-full">
                <label class="block text-sm font-medium mb-1">No. of Days:</label>
                <VeeField type="text" name="total_days" placeholder="Total Number Of Days For Delivery" class="border-gray-500 border w-full rounded-md h-9 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500  px-2 text-sm" />
                <VeeErrorMessage name="total_days" class="text-xs text-red-500" />
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div class="w-full">
                  <label class="block text-sm font-medium mb-1">Day Of Departuer</label>
                  <VeeField type="date" name="deputuer_day"  class="border-gray-500 border w-full rounded-md h-9 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500  px-2 text-sm" />
                  <VeeErrorMessage name="deputuer_day" class="text-xs text-red-500" />
                </div>
                <div class="w-full">
                  <label class="block text-sm font-medium mb-1">Date Of Arrival:</label>
                  <VeeField type="date" name="arrival_day"  class="border-gray-500 border w-full rounded-md h-9 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500  px-2 text-sm" />
                  <VeeErrorMessage name="arrival_day" class="text-xs text-red-500" />
                </div>
              </div>
              <div>
                <button class="border border-emerald-500 text-emerald-500 hover:bg-emerald-500 p-2 rounded hover:text-white">Add Parcel</button>
              </div>
            </div>
          </VeeForm>
        </div>
      </section>
    </div>
  </div>
  <UtilityLoader v-show="loader" />
</template>

<script setup>
import { useToast } from 'vue-toastification'

  definePageMeta({
    layout: 'authlayout',
    middleware: ['auth', 'watch-user']
  })

  useHead({
    title: 'Add Parcel',
    meta: [
      { name: 'description', content: 'Uploading Parcel details.' }
    ],
  })

  const loader = ref(false)
  const toast = useToast()

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
    const { data, error, status} = await useAuth('/api/parcel', {
      method: "POST",
      body: values,
      watch: false,
      headers: {
        "Content-Type": "application/json"
      },
    });
    if (error.value) {
      loader.value = false
      console.log(error.value);
      toast.error(error.value.data.message) 
    }else if (status.value =='success') {
      toast.success('Parcel Added Successfully')
      return  navigateTo('/dashboard/parcel')
    }
    console.log(data.value);
    console.log(status.value);
  }
</script>

<style>

</style>