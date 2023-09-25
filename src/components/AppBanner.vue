<script setup lang="ts">
  type Props = {
    text: string,
  }

  defineProps<Props>()
</script>

<template>
  <div class="banner">
    <p>{{ text }}</p>
  </div>
</template>

<style scoped>
.banner {
  background-color: black;
  color: azure;
  padding: 0.65rem;
  text-align: center;
}
</style>