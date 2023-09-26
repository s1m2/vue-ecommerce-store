<script setup lang="ts">
import Cart from '@/components/cart/Cart.vue'
</script>

<template>
  <div class="container">
    <h1>Shopping Cart</h1>
    <Cart />
    <div class="cta">
      <RouterLink to="/products">&lt; Continue Shopping</RouterLink>
      <RouterLink to="/checkout">Continue to Checkout ></RouterLink>
    </div>
  </div>
</template>

<style scoped>
.cta {
  display: flex;
  justify-content: space-between;
}
</style>
