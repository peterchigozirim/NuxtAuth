<template>
    <div>
      Dashboard page
    </div>
</template>

<script  setup>

const store = authStore()

  onBeforeMount(async()=>{
    store.handleFetchUser()
  })
definePageMeta({
  layout: 'authlayout',
  middleware: ['auth']
})

</script>