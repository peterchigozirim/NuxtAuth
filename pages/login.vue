<template>`
  	<NuxtLoadingIndicator  />
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 pt-4 pb-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
    </div>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <VeeForm class="space-y-6" :validation-schema="schema" @submit="submit">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-1">
            <VeeField name="email" type="email" :value="form.email" autocomplete="email" class="block w-full rounded-md outline-none border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6" />
            <VeeErrorMessage name="email" class="text-xs text-red-500" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <div class="text-sm">
              <a href="#" class="font-semibold text-emerald-600 hover:text-emerald-500">Forgot password?</a>
            </div>
          </div>
          <div class="mt-1">
            <VeeField id="password" name="password" :value="form.password" type="password" autocomplete="current-password" class="block w-full rounded-md outline-none border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6" />
            <VeeErrorMessage name="password" class="text-xs text-red-500" />
          </div>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600">Sign in</button>
        </div>
      </VeeForm>

      <p class="mt-10 text-center text-sm text-gray-500">
        Not a member?
        <NuxtLink to="/signup" class="font-semibold leading-6 text-emerald-600 hover:text-emerald-500">Create Account</NuxtLink>
      </p>
    </div>
  </div>
  <UtilityLoader v-show="loader" />
</template>

<script setup>
  import { useToast } from 'vue-toastification'

  definePageMeta({
    middleware: ['guest']
  })
	const store = authStore();
  const loader = ref(false)

  const toast = useToast()

	const form = ref({
		email: "test@example.com",
		password: "password",
	});

  const schema = {
        email: 'required|email',
        password: 'required'
    }

	const submit = async (values, { resetForm }) => {
    loader.value = true
		const {data, error, status} = await store.handleLogin(values);
    if (!error.value === null) {
      resetForm()
      toast.error(error.value.data.message) 
      loader.value = false
    }else if (status.value === 'success') {
      await store.handleFetchUser()
      toast.success('Login Successful')
      return  navigateTo('/dashboard')
    }
	};
</script>

<style>

</style>