<template>
  <div class="h-14 bg-emerald-800 sticky top-0 z-30">
        <div class="max-w-9xl md:px-6 w-11/12 md:w-full relative mx-auto h-full flex justify-between items-center text-white">
            <div class="block md:hidden">
                <div
                    @click="navAll()"
                    class="space-y-1 cursor-pointer py-1 md:hidden block transition-all duration-500"
                >
                    <div
                        :class="nav ? ' mr-auto' : 'mx-auto'"
                        class="w-4 h-1 bg-white transition-all duration-500"
                    >
                    </div>
                    <div class="w-7 h-1 bg-white"></div>
                    <div
                        :class="nav ? ' ml-auto' : 'mx-auto'"
                        class="w-4 h-1 bg-white transition-all duration-500"
                    >
                    </div>
                </div>
            </div>
            <div class="md:hidden">
                <div class="h-14">
                    Logo
                </div>
            </div>
            <div class="md:block hidden font-semibold">
                <p>Dashboard</p>
            </div>
            <div class="flex gap-3 items-center">
                <div>
                    <UtilityTogglemode />
                </div>
                <div class="flex gap-1 items-center justify-center cursor-pointer" @click="openNav = !openNav">
                    <div class=" text-lg">
                        <icon name="ic:sharp-person-3"></icon>
                    </div>
                    <div class="text-lg">
                        <icon name="ic:outline-arrow-drop-down"></icon>
                    </div>
                </div>
            </div>

            <div v-show="openNav" class="w-64 overflow-hidden transition-all duration-500 ease-in-out rounded bg-emerald-800/95 dark:bg-emerald-800 absolute pt-4 space-y-4 divide-y top-16 md:right-7 right-0 text-sm">
                <div class="flex gap-2 items-center px-4">
                    <div class="h-8 w-8 rounded-full bg-yellow-700 text-xl flex items-center justify-center">
                        <icon name="ic:sharp-person-3"></icon>
                    </div>
                    <div>
                        <p>{{ auth.user.name }}</p>
                        <p class="text-gray-200">{{ auth.user.email }}</p>
                    </div>
                </div>

                <div class="text-gray-100">
                    <NuxtLink @click="openNav = false" to="/dashboard/profile" class="flex border-b hover:bg-yellow-700 items-center py-1 px-6 text-sm border-gray-100 gap-2">
                        <div class="text-icon text-lg ">
                            <icon name="ic:sharp-person-3"></icon>
                        </div>
                        <div>
                            <p>Account</p>
                        </div>
                    </NuxtLink>

                    <div class="flex gap-2 text-rose-600 px-6 py-2 items-center text-sm hover:bg-yellow-700 hover:text-white cursor-pointer" @click="logout()">
                        <div>
                            <icon name="mdi:login" />
                        </div>
                        <div>
                            <p>Logout</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
  const auth = authStore()
  const emit = defineEmits(["navAll"]);
  const openNav = ref(false)
  const nav = ref(false)
  const navAll = ()=>{
      nav.value = !nav.value
      emit('navAll')
      
  }

  const logout = async ()=>{
    await auth.handleLogout()
  }

</script>

<style>

</style>