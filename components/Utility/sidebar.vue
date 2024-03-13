<template>
   <div class="font-bold text-sm  h-full overflow-y-auto z-50 scrollbar-none scrollbar-thumb-gray-500">
        <div class="w-10/12 mx-auto space-y-6 h-full py-6">
            <div class="mt-4 hidden md:block">
                <div class="h-16 text-2xl font-serif">
                    <img src="/images/logo.png" alt="">
                </div>
            </div>
            <div>
                <ul class="capitalize space-y-6">
                    <li>
                        <NuxtLink @click="emit('close')" to="/dashboard" class="py-1 flex items-center hover:text-icon" active-class="text-orange-400">
                            <icon name="ri:dashboard-line" class="mr-2 text-xl text-white"/> <span>Dashboard</span>
                        </NuxtLink>
                    </li>

                    <li>
                        <NuxtLink @click="emit('close')" to="/dashboard/parcel" class="py-1 flex items-center hover:text-icon" active-class="text-orange-400">
                            <icon name="mdi:truck-fast" class="mr-2 text-xl text-white"/> <span>Parcel Overview</span>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink @click="emit('close')" to="/dashboard/mail" class="py-1 flex items-center hover:text-icon" active-class="text-orange-400">
                            <icon name="material-symbols:contact-mail-outline-sharp" class="mr-2 text-xl text-white"/> <span>Send-Mail</span>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink @click="emit('close')" to="/dashboard/mail/view-mail" class="py-1 flex items-center hover:text-icon" active-class="text-orange-400">
                            <icon name="solar:inbox-unread-outline" class="mr-2 text-xl text-white"/> <span>View-Mail</span>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink @click="emit('close')" to="/dashboard/contact" class="py-1 flex items-center hover:text-icon" active-class="text-orange-400">
                            <icon name="material-symbols:contact-phone" class="mr-2 text-xl text-white"/> <span>Contact</span>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink @click="emit('close')" to="/dashboard/quote-request" class="py-1 flex items-center hover:text-icon" active-class="text-orange-400">
                            <icon name="bi:chat-left-quote" class="mr-2 text-xl text-white"/> <span>Quote Request</span>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink @click="emit('close')" to="/dashboard/manage-app" class="py-1 flex items-center hover:text-icon" active-class="text-orange-400">
                            <icon name="material-symbols:settings" class="mr-2 text-xl text-white"/> <span>Manage App</span>
                        </NuxtLink>
                    </li>
                    <li v-if="userStore.user.roles === 'admin' || userStore.user.roles === 'superAdmin'">
                        <NuxtLink @click="emit('close')" to="/dashboard/user" class="py-1 flex items-center hover:text-icon" active-class="text-orange-400">
                            <icon name="material-symbols:settings-account-box-rounded" class="mr-2 text-xl text-white"/> <span>Manage User</span>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
    const emit = defineEmits(["close"]);

    const userStore = authStore()

</script>

<style>

</style>