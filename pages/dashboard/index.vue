<template>
    <div class="py-10 space-y-6 text-sm">
      <div class="grid md:grid-cols-4 grid-cols-2 gap-4">
        <NuxtLink to="/dashboard/parcel" class=" w-full drop-shadow shadow rounded-md shadow-gray-500 dark:shadow-sm overflow-hidden dark:shadow-emerald-400 dark:border-emerald-700 dark:border bg-white dark:bg-slate-900/20">
          <div class="flex gap-2 justify-between items-center p-4">
            <div>
              <Icon name="mdi:truck-fast" class="md:text-7xl text-5xl font-bold text-green-700" />
            </div>
            <div class="border-2 h-14 w-14 md:h-20 md:w-20 border-dashed border-green-700 rounded-full text-2xl md:text-4xl p-2 text-center flex items-center justify-center">
              <Icon name="noto:delivery-truck" />
            </div>
          </div>
          <div class="h-7 bg-emerald-700 dark:bg-emerald-700 text-white flex items-center justify-center text-center">
            <p >View Parcel</p>
          </div>
        </NuxtLink>
        <NuxtLink to="/dashboard/mail/view-mail" class=" w-full drop-shadow shadow rounded-md shadow-gray-500 dark:shadow-sm overflow-hidden dark:shadow-cyan-400 dark:border-cyan-700 dark:border bg-white dark:bg-slate-900/20">
          <div class="flex gap-2 justify-between items-center p-4">
            <div>
              <Icon name="solar:inbox-unread-outline" class="md:text-7xl text-5xl font-bold text-cyan-700" />
            </div>
            <div class="border-2 h-14 w-14 md:h-20 md:w-20 border-dashed border-cyan-700 rounded-full text-2xl md:text-4xl p-2 text-center flex items-center justify-center">
              <Icon name="material-symbols:alternate-email-rounded" />
            </div>
          </div>
          <div class="h-7 bg-cyan-700 dark:bg-cyan-700 text-white flex items-center justify-center text-center">
            <p >View Mails</p>
          </div>
        </NuxtLink>
        <NuxtLink to="/dashboard/mail" class=" w-full drop-shadow shadow rounded-md shadow-gray-500 dark:shadow-sm overflow-hidden dark:shadow-pink-400 dark:border-pink-700 dark:border bg-white dark:bg-slate-900/20">
          <div class="flex gap-2 justify-between items-center p-4">
            <div>
              <Icon name="material-symbols:contact-mail-outline-sharp" class="md:text-7xl text-5xl font-bold text-pink-700" />
            </div>
            <div class="border-2 h-14 w-14 md:h-20 md:w-20 border-dashed border-pink-700 rounded-full text-2xl md:text-4xl p-2 text-center flex items-center justify-center">
              <Icon name="material-symbols:alternate-email-rounded" />
            </div>
          </div>
          <div class="h-7 bg-pink-700 dark:bg-pink-700 text-white flex items-center justify-center text-center">
            <p >Send Mail</p>
          </div>
        </NuxtLink>
        <NuxtLink to="/dashboard/parcel" class=" w-full drop-shadow shadow rounded-md shadow-gray-500 dark:shadow-sm overflow-hidden dark:shadow-amber-400 dark:border-amber-700 dark:border bg-white dark:bg-slate-900/20">
          <div class="flex gap-2 justify-between items-center p-4">
            <div>
              <Icon name="bi:chat-left-quote" class="md:text-7xl text-5xl font-bold text-amber-700" />
            </div>
            <div class="border-2 h-14 w-14 md:h-20 md:w-20 border-dashed border-amber-700 rounded-full text-2xl md:text-4xl p-2 text-center flex items-center justify-center">
              <Icon name="material-symbols:question-mark-rounded" />
            </div>
          </div>
          <div class="h-7 bg-amber-700 dark:bg-amber-700 text-white flex items-center justify-center text-center">
            <p >View Quote</p>
          </div>
        </NuxtLink>
      </div>
    </div>
</template>

<script  setup>

const store = authStore()

  onBeforeMount(async()=>{
    store.handleFetchUser()
  })
definePageMeta({
  layout: 'authlayout',
  // middleware: ['auth']
})

useHead({
  title: 'Dashboard',
  meta: [
    { name: 'description', content: 'Dashbord Home.' }
  ],
})

</script>