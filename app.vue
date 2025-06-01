<template>
  <div>
    <NuxtLayout class="layouts">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>

useHead({
  titleTemplate: '%s - Meta Tags Example',
})
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>