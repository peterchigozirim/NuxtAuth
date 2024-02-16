<template>
  <NuxtLoadingIndicator  />
  <UtilityLoader v-if="stores.loading" />
  <div v-else class="space-y-6 pb-20">
    <div class="text-2xl font-semibold">
      Parcel Information
    </div>
    <div class="space-y-4">
      <div class="text-center text-xl text-emerald-500 font-semibold">
        <p>DEV & Cargo Service</p>
      </div>
      <div>
        Tracking number: {{ $route.params.id }}
      </div>
      <div class="grid md:grid-cols-2 gap-6 text-sm">
        <div>
          <div class="flex items-center h-10 bg-emerald-700 dark:bg-emerald-800 text-white font-medium px-2">
            SHIPMENT DATE
          </div>
          <div class="divide-y bg-emerald-100 dark:bg-transparent">
            <div class="flex items-center justify-between h-10 px-2">
              <div>
                <p>Estimated Time of Departuer (ETD)</p>
              </div>
              <div>
                <p>{{ stores.parcel.deputuer_day }}</p>
              </div>
            </div>
            <div class="flex items-center justify-between h-10 px-2">
              <div>
                <p>Estimated Time of Arrival (ETA)</p>
              </div>
              <div>
                <p>{{ stores.parcel.arrival_day }}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="flex items-center h-10 bg-emerald-700 dark:bg-emerald-800 text-white font-medium px-2">
            RECIEVER'S DETAILS
          </div>
          <div class="divide-y bg-emerald-100 dark:bg-transparent">
            <div class="flex items-center justify-between h-10 px-2">
              <div>
                <p>from</p>
              </div>
              <div>
                <p>{{ stores.parcel.location }}</p>
              </div>
            </div>
            <div class="flex items-center justify-between h-10 px-2">
              <div>
                <p>to</p>
              </div>
              <div>
                <p>{{ stores.parcel.recepient_country }}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="flex items-center h-10 bg-emerald-700 dark:bg-emerald-800 text-white font-medium px-2">
            SENDER'S DETAILS
          </div>
          <div class="divide-y bg-emerald-100 dark:bg-transparent">
            <div class="flex items-center justify-between h-10 px-2">
              <div>
                <p>name</p>
              </div>
              <div>
                <p>{{ stores.parcel.sender_name }}</p>
              </div>
            </div>
            <div class="flex items-center justify-between h-10 px-2">
              <div>
                <p>orgin</p>
              </div>
              <div>
                <p>{{ stores.parcel.logitsic_type }}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="flex items-center h-10 bg-emerald-700 dark:bg-emerald-800 text-white font-medium px-2">
            RECIEVER'S DETAILS
          </div>
          <div class="divide-y bg-emerald-100 dark:bg-transparent">
            <div class="flex items-center justify-between h-10 px-2">
              <div>
                <p>name</p>
              </div>
              <div>
                <p>{{ stores.parcel.recepient }}</p>
              </div>
            </div>
            <div class="flex items-center justify-between h-10 px-2">
              <div>
                <p>Email</p>
              </div>
              <div>
                <p>{{ stores.parcel.recepient_email }}</p>
              </div>
            </div>
            <div class="flex items-center justify-between h-10 px-2">
              <div>
                <p>Phone</p>
              </div>
              <div>
                <p>{{ stores.parcel.recepient_phone }}</p>
              </div>
            </div>
            <div class="flex items-center justify-between h-10 px-2">
              <div>
                <p>Address</p>
              </div>
              <div>
                <p>{{ stores.parcel.recepient_address }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="md:col-span-2">
          <div class="flex items-center h-10 bg-emerald-700 dark:bg-emerald-800 text-white font-medium px-2">
            SHIPPING DETAILS
          </div>
          <div class="divide-y bg-emerald-100 dark:bg-transparent">
            <div class="grid md:grid-cols-2 divide-y md:divide-y-0 md:gap-10">
              <div class="flex items-center justify-between h-10 px-2">
                <div>
                  <p>Item Description</p>
                </div>
                <div>
                  <p>{{ stores.parcel.parcel_description }}</p>
                </div>
              </div>
              <div class="flex items-center justify-between h-10 px-2">
                <div>
                  <p>weight and Dimension</p>
                </div>
                <div>
                  <p>{{ stores.parcel.weight }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="md:col-span-2 w-full overflow-x-auto">
          <div class="flex items-center justify-between h-10 bg-emerald-700 dark:bg-emerald-800 text-white font-medium px-2">
            <div>
              TRAVEL TIMELINE 
            </div>
            <div>
              <button @click="showModal = true" class="border-white border p-1 hover:bg-orange-600 capitalize rounded">
                update timeline
              </button>
            </div>
          </div>
          <div class="divide-y bg-emerald-100 dark:bg-transparent overflow-y-hidden">
            <div class="flex gap-3 justify-between items-center md:divide-y-0 h-10 font-semibold">
              <div class="p-2  py-0">
                <div class="">
                  <p>Date</p>
                </div>
              </div>
              <div class="p-2 py-0 text-center">
                <div class="">
                  <p>Activity</p>
                </div>
              </div>
              <div class="p-2 py-0">
                <div class="">
                  <p>Location</p>
                </div>
              </div>
            </div>
            <div v-for="(log, i) in stores.logs" :key="i" class="flex gap-3 justify-between items-center md:divide-y-0 md:gap-10 h-12">
              <div class="p-2 py-0 ">
                <div class="whitespace-nowrap">
                  <p>{{ formattedDate(log.created_at) }}</p>
                </div>
              </div>
              <div class="p-2 py-0 text-center">
                <div class="whitespace-nowrap">
                  <p>{{ log.activity }}</p>
                </div>
              </div>
              <div class="p-2 py-0">
                <div class="whitespace-nowrap">
                  <p>{{ log.location }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
    <div v-if="showModal" class="bg-black bg-opacity-60 fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div class="max-w-md bg-white md:w-full mt-20 w-11/12  dark:bg-neutral-950 rounded-md shadow-lg overflow-hidden">
        <div class="dark:bg-emerald-800 left-0 h-10 sticky top-0 bg-white flex items-center px-2">
          {{ route.params.id }}
        </div>
        <div class="pt-4">
          <VeeForm :validation-schema="schema" @submit="submit">
            <div class="space-y-4 mb-4 overflow-y-auto  scrollbar-thin scrollbar-thumb-emerald-700 scrollbar-track-neutral-900 scrollbar-track-rounded-full scrollbar-thumb-rounded-full px-4">
                            
              <div class="w-full">
                <label class="block text-sm font-medium mb-1">Parcel Activity:</label>
                <VeeField type="text" as="textarea" name="activity" placeholder="Description of Parcel" class="border-gray-500 min-h-[100px] border w-full rounded-md h-9 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500  p-2 text-sm" />
                <VeeErrorMessage name="activity" class="text-xs text-red-500" />
              </div>
              <div class="w-full">
                <label class="block text-sm font-medium mb-1">Current Location:</label>
                <VeeField type="text" name="location" placeholder="Current Location Of Parcel" class="border-gray-500 border w-full rounded-md h-9 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500  px-2 text-sm" />
                <VeeErrorMessage name="location" class="text-xs text-red-500" />
              </div>
                <VeeField type="text" name="parcel_id" :value="route.params.id" hidden  placeholder="Current Location Of Parcel" class="border-gray-500 border w-full rounded-md h-9 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500  px-2 text-sm" />
            </div>
            
            <div class="p-4 gap-2 flex">
              <button class="flex border w-full justify-center text-sm border-emerald-500 text-emerald-500 hover:bg-emerald-500 p-1.5 rounded hover:text-white">Save Changes</button>
              <button @click="showModal = false" type="button" class="flex border w-full justify-center text-sm border-rose-500 text-rose-500 hover:bg-rose-500 p-1.5 rounded hover:text-white">Close</button>
            </div>
          </VeeForm>
        </div>
      </div>
    </div>
  </div>
  <UtilityLoader v-show="stores.loading" />
  </div>
</template>

<script setup>
  import dayjs from 'dayjs'
  definePageMeta({
    layout: 'authlayout',
    middleware: ['auth', ]
  })
  const showModal = ref(false)
  const stores = parcelStore()
  const route = useRoute()
  onBeforeMount(async() => {
    await stores.fetchOneParcel(route.params.id)
  })

  const loader = ref(false)
  const schema = {
    activity: 'required',
    location: 'required',
  }

  const submit = async(values, {resetForm}) => {
    await stores.updateLogs(values)
    resetForm()
    showModal.value = false
  }

  const formattedDate = (date)=> {return dayjs(date).format('DD MMM YYYY')}
</script>

<style>

</style>