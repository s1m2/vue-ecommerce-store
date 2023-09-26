<script setup lang="ts">
import type { ProductWithQuantity } from '@/model/productModel';
const props = defineProps<ProductWithQuantity>()

const emit = defineEmits<{
  (e: 'updateQuantity', product: ProductWithQuantity, action: string): void
  (e: 'removeFromCart', product: ProductWithQuantity): void
}>()
</script>

<template>
  <div class="table space">
    <img :src="thumbnail" :alt="title" />
    <p>
      {{ title }} <br />
      {{ description }}
    </p>
    <p>{{ price }}</p>
    <p>
      <button @click="emit('updateQuantity', props, 'decrease')">-</button>
      {{ quantity}}
      <button @click="emit('updateQuantity', props, 'increase')">+</button>
    </p>
    <p>{{ price * quantity }}</p>
    <button @click="emit('removeFromCart', props)">Remove</button>
  </div>
</template>

<style scoped>
img {
  width: 8rem;
  aspect-ratio: 2 / 1;
  object-fit: cover;
}
</style>
