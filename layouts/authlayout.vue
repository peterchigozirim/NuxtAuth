<template>
  <div>
    <div :class="nav? 'left-0': '-left-[100%]'">
      <UtilitySidebar @close="navAll" class="md:w-56 w-11/12 bg-emerald-800/95 text-white transition-all duration-500 fixed top-14 md:top-0 md:left-0 min-h-screen bg-main" />
    </div>
    
    <div class="md:ml-56">
      <UtilityDashboardnavbar />
      <div class="md:px-6 w-11/12 md:w-full mx-auto py-2">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
  const store = authStore()

  onBeforeMount(async()=>{
    await store.handleFetchUser()
  })
  const nav = ref(false)
  const navAll = ()=>{
      nav.value = !nav.value
  }
</script>

<style>

</style>