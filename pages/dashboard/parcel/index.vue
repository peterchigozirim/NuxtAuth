<template>
  <div>
    parcel page
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'authlayout',
    middleware: ['auth']
  })
</script>

<style>

</style>