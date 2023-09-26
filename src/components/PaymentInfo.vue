<script setup lang="ts">
import IconCard from '@/components/icons/IconCard.vue'
import IconPaypal from '@/components/icons/IconPaypal.vue'
</script>

<template>
  <div class="payment">
    <h1>Payment Info.</h1>
    <p>Payment Method:</p>
    <div class="flex-form">
      <input type="radio" id="credit" name="credit" value="card" />
      <label for="credit"><IconCard /> Credit Card</label>
    </div>
    <div class="flex-form">
      <input type="radio" id="paypal" name="paypal" value="paypal" />
      <label for="paypal"><IconPaypal /> PayPal</label>
    </div>
    <div class="form-input">
      <input type="text" id="name" name="name" />
      <label for="name">Name On Card</label>
    </div>
    <div class="form-input">
      <input type="text" id="card" name="card" />
      <label for="card">Card Number</label>
    </div>
    <div>
      <input type="text" id="date" name="date" />
      <label for="date">Expiration Date</label>
    </div>
    <div>
      <input type="text" id="cvv" name="cvv" />
      <label for="cvv">CVV</label>
    </div>
    <button> Check Out </button>
  </div>
</template>

<style scoped>
.payment {
  padding: 1rem;
  background-color: hsl(0, 0%, 98%);
}

.flex-form {
  display: flex;
}
</style>