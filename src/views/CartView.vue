<script setup lang="ts">
import CartWrapper from '@/components/cart/CartWrapper.vue'
</script>

<template>
  <div class="max-w-screen-lg mx-auto my-7">
    <h1 class="text-xl">Shopping Cart</h1>
    <CartWrapper />
    <div class="flex justify-between mt-8">
      <RouterLink class=" bg-black text-white p-4 hover:bg-gray-700" to="/">Continue Shopping</RouterLink>
      <RouterLink class=" bg-black text-white p-4 hover:bg-gray-700" to="/checkout">Continue to Checkout</RouterLink>
    </div>
  </div>
</template>
