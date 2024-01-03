<script setup lang="ts">
import Cart from '@/components/cart/Cart.vue'
import PaymentInfo from '@/components/PaymentInfo.vue'
</script>

<template>
  <div  class="max-w-screen-lg mx-auto">
    <h1>Checkout</h1>
    <div class="grid lg:grid-cols-[4fr_1fr] gap-8">
      <Cart />
      <PaymentInfo />
    </div>
    <RouterLink to="/">&lt; Continue Shopping</RouterLink>
  </div>
</template>