<script setup lang="ts">
type Props = {
  text: string
  img: string
}

defineProps<Props>()
</script>
<template>
  <div class="hero-background">
    <div class="container hero">
      <img :src="img" alt="hero-image" />
      <h1>{{ text }}</h1>
    </div>
  </div>
</template>

<style scoped>
.hero-background {
  background-color: aqua;
}
.hero {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  border-bottom: 1px solid #e2e8f0;
}

h1 {
  font-size: clamp(2rem, 5vw, 5rem);
  font-weight: 700;
}
</style>
