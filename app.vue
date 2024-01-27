

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
<script setup>
    const store = authStore()

    onBeforeMount(async()=>{
        store.handleFetchUser()
    })
</script>