

<template>
    <VitePwaManifest />
    <NuxtLoadingIndicator  />
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
<script setup>
    // If you want to use it in setup, import from the nuxtApp.
   

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