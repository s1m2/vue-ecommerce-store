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
    <table class="table-auto border-separate border-spacing-4">
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
        <tr class="text-xl text-right">
          <td colspan="5">Subtotal:</td>
          <td>£{{ getCartTotal }}.00</td>
        </tr>
        <tr class="text-xl text-right">
          <td colspan="5">Shipping:</td>
          <td>Free</td>
        </tr>
        <tr class="text-xl font-semibold text-right">
          <td colspan="5">Total:</td>
          <td>£{{ getCartTotal }}.00</td>
        </tr>
      </tbody>
    </table>
  </template>
</template>
