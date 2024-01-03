<script setup lang="ts">
import Cart from '@/components/cart/Cart.vue'
import PaymentInfo from '@/components/PaymentInfo.vue'
</script>

<template>
  <div>
    <h1>Checkout</h1>
    <div>
      <Cart />
      <PaymentInfo />
    </div>
    <RouterLink to="/">&lt; Continue Shopping</RouterLink>
  </div>
</template>