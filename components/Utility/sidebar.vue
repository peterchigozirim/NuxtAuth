<template>
   <div class="font-bold text-sm  h-full overflow-y-auto  scrollbar-none scrollbar-thumb-gray-500">
        <div class="w-10/12 mx-auto space-y-6 h-full py-6">
            <div class="mt-4 hidden md:block">
                <div class="h-24">
                    logo
                </div>
            </div>
            <div>
                <ul class="capitalize space-y-6">
                    <li>
                        <NuxtLink to="/dashboard" class="py-1 flex items-center hover:text-icon" active-class="text-orange-400">
                            <icon name="ri:dashboard-line" class="mr-2 text-xl text-white"/> <span>Dashboard</span>
                        </NuxtLink>
                    </li>

                    <li>
                        <NuxtLink to="/dashboard/parcel" class="py-1 flex items-center hover:text-icon" active-class="text-orange-400">
                            <icon name="mdi:truck-fast" class="mr-2 text-xl text-white"/> <span>Parcel Overview</span>
                        </NuxtLink>
                    </li>

                    <li>
                        <NuxtLink to="/dashboard/send-mail" class="py-1 flex items-center hover:text-icon" active-class="text-orange-400">
                            <icon name="solar:inbox-unread-outline" class="mr-2 text-xl text-white"/> <span>send-Mail</span>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/dashboard/quote-request" class="py-1 flex items-center hover:text-icon" active-class="text-orange-400">
                            <icon name="bi:chat-left-quote" class="mr-2 text-xl text-white"/> <span>Quote Request</span>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
    const emit = defineEmits(["close"]);
</script>

<style>

</style>