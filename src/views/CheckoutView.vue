<script setup lang="ts">
import Cart from '@/components/cart/Cart.vue'
import { useStripe } from '@/composables/stripe'

const { initializePaymentElement, handlePayment } = useStripe()

onMounted(() => {
  initializePaymentElement()
})
</script>

<template>
  <div class="max-w-screen-lg mx-auto my-7">
    <h1 class="text-xl">Checkout</h1>
    <div class="grid gap-8">
      <div class="border-b pb-10">
        <h2 class="text-lg font-semibold">Shipping Information</h2>
        <div id="shipping-info"></div>
      </div>

      <div class="border-b pb-10">
        <h2 class="text-lg font-semibold">Payment Information</h2>
        <div id="payment-info"></div>
      </div>

      <div class="border-b pb-10">
        <h2 class="text-lg font-semibold">Order Review</h2>
        <Cart />
      </div>

      <button class="bg-black text-white p-4" @click="handlePayment">Make Stripe Payment</button>
    </div>
  </div>
</template>
