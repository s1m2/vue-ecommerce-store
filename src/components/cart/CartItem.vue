<script setup lang="ts">
import IconAdd from '@/components/icons/IconAdd.vue'
import IconClose from '@/components/icons/IconClose.vue'
import IconSubtract from '@/components/icons/IconSubtract.vue'

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
      <span class="font-size">{{ description }}</span>
    </p>
    <p>{{ price }}</p>
    <p class="quantity">
      <IconSubtract class="pointer" @click="emit('updateQuantity', props, 'decrease')"/>
      {{ quantity}}
      <IconAdd class="pointer" @click="emit('updateQuantity', props, 'increase')"/>
    </p>
    <p>{{ price * quantity }}</p>
    <IconClose class="pointer" @click="emit('removeFromCart', props)"/>
  </div>
</template>

<style scoped>
.font-size {
  font-size: 0.9rem;
}
.quantity {
  display: flex;
  justify-content: space-between;
}

.pointer {
  cursor: pointer;
}

img {
  width: 8rem;
  aspect-ratio: 2 / 1;
  object-fit: cover;
}
</style>
