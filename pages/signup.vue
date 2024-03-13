<template>
  <NuxtLoadingIndicator  />
  <div class="flex min-h-full flex-1 flex-col justify-center  px-4 pt-4 pb-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-4 text-center text-2xl md:text-4xl text-emerald-600 font-bold leading-9 font-serif">Sign Up</h2>
    </div>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <VeeForm class="space-y-4" :validation-schema="schema" @submit="submit">
        <div>
          <label for="name" class="block text-sm font-medium leading-6">Full Name</label>
          <div class="mt-1">
            <VeeField name="name" type="text"  autocomplete="name" placeholder="Enter Full Name" class="block w-full rounded-md outline-none border-0 px-2 py-1.5 text-gray-900 dark:text-emerald-600 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-emerald-600 placeholder:text-gray-400 dark:placeholder:text-emerald-600 focus:ring-1 focus:ring-inset dark:bg-transparent focus:ring-emerald-600 sm:text-sm sm:leading-6" />
            <VeeErrorMessage name="name" class="text-xs text-red-500" />
          </div>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium leading-6">Email address</label>
          <div class="mt-1">
            <VeeField name="email" type="email" autocomplete="email" placeholder="Enter Email Address" class="block w-full rounded-md outline-none border-0 px-2 py-1.5 text-gray-900 dark:text-emerald-600 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-emerald-600 placeholder:text-gray-400 dark:placeholder:text-emerald-600 focus:ring-1 focus:ring-inset dark:bg-transparent focus:ring-emerald-600 sm:text-sm sm:leading-6" />
            <VeeErrorMessage name="email" class="text-xs text-red-500" />
          </div>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium leading-6">Password</label>
          <div class="mt-1 relative">
            <VeeField name="password" :type="showPass? 'text' : 'password'" autocomplete="password" placeholder="Enter Password" class="block w-full rounded-md outline-none border-0 px-2 py-1.5 text-gray-900 dark:text-emerald-600 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-emerald-600 placeholder:text-gray-400 dark:placeholder:text-emerald-600 focus:ring-1 focus:ring-inset dark:bg-transparent focus:ring-emerald-600 sm:text-sm sm:leading-6" />
            <VeeErrorMessage name="password" class="text-xs text-red-500" />
            <div @click="showPass = !showPass" class="absolute cursor-pointer px-1 rounded-full hover:bg-emerald-500 top-2.5 flex items-center  right-1">
              <icon v-if="showPass" name="mdi:eye-outline" />
              <icon v-else name="mdi:eye-off-outline" />
            </div>
          </div>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium leading-6">Confirm Password</label>
          <div class="mt-1 relative">
            <VeeField name="confirmPassword" :type="cPass? 'text' : 'password'" autocomplete="password" placeholder="Enter Password" class="block w-full rounded-md outline-none border-0 px-2 py-1.5 text-gray-900 dark:text-emerald-600 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-emerald-600 placeholder:text-gray-400 dark:placeholder:text-emerald-600 focus:ring-1 focus:ring-inset dark:bg-transparent focus:ring-emerald-600 sm:text-sm sm:leading-6" />
            <VeeErrorMessage name="confirmPassword" class="text-xs text-red-500" />
            <div @click="cPass = !cPass" class="absolute cursor-pointer px-1 rounded-full hover:bg-emerald-500 top-2.5 flex items-center  right-1">
              <icon v-if="cPass" name="mdi:eye-outline" />
              <icon v-else name="mdi:eye-off-outline" />
            </div>
          </div>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600">Sign in</button>
        </div>
      </VeeForm>

      <p class="mt-10 text-center text-sm text-gray-500">
        I have an account?
        <NuxtLink to="/login" class="font-semibold leading-6 text-emerald-600 hover:text-emerald-500">Login</NuxtLink>
      </p>
    </div>
  </div>
  <UtilityLoader v-show="loader" />
</template>

<script setup>
  import { useToast } from 'vue-toastification'

  definePageMeta({
    // middleware: ['auth']
  })
  useHead({
    title: 'Sign Up',
    meta: [
      { name: 'description', content: 'Register an account.' }
    ],
  })
	const store = authStore();
  const loader = ref(false)

  const toast = useToast()
  const showPass = ref(false)
  const cPass = ref(false)

  const schema = {
    name: 'required',
    email: 'required|email',
    password: 'required',
    confirmPassword: 'required|confirmed:@password'	
  }

	const submit = async (values, { resetForm }) => {
    loader.value = true
		const {data, error, status} = await store.handleRegister(values);
    if (error.value) {
      // resetForm()
      let errors = error.value.data.errors
      
      console.log(error.value.data);
      toast.error(error.value.data.message) 
      loader.value = false
    }else if (status.value === 'success') {
      await store.handleFetchUser()
      toast.success('SigUp Successful')
      return  navigateTo('/dashboard')
    }
	};
</script>

<style>

</style>