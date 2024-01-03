<script setup lang="ts">
defineProps<{ text?: string }>()
</script>

<template>
  <div class="bg-black text-white text-center py-4">
    <p>{{ text }}</p>
  </div>
</template>
