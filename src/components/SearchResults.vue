<script setup lang="ts">
import type { Product } from '@/model/productModel';

const props = defineProps<{ product: Product }>();
const emit = defineEmits<{ (event: 'close'): void }>();
const router = useRouter();

function goToProduct() {
  emit('close');
  router.push(`/product/${props.product.id}`);
}
</script>

<template>
  <div class="results">
    <button @click="goToProduct">
      {{ product.title }}
    </button> 
  </div>
</template>