<script setup lang="ts">
import IconCart from '@/components/icons/IconCart.vue';
import type { Product } from '@/model/productModel'
import { useProductStore } from '@/stores/product';

const productStore = useProductStore();

const { addToCart } = productStore;

const props = defineProps<Product>()

const addItemToCart = () => {
  addToCart(props)
}

</script>
<template>
  <div class="card">
    <img :src="thumbnail" :alt="title" class="card__img" />
    <h1>{{ title }}</h1>
    <p> £ {{ price }}</p>
    <button class="card__button" @click="addItemToCart"><IconCart /></button>
  </div>
</template>

<style scoped> 
h1 {
  font-size: clamp(1rem, 1.5vw, 1.8rem);
  margin-bottom: 1rem;
}

p {
  font-size: clamp(1rem, 1vw, 1.5rem);
  margin-bottom: 1rem;
  font-weight: 900;
}
</style>
