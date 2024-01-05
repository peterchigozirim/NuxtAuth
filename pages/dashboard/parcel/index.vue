<template>
  <div>
    <UtilityLoader v-if="stores.loading" />
    <div v-else class="main-content">
      <div class="py-10 space-y-6 text-sm">
        <section class="">
            <div class="container mx-auto max-w-5xl w-11/12 md:w-auto flex justify-between items-center">
              <div>
                <form action="">
                  <div class="flex">
                    <input type="text" class="border-emerald-500 border rounded h-9 rounded-r-none border-r-0 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500 placeholder-emerald-500 px-2 text-sm" placeholder="Search">
                    <button class="border border-emerald-500 text-lg px-2 rounded-r hover:text-white hover:bg-emerald-500 dark:hover:bg-emerald-700"><icon name="ic:round-search"></icon></button>
                  </div>
                </form>
              </div>

              <div>
                <NuxtLink to="/dashboard/parcel/add-parcel" class="border-emerald-500 border rounded h-9 flex items-center text-emerald-500 px-2 hover:text-white hover:bg-emerald-500 dark:hover:bg-emerald-700"> <icon name="material-symbols:add" class="mr-1" /> Parcel</NuxtLink>
              </div>
            </div>
        </section>
        <!-- Start grid -->
        <section class="">
            <div class="container mx-auto max-w-5xl w-11/12 md:w-auto space-y-6">
                
                <div class="space-y-6">
                    <div  v-if="stores.parcels.length < 1" class="p-4 border border-gray-100/50 rounded-md relative hover:-translate-y-1.5 transition-all duration-500 ease-in-out border-emerald-500 hover:shadow-md hover:shadow-gray-100/30 dark:border-neutral-600 dark:hover:shadow-neutral-900">
                        <div class="flex justify-between items-center ">
                            <div class="">
                                <div class="mt-3 mt-lg-0">
                                    <p class="mb-2 text-gray-500 text-muted dark:text-gray-300"> No Application</p>
                                </div>
                            </div><!--end col-->
                        </div><!--end row-->
                    </div>
                    <div v-else v-for="(parcel, i) in stores.parcels" :key="i" class="md:p-4 p-2 py-4 text-sm border  rounded-md relative hover:-translate-y-1.5 transition-all duration-500 ease-in-out border-emerald-500 hover:shadow-md hover:shadow-gray-100/30 dark:border-neutral-600 dark:hover:shadow-neutral-900">
                        <div class="flex justify-between items-center flex-wrap space-y-5  md:space-y-0">
                            <div class="">
                                <div class=" space-y-1">
                                    <p class="text-gray-500 text-muted dark:text-gray-300"><icon name="mdi:truck-fast" class="text-lg"/>  {{ parcel.tracking_number }}</p>
                                    <p class="text-gray-500 text-muted dark:text-gray-300"><icon name="ic:sharp-person-3" class="text-lg"></icon> Sender name: {{ parcel.sender_name }}</p>
                                    <p class="text-gray-500 text-muted dark:text-gray-300"><icon name="ic:sharp-person-3" class="text-lg"></icon> Recepient name: {{ parcel.sender_name }}</p>
                                    <p class="text-gray-500 text-muted dark:text-gray-300"><icon name="solar:inbox-unread-outline" class="text-lg"/> Recepient email: {{ parcel.recepient_email }}</p>
                                </div>
                            </div><!--end col-->

                            <div class="">
                                <div class="flex flex-wrap gap-2">
                                    <NuxtLink :to="`/dashboard/parcel/details-${parcel.id}`" @click="getDetails()" class="px-2 py-1 text-sm font-medium text-green-500 hover:text-white rounded bg-green-500/20 hover:bg-green-500/40">View More</NuxtLink>
                                    <button @click="deleteParcel(parcel.id)" class="px-2 py-1 text-sm font-medium rounded bg-red-500/20 hover:bg-red-500/40 text-red-500 hover:text-white">Delete</button>
                                </div>
                            </div><!--end col-->
                        </div><!--end row-->
                    </div>
                </div>
                <!-- pagination -->
                <UtilityPagination
                    :links="stores.page.links"
                    :totalRecords="stores.page.total"
                    :page-limit="stores.page.per_page"
                    @updateData="updateData"
                  />
                <!-- end -->
            </div>
        </section>
        <!-- End grid -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { useToast } from 'vue-toastification'

  definePageMeta({
    layout: 'authlayout',
    middleware: ['auth', ]
  })

  const  stores = parcelStore()

  const updateData = (detail) => {
    stores.page = detail;
    stores.parcels = detail.data;
  };

  const getDetails = (detail)=>{
    // 
  }
  const toast = useToast()
  // const {data:parcels, error, pending} = await  useAsyncData('/api/parcel', () => useApi('/api/parcel'));
  const deleteParcel = async(id)=>{
    if(confirm("Are you sure you want to delete this parcel?")){
      const {data, error, status} = await stores.deleteParcel(id)
      if(error.value) toast.error(error.value.message)
      if(status === 'success'){
        toast.success(data.message)
      }
    }
  }

  await  stores.fetchParcels();




  

</script>

<style>

</style>