<script setup lang="ts">
import { useProductStore } from '@/stores/product';
import { storeToRefs } from 'pinia'

const productStore = useProductStore();

const { removeFromCart } = productStore;
const { getCartTotal } = storeToRefs(productStore)

</script>

<template>
  <div class="container">
    <h1>Checkout</h1>

    <div class="space" v-if="productStore.cartItems.length === 0">
      <p>There are no items in your cart</p>
    </div>

    <template v-else >
      <div class="table space border-b">
        <p style="width: 8rem"></p>
        <p>Product</p>
        <p>Unit Price</p>
        <p>Quantity</p>
        <p>Total Price</p>
        <p></p>
      </div>
      <div class="table space" v-for="(item, index) in productStore.cartItems" :key="index">
        <img :src="item.thumbnail" :alt="item.title">
        <p>{{ item.title }} <br/> {{ item.description }}</p>
        <p>{{ item.price }}</p>
        <p><button>-</button>{{ item.quantity }}<button>+</button></p>
        <p>{{ item.price * item.quantity }}</p>
        <button @click="removeFromCart(item)">Remove</button>
      </div>

      <div>
        <p>Subtotal: {{ getCartTotal }} </p>
        <p>Shipping: Free</p>
        <p>Total: {{ getCartTotal }}</p>
      </div>
    </template>
  </div>
  
</template>

<style scoped>
.table {
  display: grid;
  grid-template-columns: 8rem 4fr 1fr 1fr 1fr 1fr;
  gap: 2rem;
}
.space {
  margin-top: 1.5rem;
  padding-bottom: 1rem;
}

img {
  width: 8rem;
  aspect-ratio: 2 / 1;
  object-fit: cover;
}
</style>
