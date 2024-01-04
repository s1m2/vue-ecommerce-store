<script setup lang="ts">
import Cart from '@/components/cart/Cart.vue';

const token = ref(null)
const stripe = ref(null)
const elements = ref(null)

async function initializePaymentElement() {
  const response = await fetch('http://localhost:4242/create-payment-intent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ amount: 1099 })
  })

  const { clientSecret } = await response.json()
  token.value = clientSecret
  stripe.value = Stripe(
    'pk_test_51Hw6gsLsmY8VNNHcZF2z8MsIN9IsKYLCZlobPsaPgGKyp92tOp9J0KLkHnKX4HXWuUkzDNCV9Zpj6TiyojPolxST00gbaYsjtW'
  )
  const options = { clientSecret }

  elements.value = stripe.value.elements(options)
  const paymentElement = elements.value.create('payment')
  paymentElement.mount('#payment-info')
}

async function handlePayment() {
  const { error } = await stripe.value.confirmPayment({
    elements: elements.value,
    confirmParams: {
      return_url: 'http://localhost:5371/success'
    }
  })

  if (error.type === 'card_error' || error.type === 'validation_error') {
    alert(error.message)
  } else {
    window.location.href = 'http://localhost:5371/success'
  }
}

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

      <Cart />
      <button class="bg-black text-white p-4" @click="handlePayment">Make Stripe Payment</button>
    </div>
  </div>
</template>
