<template>
    <div>
      Dashboard page
    </div>
</template>

<script  setup>
import {definePageMeta} from '#imports'

const store = authStore()

  onBeforeMount(async()=>{
    store.handleFetchUser()
  })
definePageMeta({
  layout: 'authlayout',
  middleware: ['auth']
})

</script>