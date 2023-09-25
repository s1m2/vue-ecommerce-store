<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import Product from '@/components/Product.vue';

import { useProductStore } from '@/stores/product';

const productStore = useProductStore();

const { getAllProducts } = productStore;

onMounted(() => {
  getAllProducts();
})
</script>

<template>
  <Hero :img=" productStore?.products[0]?.thumbnail" text="Ultimate Online Store"/>
  
  <div class="container">
    <h2>Feature Products</h2>
    <div class="grid">
      <Product v-for="(product, index) in productStore.products" :key="index" v-bind="product" />
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
}
</style>