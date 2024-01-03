<script setup lang="ts">
import Cart from '@/components/cart/Cart.vue'
</script>

<template>
  <div>
    <h1>Shopping Cart</h1>
    <Cart />
    <div class="cta">
      <RouterLink to="/" class="link">&lt; Continue Shopping</RouterLink>
      <RouterLink to="/checkout" class="link">Continue to Checkout ></RouterLink>
    </div>
  </div>
</template>
