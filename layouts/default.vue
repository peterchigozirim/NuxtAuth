<template>
  <div class="dark:bg-black dark:text-white bg-emerald-50">
    <div class="h-16 flex max-w-6xl dark:bg-black dark:text-white bg-emerald-50 z-[100] w-11/12 md:w-auto mx-auto justify-between items-center">
      <!-- <div class="block md:hidden">
          <div
              @click="navAll()"
              class="space-x-1 cursor-pointer  md:hidden flex  justify-center transition-all duration-500"
          >
              <div
                  :class="nav ? ' mt-auto' : 'my-auto'"
                  class="w-1 h-4 bg-emerald-500 transition-all duration-500"
              >
              </div>
              <div class="w-1 h-7 bg-emerald-500"></div>
              <div
                  :class="nav ? ' mt-auto' : 'my-auto'"
                  class="w-1 h-4 bg-emerald-500 transition-all duration-500"
              >
              </div>
          </div>
      </div> -->
      <div>
        <img src="/images/logo.png" alt="SwiftBoxs" class="w-28 dark:block hidden" />
        <img src="/images/logo_black.png" alt="SwiftBoxs" class="w-28 dark:hidden block" />
      </div>
      <!-- <div :class="nav? 'top-14': '-top-[100%]'" class="fixed md:static [z-index: -1] md:top-0 left-0 transition-all duration-500 w-full md:w-auto bg-emerald-600 md:bg-transparent rounded-b-3xl md:rounded-none p-4 md:p-0">
        <ul class="flex md:flex-row flex-col gap-4 items-center">
          <li><NuxtLink class="hover:text-emerald-500" to="/">Home</NuxtLink></li>
          <li><NuxtLink class="hover:text-emerald-500" to="/login">sign-in</NuxtLink></li>
          <li><NuxtLink class="hover:text-emerald-500" to="/signup">Sign-Up</NuxtLink></li>
          <li class="md:block hidden"><UtilityTogglemode /></li>
        </ul>
      </div> -->
      <div class="">
        <ul>
          <li><UtilityTogglemode /></li>
        </ul>
      </div>
    </div>
    <div class="py-10">
      <slot />
    </div>
  </div>
</template>

<script  setup>

  const nav = ref(false);
  const navAll = ()=>{
    nav.value = !nav.value
  }

</script>

<style>

</style>