<script setup lang="ts">
import IconCart from '@/components/icons/IconCart.vue';
import type { Product } from '@/model/productModel'
import { useProductStore } from '@/stores/product';

const props = defineProps<Product>()

const productStore = useProductStore();
const { addToCart } = productStore;

const addItemToCart = () => {
  addToCart(props)
}

</script>
<template>
  <div class="card">
    <RouterLink :to="{ name:'product', params:{id: id}}">
      <img :src="thumbnail" :alt="title" class="card__img" />
    </RouterLink> 
    <h1>{{ title }}</h1>
    <p> £ {{ price }}</p>
    <button class="card__button" @click="addItemToCart"><IconCart /></button>
  </div>
</template>

<style scoped> 
.card {
  border: 1px solid #e2e8f0;
  padding: 0.85rem;
}

.card__img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}

.card__button {
  display: flex;
  align-items: center;
  width: 100%;
  outline: none;
  border: none;
  padding: 0.85rem;
  text-align: center;
}

.card__button:hover {
  cursor: pointer;
  background-color: #e2e8f0;
}


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
