<template>
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
              <button class="border-white border p-1 hover:bg-orange-600 capitalize rounded">
                update timeline
              </button>
            </div>
          </div>
          <div class="divide-y bg-emerald-100 dark:bg-transparent overflow-y-hidden">
            <div v-for="(log, i) in stores.logs" :key="i" class="flex gap-3 justify-between md:divide-y-0 md:gap-10">
              <div class="flex flex-col  justify-center p-2.5">
                <div class="h-10">
                  <p>Date</p>
                </div>
                <div class="h-10 whitespace-nowrap">
                  <p>{{ formattedDate(log.created_at) }}</p>
                </div>
              </div>
              <div class="flex flex-col justify-center p-2.5">
                <div class="h-10">
                  <p>Activity</p>
                </div>
                <div class="h-10">
                  <p>{{ log.activity }}</p>
                </div>
              </div>
              <div class="flex flex-col justify-center p-2.5">
                <div class="h-10">
                  <p>Location</p>
                </div>
                <div class="h-10">
                  <p>{{ log.location }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <UtilityModal :show="showModal" @close="showModal = false">
    
    </UtilityModal>
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

  const formattedDate = (date)=> {return dayjs(date).format('DD MMM YYYY')}
</script>

<style>

</style>