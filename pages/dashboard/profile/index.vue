<template>
  <div>
    <UtilityLoader v-if="store.loader" />
    <div v-else class="py-6 space-y-6">
      <div class="text-2xl font-semibold">
        Admin Profile
      </div>
      <div>
        <div class="pb-4 text-sm">
          <VeeForm :validation-schema="schema" @submit="submit">
            <div class="space-y-4">
              
              <div class="w-full">
                <label class="block text-sm font-medium mb-1">Full Name</label>
                <VeeField type="text" readonly name="name" v-model="store.user.name" placeholder="Enter Site name" class="border-gray-500 border w-full rounded-md h-9 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500 px-2 pr-3 text-sm" />
                <VeeErrorMessage name="name" class="text-xs text-red-500" />
              </div>


              <div class="w-full">
                <label class="block text-sm font-medium mb-1">Email Address</label>
                <VeeField type="email" name="email" readonly v-model="store.user.email" autocomlete="false" placeholder="Enter Email Address" class="border-gray-500 border w-full rounded-md h-9 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500 px-2 pr-3 text-sm" />
                <VeeErrorMessage name="email" class="text-xs text-red-500" />
              </div>

              <div class="text-xl font-semibold">
                <p>Change Password</p>
              </div>

              <div class="w-full">
                <label class="block text-sm font-medium mb-1">Password</label>
                <VeeField type="password" name="password" placeholder="Enter Old Password" class="border-gray-500 border w-full rounded-md h-9 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500 px-2 pr-3 text-sm" />
                <VeeErrorMessage name="password" class="text-xs text-red-500" />
              </div>

              <div class="w-full">
                <label class="block text-sm font-medium mb-1">New Password</label>
                <VeeField type="password" name="new_password"  placeholder="Enter New Password" class="border-gray-500 border w-full rounded-md h-9 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500 px-2 pr-3 text-sm" />
                <VeeErrorMessage name="new_password" class="text-xs text-red-500" />
              </div>

              <div class="w-full">
                <label class="block text-sm font-medium mb-1">Confirm Password</label>
                <VeeField type="password" name="confirm_password"  placeholder="Enter Confirm Password" class="border-gray-500 border w-full rounded-md h-9 bg-transparent outline-none focus:ring-1 focus:ring-emerald-500 px-2 pr-3 text-sm" />
                <VeeErrorMessage name="confirm_password" class="text-xs text-red-500" />
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

  const store = authStore()
  definePageMeta({
    layout: 'authlayout',
    // middleware: ['auth']
  })

  useHead({
    title: 'Profile',
    meta: [
      { name: 'description', content: 'Parcel details.' }
    ],
  })

  const schema = {
    password : 'required',
    new_password : 'required',
    confirm_password : 'required|confirm@password',
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
