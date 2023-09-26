<script setup lang="ts">
import { useProductStore } from '@/stores/product'
import { storeToRefs } from 'pinia'

import CartItem from '@/components/cart/CartItem.vue'

const productStore = useProductStore()

const { removeFromCart, updateProductQuantity } = productStore
const { getCartTotal, cartItems } = storeToRefs(productStore)
</script>

<template>
  <div class="cart">
    <div class="space" v-if="productStore.cartItems.length === 0">
      <p>There are no items in your cart</p>
    </div>

    <div class="table space border-b" v-else>
      <p style="width: 8rem"></p>
      <p>Product</p>
      <p>Unit Price</p>
      <p>Quantity</p>
      <p>Total Price</p>
      <p></p>
    </div>

    <CartItem
      v-for="(item, index) in cartItems"
      :key="index"
      v-bind="item"
      @remove-from-cart="removeFromCart"
      @update-quantity="updateProductQuantity"
    />

    <div class="calculation border-t">
      <p>Subtotal: £ {{ getCartTotal }}</p>
      <p>Shipping: Free</p>
      <p class="total border-t">Total: £ {{ getCartTotal }}</p>
    </div>
  </div>
</template>

<style scoped>
.calculation {
  display: grid;
  position: relative;
  padding: 1.5rem 0;
  justify-content: end;
}
.calculation p {
  margin-bottom: 0.5rem;
}

.total {
  font-size: 1.5rem;
  font-weight: 800;
  padding: 1rem 0;
}
</style>