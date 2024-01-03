<template>
    <div>
      Dashboard page
    </div>
</template>

<script  setup>
const store = authStore()
import {definePageMeta} from '#imports'

definePageMeta({
  layout: 'authlayout',
  middleware: ['auth']
})

</script>

<style>

</style>