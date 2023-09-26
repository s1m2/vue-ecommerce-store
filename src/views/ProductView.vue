<script setup lang="ts">
import { useProductStore } from '@/stores/product';
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia'

const productStore = useProductStore();
const { getProductItem } = productStore;
const { product } = storeToRefs(productStore)
const route = useRoute()

onMounted(() => {
  getProductItem(route.params.id);
});
</script>

<template>
  <div class="container grid">
    <div class="product-images">
    
      <div class="div">
        <img v-for="(image, index) in product?.images" :src="image" :alt="product?.title" :key="index" class="product__image__list"/>
      </div>
      <img :src="product?.images[0]" :alt="product?.title" class="featured" />
     
    </div>

    <div class="product-description">
      <h1> {{ product?.title}} </h1>
      <p>{{ product?.brand }}</p>
      <p> {{ product?.description }} </p>
      <h3>£ {{ product?.price }}</h3>
      <button>Add to cart</button>
    </div>
  </div>
  
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
}

.product-images {
  display: grid;
  grid-template-columns: auto 1fr;
}

.featured {
  width: 100%;
  aspect-ratio: 2 / 1;
  object-fit: contain;
  margin-bottom: 2rem;
}

.product__image__list {
  width: 5rem;
  aspect-ratio: 2 / 1;
  object-fit: contain;
  margin-bottom: 2rem;
}
</style>
