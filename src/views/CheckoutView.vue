<script setup lang="ts">
import Cart from '@/components/cart/Cart.vue'
import PaymentInfo from '@/components/PaymentInfo.vue'
</script>

<template>
  <div class="container">
    <h1>Checkout</h1>
    <div class="items">
      <Cart />
      <PaymentInfo />
    </div>
    <RouterLink to="/" class="link">&lt; Continue Shopping</RouterLink>
  </div>
</template>

<style scoped>
.items {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 2rem;
}
</style>
