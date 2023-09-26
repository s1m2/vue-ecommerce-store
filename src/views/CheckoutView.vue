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
    <RouterLink to="/">&lt; Continue Shopping</RouterLink>
  </div>
</template>

<style scoped>
.items {
  display: grid;
  grid-template-columns: 2fr auto;
  gap: 2rem;
}
</style>
