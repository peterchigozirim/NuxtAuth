<template>
  <NuxtLoadingIndicator  />
  <div class="flex min-h-full flex-1 flex-col justify-center  px-4 pt-4 pb-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-4 text-center text-2xl md:text-4xl text-emerald-600 font-bold leading-9 font-serif">Welcome Back</h2>
    </div>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <VeeForm class="space-y-6" :validation-schema="schema" @submit="submit">
        <div>
          <label for="email" class="block text-sm font-medium leading-6">Email address</label>
          <div class="mt-1">
            <VeeField name="email" type="email" autocomplete="email" placeholder="Enter Email Address" class="block w-full rounded-md outline-none border-0 px-2 py-1.5 text-gray-900 dark:text-emerald-600 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-emerald-600 placeholder:text-gray-400 dark:placeholder:text-emerald-600 focus:ring-1 focus:ring-inset dark:bg-transparent focus:ring-emerald-600 sm:text-sm sm:leading-6" />
            <VeeErrorMessage name="email" class="text-xs text-red-500" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6">Password</label>
            <div class="text-sm">
              <NuxtLink to="/forget-password" class="font-semibold text-emerald-600 hover:text-white">Forgot password?</NuxtLink>
            </div>
          </div>
          <div class="mt-1">
            <VeeField id="password" name="password" type="password" placeholder="Enter Password" autocomplete="current-password" class="block w-full rounded-md outline-none border-0 px-2 py-1.5 text-gray-900 dark:text-emerald-600 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-emerald-600 placeholder:text-gray-400 dark:placeholder:text-emerald-600 focus:ring-1 focus:ring-inset dark:bg-transparent focus:ring-emerald-600 sm:text-sm sm:leading-6" />
            <VeeErrorMessage name="password" class="text-xs text-red-500" />
          </div>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600">Sign in</button>
        </div>
      </VeeForm>

    </div>
  </div>
  <UtilityLoader v-show="loader" />
</template>

<script setup>
  import { useToast } from 'vue-toastification'
import { appStore } from '~/stores/appStore';

useHead({
    title: 'Login',
    meta: [
      { name: 'description', content: 'Welcome back .' }
    ],
  })
	const store = authStore();
  const app = appStore();
  const loader = ref(false)

  const toast = useToast()

  const schema = {
        email: 'required|email',
        password: 'required'
    }

	const submit = async (values, { resetForm }) => {
    loader.value = true
		const {data, error, status, pending} = await store.handleLogin(values);
    
    if (error.value) {
      loader.value = pending.value
      toast.error(error.value.data.message) 
      loader.value = false
    }else if (status.value === 'success') {
      let token = await data.value.token
      localStorage.setItem('token', token)
      await store.handleFetchUser()
      resetForm()
      toast.success('Login Successful')
      navigateTo('/dashboard')
      await app.handleFetch()
      return;
    }
	};
</script>

<style>

</style>