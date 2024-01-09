<script setup lang="ts">
import CartWrapper from '@/components/cart/CartWrapper.vue'
</script>

<template>
  <div class="max-w-screen-lg mx-auto my-7">
    <h1 class="text-xl">Shopping Cart</h1>
    <CartWrapper />
    <div class="flex justify-between mt-8">
      <RouterLink class="text-xl" to="/">&lt; Continue Shopping</RouterLink>
      <RouterLink class="text-xl" to="/checkout">Continue to Stripe Checkout ></RouterLink>
    </div>
  </div>
</template>
