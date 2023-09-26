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
    <p>{{ brand }}</p>
    <p> £ {{ price }}</p>
    <button class="card__button" @click="addItemToCart"><IconCart /> Add To Cart</button>
  </div>
</template>

<style scoped> 
.card {
  display: grid;
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
  align-self: baseline;
  justify-content: space-evenly;
}


h1 {
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  margin-block: 1rem;
}

p {
  font-size: clamp(1rem, 1vw, 1.1rem);
  margin-bottom: 0.25rem;
}
</style>
