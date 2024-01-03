<template>
  <div @click="toggle('dark')" class="cursor-pointer hidden dark:block">
    <icon  name="ph:moon-stars" class="text-lg"/>
  </div>
  <div @click="toggle('light')" class="cursor-pointer dark:hidden">
    <icon else name="material-symbols:light-mode" class="text-lg"/>
  </div>
</template>

<script setup>
  const colorMode = useColorMode()
  const toggle = (mode) => {
    if (colorMode.value === 'dark') {
      colorMode.preference = 'light'
    }else{
      colorMode.preference = 'dark'
    }
  }
</script>

<style>
  body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
</style>