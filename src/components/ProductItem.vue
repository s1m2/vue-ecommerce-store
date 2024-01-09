<script setup lang="ts">
import IconCart from '@/components/icons/IconCart.vue'
import type { Product } from '@/model/productModel'
import { useCartStore } from '@/stores/cart'

const props = defineProps<Product>()

const productStore = useCartStore()
const { addToCart } = productStore
</script>
<template>
  <div class="border shadow-md grid gap-2">
    <RouterLink :to="{ name: 'product', params: { id: id } }">
      <img :src="thumbnail" :alt="title" class="aspect-square object-cover" />
    </RouterLink>
    <div class="grid ps-4 h-32">
      <h1 class="text-xl">{{ title }}</h1>
      <p class="text-lg">{{ brand }}</p>
      <p>£ {{ price }}</p>
    </div>

    <button
      class="flex gap-4 justify-center place-items-center text-lg p-4 bg-black text-white hover:bg-gray-700"
      @click="addToCart(props)"
    >
      <IconCart /> Add To Cart
    </button>
  </div>
</template>
