<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'

import CartItem from '@/components/cart/CartItem.vue'

const cartStore = useCartStore()
const { removeFromCart, updateProductQuantity } = cartStore
const { getCartTotal, cartItems } = storeToRefs(cartStore)
</script>

<template>
  <div class="space" v-if="cartItems.length === 0">
    <p>There are no items in your cart</p>
  </div>

  <template v-else>
    <table class="table-auto border-separate border-spacing-6">
      <thead>
        <tr>
          <th></th>
          <th>Product</th>
          <th>Unit Price</th>
          <th>Quantity</th>
          <th>Total Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <CartItem
          v-for="(item, index) in cartItems"
          :key="index"
          v-bind="item"
          @remove-from-cart="removeFromCart"
          @update-quantity="updateProductQuantity"
        />
      </tbody>

      <div class="calculation border-t border-b py-3 text-right">
      <p class="text-xl">Subtotal: £{{ getCartTotal }}.00</p>
      <p class="text-xl">Shipping: Free</p>
      <p class="text-2xl font-semibold">Total: £{{ getCartTotal }}.00</p>
    </div>
    </table>


  </template>
</template>
