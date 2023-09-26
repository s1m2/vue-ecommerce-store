<script setup lang="ts">
import AppInput from '@/components/AppInput.vue'
import IconCart from '@/components/icons/IconCart.vue'
import { useProductStore } from '@/stores/product'

const productStore = useProductStore()

const search = ref('')
</script>
<template>
  <header class="border-b">
    <div class="container flex">
      <RouterLink to="/"><h1>Digital Tech</h1></RouterLink>
      <AppInput v-model="search" class="width" />
      <RouterLink to="/cart" class="position">
        <IconCart />
        <div class="badge" v-if="productStore.cartItems.length > 0">
          <p>{{ productStore.cartItems.length }}</p>
        </div>
      </RouterLink>
    </div>
  </header>
</template>

<style scoped>
h1 {
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  font-weight: 700;
}
.position {
  position: relative;
  display: flex;
}

.badge {
  position: absolute;
  top: -0.5rem;
  left: 1rem;
  border-radius: 100%;
  height: 1.4rem;
  width: 1.4rem;
  padding: 0.5rem;
  background-color: aqua;
  text-align: center;
}

.badge p {
  top: -0.5rem;
  left: -0.1rem;
  position: relative;
}

.width {
  width: 100%;
}
</style>
