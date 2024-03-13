<template>
  <div>
    <UtilityLoader v-if="store.loader" />
    <div v-else class="py-6 space-y-6">
      <div class="text-2xl font-semibold">
        App Settings
      </div>
      <div>
        <div class="pb-4 text-sm">
          <VeeForm :validation-schema="schema" @submit="submit">
            <div class="space-y-4">
              
              <div class="w-full">
                <label class="block text-sm font-medium mb-1">App Name</label>
                <VeeField type="text" name="app_name" v-model="store.apps.app_name" placeholder="Enter Site name" class="border-gray-500 border w-full rounded-md h-9 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500 px-2 pr-3 text-sm" />
                <VeeErrorMessage name="app_name" class="text-xs text-red-500" />
              </div>

              <div class="w-full">
                <label class="block text-sm font-medium mb-1">Short Name(SWB)</label>
                <VeeField type="text" name="app_short_name" v-model="store.apps.app_short_name" placeholder="Enter Short name for tracking number" class="border-gray-500 border w-full rounded-md h-9 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500 px-2 pr-3 text-sm" />
                <VeeErrorMessage name="app_short_name" class="text-xs text-red-500" />
              </div>

              <div class="w-full">
                <label class="block text-sm font-medium mb-1">App Email</label>
                <VeeField type="email" name="app_email" v-model="store.apps.app_email" placeholder="Enter Email Address" class="border-gray-500 border w-full rounded-md h-9 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500 px-2 pr-3 text-sm" />
                <VeeErrorMessage name="app_email" class="text-xs text-red-500" />
              </div>

              <div class="w-full">
                <label class="block text-sm font-medium mb-1">Site Phone</label>
                <VeeField type="text" name="app_phone" v-model="store.apps.app_phone" placeholder="Enter Phone Number" class="border-gray-500 border w-full rounded-md h-9 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500 px-2 pr-3 text-sm" />
                <VeeErrorMessage name="app_phone" class="text-xs text-red-500" />
              </div>

              <div class="w-full">
                <label class="block text-sm font-medium mb-1">App Address</label>
                <VeeField type="text" name="app_address" v-model="store.apps.app_address" placeholder="Enter address" class="border-gray-500 border w-full rounded-md h-9 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500 px-2 pr-3 text-sm" />
                <VeeErrorMessage name="app_address" class="text-xs text-red-500" />
              </div>

              <div class="w-full">
                <label class="block text-sm font-medium mb-1">App Description</label>
                <VeeField as="textarea"  name="app_description" v-model="store.apps.app_description" placeholder="Enter description" class="border-gray-500 border min-h-[10rem] w-full rounded-md bg-transparent outline-none focus:ring-1 focus:ring-emerald-500 p-2 text-sm" />
                <VeeErrorMessage name="app_description" class="text-xs text-red-500" />
              </div>

              <div class="flex justify-center items-center gap-2">
                <div class="">
                  <button class="border border-emerald-500 text-emerald-500 hover:bg-emerald-500 p-2 block w-full rounded hover:text-white">Save Changes</button>
                </div>
              </div>
            </div>
          </VeeForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

  const store = appStore()
  definePageMeta({
    layout: 'authlayout',
    // middleware: ['auth']
  })

  useHead({
    title: 'Manage Site',
    meta: [
      { name: 'description', content: 'Parcel details.' }
    ],
  })

  const schema = {
    app_name : 'required',
    app_short_name: 'required',
    app_email : 'required|email',
    app_phone : 'required',
    app_address : 'required',
    app_description : 'required',
  }

  const submit = async(values)=>{
    await store.handleSubmit(values)
    await store.handleFetch()
  }

  onBeforeMount(async ()=>{
    if (!store.isFetched) {
      await store.handleFetch()
    }
  })
</script>
