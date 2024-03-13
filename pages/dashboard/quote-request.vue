<template>
  <div>
    <UtilityLoader v-if="stores.loading" />
    <div v-else class="main-content">
      <div class="py-10 space-y-6 text-sm">
        <section class="">
            <div class="container mx-auto max-w-5xl w-11/12 md:w-auto text-2xl font-serif font-semibold">
              <p>Quote Information</p>
            </div>
        </section>
        <!-- Start grid -->
        <section class="">
            <div class="container mx-auto max-w-5xl w-11/12 md:w-auto space-y-6">
                <div class="space-y-6">
                    <div v-if="stores.quotes.length < 1" class="p-4 border border-gray-100/50 rounded-md relative hover:-translate-y-1.5 transition-all duration-500 ease-in-out border-emerald-500 hover:shadow-md hover:shadow-gray-100/30 dark:border-neutral-600 dark:hover:shadow-neutral-900">
                        <div class="flex justify-between items-center ">
                            <div class="">
                                <div class="mt-3 mt-lg-0">
                                    <p class="mb-2 text-gray-500 text-muted dark:text-gray-300"> No Application</p>
                                </div>
                            </div><!--end col-->
                        </div><!--end row-->
                    </div>
                    <div v-else v-for="(quote, i) in stores.quotes" :key="i" class="md:p-4 p-2 py-4 text-sm border  rounded-md relative hover:-translate-y-1.5 transition-all duration-500 ease-in-out border-emerald-500 hover:shadow-md hover:shadow-gray-100/30 dark:border-neutral-600 dark:hover:shadow-neutral-900">
                        <div class="flex justify-between items-center flex-wrap space-y-5  md:space-y-0">
                            <div class="">
                                <div class=" space-y-1">
                                    <p class="text-gray-800 text-muted dark:text-gray-300"><icon name="ic:sharp-person-3" class="text-lg"></icon> Name: {{ quote.name }} </p>
                                    <p class="text-gray-800 text-muted dark:text-gray-300"><icon name="solar:inbox-unread-outline" class="text-lg"/> Email Address: {{ quote.email }}</p>
                                    <p class="text-gray-800 text-muted dark:text-gray-300"><icon name="material-symbols:nest-clock-farsight-analog-outline-rounded" class="text-lg"/>  {{ formattedDate(quote.created_at) }}</p>
                                </div>
                            </div><!--end col-->

                            <div class="">
                                <div class="flex flex-wrap gap-2">
                                    <button @click="viewquote(quote)" class="px-2 py-1 text-sm font-medium text-green-500 hover:text-white rounded bg-green-500/20 dark:hover:bg-green-500/40 hover:bg-green-800/80">View quote</button>
                                    <button @click="deletequote(quote.id)" class="px-2 py-1 text-sm font-medium rounded bg-red-500/20 dark:hover:bg-red-500/70 hover:bg-red-500 text-red-500 hover:text-white">Delete</button>
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
    <UtilityModal :show="showModal" @close="showModal = false" :maxWidth="'md'">
      <div class="bg-emerald-500 dark:bg-emerald-700 text-white h-10 flex items-center px-2 font-semibold">
        {{ quoteDetail.name }}
      </div>
      <div class="px-4 py-4 space-y-3 text-sm">
        <div>
          <div>
            Name:
          </div>
          <div>
            {{ quoteDetail.name }}
          </div>
        </div>
        <div>
          <div>
            Email:
          </div>
          <div>
            {{ quoteDetail.email }}
          </div>
        </div>
        <div>
          <div>
            Phone:
          </div>
          <div>
            {{ quoteDetail.phone }}
          </div>
        </div>
        <div class="flex flex-wrap gap-3 justify-between items-center">
          <div>
            <div>
              Departure City:
            </div>
            <div>
              {{ quoteDetail.departure_city }}
            </div>
          </div>
          <div>
            <div>
              Delivery City:
            </div>
            <div>
              {{ quoteDetail.delivery_city }}
            </div>
          </div>
        </div>
        <div class="flex flex-wrap gap-3 justify-between items-center">
          <div>
            <div>
              Weight:
            </div>
            <div>
              {{ quoteDetail.weight }}
            </div>
          </div>
          <div>
            <div>
              Dimension:
            </div>
            <div>
              {{ quoteDetail.dimensions }}
            </div>
          </div>
        </div>
        <div>
          <div>
            Message:
          </div>
          <div v-html="quoteDetail.message">
            
          </div>
        </div>
      </div>
      <div class="p-4 gap-2 flex">
        <button @click="showModal = false" type="button" class="flex border w-full justify-center text-sm border-rose-500 text-rose-500 hover:bg-rose-500 p-1.5 rounded hover:text-white">Close</button>
      </div>
    </UtilityModal>
  </div>
</template>

<script setup>
import dayjs from 'dayjs'
import { quoteStore } from '~/stores/quoteStore';
  
  definePageMeta({
    layout: 'authlayout',
    // middleware: ['auth']
  })

useHead({
  title: 'Quote Request',
  meta: [
    { name: 'description', content: 'Customer request quote.' }
  ],
})
const showModal = ref(false)
const stores = quoteStore()
onBeforeMount(() => {
  stores.handleFetch()
})
const updateData = (detail) => {
  stores.page =  detail;
  stores.quotes = detail.data;
};
const quoteDetail = ref({})
const viewquote = (quote)=>{
  quoteDetail.value = quote
  showModal.value = true
}

const deletequote = async(id)=>{
  if(confirm('Are you sure you want to delete this quote?')) {
    await stores.handleDelete(id)
  }
}

const formattedDate = (date)=> {return dayjs(date).format('DD MMM YYYY')}
</script>