<template>
  <div class="dark:bg-black">
    <div class="h-16 flex max-w-6xl mx-auto justify-between items-center">
      <div>
        logo
      </div>
      <div>
        <ul class="flex gap-4 ">
          <li><NuxtLink class="hover:text-indigo-600" to="/">Home</NuxtLink></li>
          <li><NuxtLink class="hover:text-indigo-600" to="/login">sign-in</NuxtLink></li>
          <li><NuxtLink class="hover:text-indigo-600" to="/signup">Sign-Up</NuxtLink></li>
        </ul>
      </div>
    </div>
    <slot />
  </div>
</template>

<script  setup>
const store = authStore()
onMounted(async()=>{
    store.handleFetchUser()
  })

</script>

<style>

</style>