<script setup lang="ts">
import { useProductStore } from '@/stores/product';
import { onMounted } from 'vue';

const productStore = useProductStore();

const { getProductItem } = productStore;

const { id } = useRouteParams();

onMounted(() => {
  getProductItem(id);
});
</script>

<template>
  <div>
    <div class="product-images">
      <img src="https://picsum.photos/200/300" alt="product image" />
      <img src="https://picsum.photos/200/300" alt="product image" />
      <img src="https://picsum.photos/200/300" alt="product image" />
      <img src="https://picsum.photos/200/300" alt="product image" />
      <img src="https://picsum.photos/200/300" alt="product image" />
    </div>

    <div class="product-description">
      <h1> Title </h1>
      <p>Brand</p>
      <p> Description </p>
      <h3>Price</h3>
      <button>Add to cart</button>
    </div>
  </div>
  
</template>