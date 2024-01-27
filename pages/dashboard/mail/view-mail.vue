<template>
  <div>
    <UtilityLoader v-if="stores.loading" />
    <div v-else class="main-content">
      <div class="py-10 space-y-6 text-sm">
        <section class="">
            <div class="container mx-auto max-w-5xl w-11/12 md:w-auto">
              <div>
                <NuxtLink to="/dashboard/mail/" class="border-emerald-500 border rounded h-9 w-28 flex items-center text-emerald-500 px-2 hover:text-white hover:bg-emerald-500 dark:hover:bg-emerald-700"> <icon name="material-symbols:add" class="mr-1" /> Send Mail</NuxtLink>
              </div>
            </div>
        </section>
        <!-- Start grid -->
        <section class="">
            <div class="container mx-auto max-w-5xl w-11/12 md:w-auto space-y-6">
                
                <div class="space-y-6">
                    <div v-if="stores.mails.length < 1" class="p-4 border border-gray-100/50 rounded-md relative hover:-translate-y-1.5 transition-all duration-500 ease-in-out border-emerald-500 hover:shadow-md hover:shadow-gray-100/30 dark:border-neutral-600 dark:hover:shadow-neutral-900">
                        <div class="flex justify-between items-center ">
                            <div class="">
                                <div class="mt-3 mt-lg-0">
                                    <p class="mb-2 text-gray-500 text-muted dark:text-gray-300"> No Application</p>
                                </div>
                            </div><!--end col-->
                        </div><!--end row-->
                    </div>
                    <div v-else v-for="(mail, i) in stores.mails" :key="i" class="md:p-4 p-2 py-4 text-sm border  rounded-md relative hover:-translate-y-1.5 transition-all duration-500 ease-in-out border-emerald-500 hover:shadow-md hover:shadow-gray-100/30 dark:border-neutral-600 dark:hover:shadow-neutral-900">
                        <div class="flex justify-between items-center flex-wrap space-y-5  md:space-y-0">
                            <div class="">
                                <div class=" space-y-1">
                                    <p class="text-gray-800 text-muted dark:text-gray-300"><icon name="ic:sharp-person-3" class="text-lg"></icon> Subject: {{ mail.subject }} </p>
                                    <p class="text-gray-800 text-muted dark:text-gray-300"><icon name="solar:inbox-unread-outline" class="text-lg"/> Email Address: {{ mail.email }}</p>
                                    <p class="text-gray-800 text-muted dark:text-gray-300"><icon name="material-symbols:nest-clock-farsight-analog-outline-rounded" class="text-lg"/>  {{ formattedDate(mail.created_at) }}</p>
                                </div>
                            </div><!--end col-->

                            <div class="">
                                <div class="flex flex-wrap gap-2">
                                    <button @click="viewMail(mail)" class="px-2 py-1 text-sm font-medium text-green-500 hover:text-white rounded bg-green-500/20 dark:hover:bg-green-500/40 hover:bg-green-800/80">View Mail</button>
                                    <button @click="deleteMail(mail.id)" class="px-2 py-1 text-sm font-medium rounded bg-red-500/20 dark:hover:bg-red-500/70 hover:bg-red-500 text-red-500 hover:text-white">Delete</button>
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
        {{ mailDetail.email }}
      </div>
      <div class="px-4 py-4 space-y-3 text-sm">
        <div>
          <div>
            Subject:
          </div>
          <div>
            {{ mailDetail.subject }}
          </div>
        </div>
        <div>
          <div>
            Mail:
          </div>
          <div v-html="mailDetail.message">
            
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
  
  definePageMeta({
    layout: 'authlayout',
    middleware: ['auth', 'watch-user']
  })

useHead({
  title: 'Send Mail',
  meta: [
    { name: 'description', content: 'Send mail details.' }
  ],
})
const showModal = ref(false)
const stores = mailStore()
onBeforeMount(() => {
  stores.handleFetch()
})
const updateData = (detail) => {
  stores.page =  detail;
  stores.mails = detail.data;
};
const mailDetail = ref({})
const viewMail = (mail)=>{
  mailDetail.value = mail
  showModal.value = true
}

const deleteMail = async(id)=>{
  if(confirm('Are you sure you want to delete this mail?')) {
    await stores.handleDelete(id)
  }
}

const formattedDate = (date)=> {return dayjs(date).format('DD MMM YYYY')}
</script>

<style>

</style>