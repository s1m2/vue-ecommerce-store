<script setup lang="ts">
import IconAdd from '@/components/icons/IconAdd.vue'
import IconClose from '@/components/icons/IconClose.vue'
import IconSubtract from '@/components/icons/IconSubtract.vue'

import type { ProductWithQuantity } from '@/model/productModel'
const props = defineProps<ProductWithQuantity>()

const emit = defineEmits<{
  (e: 'updateQuantity', product: ProductWithQuantity, action: string): void
  (e: 'removeFromCart', product: ProductWithQuantity): void
}>()
</script>

<template>
  <tr>
    <td>
      <img :src="thumbnail" :alt="title" class="w-36"/>
    </td>
    <td>
      {{ title }} <br />
      <span class="font-size">{{ description }}</span>
    </td>
    <td>£{{ price }}.00</td>
    <td class="flex self-center gap-3">
      <IconSubtract class="cursor-pointer" @click="emit('updateQuantity', props, 'decrease')" />
      {{ quantity }}
      <IconAdd class="cursor-pointer" @click="emit('updateQuantity', props, 'increase')" />
    </td>
    <td>{{ price * quantity }}</td>
    <td class="cursor-pointer"><IconClose class="pointer" @click="emit('removeFromCart', props)" /></td>
  </tr>
</template>