<template>`
  	<NuxtLoadingIndicator  />
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 pt-4 pb-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
    </div>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="submit">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-1">
            <input id="email" v-model="form.email" type="email" autocomplete="email" required="" class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6" />
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
            <input id="password" v-model="form.password" type="password" autocomplete="current-password" required="" class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600">Sign in</button>
        </div>
      </form>

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

	const submit = async () => {
    loader.value = true
		const {data, error, status} = await store.handleLogin(form.value);
    if (!error.value == null) {
      toast.error(error.value.data.message) 
      loader.value = false
    }
    if(status.value === 'success'){
        await store.handleFetchUser()
        toast.success('Login Successful')
        navigateTo('/dashboard')
    }
	};
</script>

<style>

</style>