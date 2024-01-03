<template>
  <div>
    profile page
  </div>
</template>

<script setup>
  import {definePageMeta} from '#imports'

definePageMeta({
  layout: 'authlayout',
  middleware: ['auth']
})
</script>

<style>

</style>