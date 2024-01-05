<template>
    <div>
      Dashboard page
    </div>
</template>

<script  setup>
import {definePageMeta} from '#imports'


const store = authStore()
definePageMeta({
  layout: 'authlayout',
  middleware: ['watch-user']
})

</script>

<style>

</style>