<script setup lang="ts">
import AppInput from '@/components/AppInput.vue'
import IconCart from '@/components/icons/IconCart.vue'
import { useProductStore } from '@/stores/product';

const productStore = useProductStore();

const search = ref('')
</script>
<template>
  <header class="border-b">
    <div class="container flex">
      <RouterLink to="/"><h1>Digital Tech</h1></RouterLink>  
      <AppInput v-model="search" />
      <RouterLink to="/checkout" class="flex">
        <IconCart /> 
        <span v-if="productStore.cartItems.length > 0"> {{ productStore.cartItems.length }}</span>
      </RouterLink> 
    </div>
  </header>
</template>

<style scoped>

span {
  border-radius: 100%;
  height: 1.5rem;
  width: 1.5rem;
  padding: 0.1rem;
  background-color: #e2e8f0;
  text-align: center;
  margin-left: 0.5rem;
}
</style>
