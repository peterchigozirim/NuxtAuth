

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
<script setup>
    const store = authStore()

    onBeforeMount(async()=>{
        if(store.isAuthenticated) {
            await store.handleFetchUser()
        }
    })
</script>