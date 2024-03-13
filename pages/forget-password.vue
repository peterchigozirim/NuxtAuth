<template>
  <NuxtLoadingIndicator  />
  <div class="flex min-h-full flex-1 flex-col justify-center  px-4 pt-4 pb-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-4 text-center text-2xl md:text-4xl text-emerald-600 font-bold leading-9 font-serif">Forget Password</h2>
    </div>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <VeeForm class="space-y-6" :validation-schema="schema" @submit="submit">
        <div>
          <label for="email" class="block text-sm font-medium leading-6">Email address</label>
          <div class="mt-1">
            <div class="flex">
              <VeeField name="email" type="email" v-model="email" autocomplete="email" placeholder="Enter Email Address" class="block w-full rounded-md rounded-r-none outline-none border-0 px-2 py-1.5 text-gray-900 dark:text-emerald-600 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-emerald-600 placeholder:text-gray-400 dark:placeholder:text-emerald-600 focus:ring-1 focus:ring-inset dark:bg-transparent focus:ring-emerald-600 sm:text-sm sm:leading-6" />
              <button type="button" @click="getOtp" class="bg-white hover:bg-emerald-500 hover:text-white w-20 rounded-md outline-none border-0 px-2 py-1.5 text-gray-900 dark:text-emerald-600 shadow-sm ring-1 ring-inset rounded-l-none ring-gray-300 dark:ring-emerald-600 placeholder:text-gray-400 dark:placeholder:text-emerald-600 focus:ring-1 focus:ring-inset dark:bg-transparent focus:ring-emerald-600 sm:text-sm sm:leading-6">
                Get otp
              </button>
            </div>
            <VeeErrorMessage name="email" class="text-xs text-red-500" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6">OTP</label>
          </div>
          <div class="mt-1">
            <VeeField  name="otp" type="password" placeholder="Enter OTP code" autocomplete="false" class="block w-full rounded-md outline-none border-0 px-2 py-1.5 text-gray-900 dark:text-emerald-600 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-emerald-600 placeholder:text-gray-400 dark:placeholder:text-emerald-600 focus:ring-1 focus:ring-inset dark:bg-transparent focus:ring-emerald-600 sm:text-sm sm:leading-6" />
            <VeeErrorMessage name="otp" class="text-xs text-red-500" />
          </div>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600">Sign in</button>
        </div>
      </VeeForm>

      <p class="mt-10 text-center text-sm text-gray-500">
        I remembered my password?
        <NuxtLink to="/login" class="font-semibold leading-6 text-emerald-600 hover:text-emerald-500">Login</NuxtLink>
      </p>
    </div>
  </div>
  <UtilityLoader v-show="loader" />
</template>

<script setup>
  import { useToast } from 'vue-toastification'
import { appStore } from '~/stores/appStore';

useHead({
    title: 'Forget Password',
    meta: [
      { name: 'description', content: 'Reset Password' }
    ],
  })
  const app = appStore();
  const loader = ref(false)
  const email = ref('')

  const toast = useToast()

  const schema = {
        email: 'required|email',
        otp: 'required'
    }


  const getOtp = async()=>{
    if (email.value !== null || email.value !== '') {
      loader.value = true
      const {data, error, status, pending} = await useAuth('/api/get-otp',{
        method: 'POST',
        body: {email : email.value}
      })
      if (error.value) {
        loader.value = pending.value
        toast.error(error.value.data.message) 
      }else if (status.value === 'success') {
        toast.success(data.value.message)
        return;
      }
    }else{
      return toast.error('email is required') 
    }
  }
	const submit = async (values) => {
    loader.value = true
		const { data, error, status, pending } = await useAuth('/api/reset-password', {
      method: 'POST',
      body: values
    })
    
    if (error.value) {
      loader.value = pending.value
      toast.error(error.value.data.message) 
      loader.value = false
    }else if (status.value === 'success') {
      toast.success(data.value.message)
      navigateTo('/login')
      return;
    }
	};
</script>

<style>

</style>