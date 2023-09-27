<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import Product from '@/components/Product.vue';
import AppLoader from '@/components/AppLoader.vue';
import { storeToRefs } from 'pinia'

import { useProductStore } from '@/stores/product';

const productStore = useProductStore();

const { getAllProducts } = productStore;
const { products, isLoading } = storeToRefs(productStore)

onMounted(() => {
  getAllProducts();
})
</script>

<template>
  <div class="container" v-if="isLoading">
    <AppLoader />
  </div>
  
  <template v-else>
    <Hero :img="products[0]?.thumbnail" text="Ultimate Online Store"/>
    <div class="container">
      <h2>Feature Products {{ isLoading.value }}</h2>
      <div class="products">
        <Product v-for="(product, index) in products" :key="index" v-bind="product" />
      </div>
    </div>
  </template>

</template>

<style scoped>
.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
}

h2 {
  margin-block-end: 1rem;
}
</style>