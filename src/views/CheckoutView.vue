<script setup lang="ts">
import CartWrapper from '@/components/cart/CartWrapper.vue';
import AppSpinner from '@/components/AppSpinner.vue';
import { useStripe } from '@/composables/stripe';

const { status, initializePaymentElement, handlePayment } = useStripe();

onMounted(() => {
  initializePaymentElement();
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
        <AppSpinner v-if="status === 'loading'" />
        <div id="payment-info"></div>
      </div>

      <div class="border-b pb-10">
        <h2 class="text-lg font-semibold">Order Review</h2>
        <CartWrapper />
      </div>

      <button class="bg-black text-white p-4" @click="handlePayment">Make Stripe Payment</button>
    </div>
  </div>
</template>
