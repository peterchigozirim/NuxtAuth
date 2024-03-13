

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
<script setup>

    const store = authStore()
    const app = appStore()
    const loading = ref(false)

    onBeforeMount(async()=>{
        if(store.isAuthenticated) {
            loading.value = true
            await store.handleFetchUser()
            loading.value = false
            if (!app.isFetched) {
                await app.handleFetch()
            }
        }
    })
</script>