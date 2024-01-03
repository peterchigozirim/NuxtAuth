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
                        <NuxtLink to="#" class="py-1 flex items-center hover:text-icon" active-class="text-icon">
                            <i class="ri-function-fill mr-2 text-xl"></i> <span>Trade</span>
                        </NuxtLink>
                    </li>

                    <li>
                        <NuxtLink to="#" class="py-1 flex items-center hover:text-icon" active-class="text-icon">
                            <i class="ri-bar-chart-fill mr-2 text-xl"></i> <span>Trade Overview</span>
                        </NuxtLink>
                    </li>

                    <li>
                        <NuxtLink to="#" class="py-1 flex items-center hover:text-icon" active-class="text-icon">
                            <i class="ri-currency-fill mr-2 text-xl"></i> <span>Deposit</span>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="#" class="py-1 flex items-center hover:text-icon" active-class="text-icon">
                            <i class="ri-arrow-up-circle-line mr-2 text-xl"></i> <span>Withdraw</span>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="#" class="py-1 flex items-center hover:text-icon" active-class="text-icon">
                            <i class="ri-settings-3-fill mr-2 text-xl"></i> <span>Settings</span>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>