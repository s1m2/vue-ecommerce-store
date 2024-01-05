<script setup lang="ts">
type Props = {
  text: string
  img: string
}

defineProps<Props>()
</script>
<template>
  <div class="bg-green-600 p-4">
    <div class="flex gap-10 max-w-screen-lg mx-auto">
      <img :src="img" alt="hero-image" />
      <div class="hidden lg:grid">
        <h1 class="text-7xl">{{ text }}</h1>
        <p class="text-2xl">All your shopping needs uned one roof</p>
      </div>
    </div>
  </div>
</template>
