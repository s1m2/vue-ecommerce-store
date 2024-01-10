<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import Hero from '@/components/AppHero.vue';
import ProductItem from '@/components/ProductItem.vue';
import AppLoader from '@/components/AppLoader.vue';
import IconClose from '@/components/icons/IconClose.vue';
import AppAccordion from '@/components/AppAccordion.vue';
import type { Product as ProductModel } from '@/model/productModel';

import { storeToRefs } from 'pinia'
import { useProductStore } from '@/stores/product'

const productStore = useProductStore()
const { getAllProducts, getAllCategories } = productStore
const { products, isLoading, categories } = storeToRefs(productStore)

const router = useRouter()
const route = useRoute()

const allProducts = ref<ProductModel[]>([])
const selectedCategory = ref<string>('')

function selectCategory(category: string) {
  router.push({ query: { category } })
  selectedCategory.value = category
  allProducts.value = products.value.filter((product) => product.category === category)
  window.scrollTo(0, 0)
}

function resetCategory() {
  router.push({ query: { category: null } })
  selectedCategory.value = ''
  allProducts.value = products.value
}

onMounted(async () => {
  await getAllProducts()
  await getAllCategories()
  allProducts.value = products.value
  if (route.query.category) selectCategory(route.query.category as string)
})
</script>

<template>
  <div class="max-w-screen-lg mx-auto" v-if="isLoading">
    <AppLoader />
  </div>

  <template v-else>
    <Hero v-if="products.length" :img="products[0]?.thumbnail" text="Ultimate Online Store" />
    <div class="max-w-screen-lg mx-auto px-6 mt-8">
      <div class="grid lg:grid-cols-[1fr_4fr] gap-10">
        <div>
          <p class="mb-1 font-semibold">REFINE BY:</p>
          <p class="pb-2 mb-2 border-b">You have selected:</p>
          <AppAccordion title="CATEGORY" :list="categories" />
        </div>
        
        <div v-if="allProducts.length === 0">
          <h2>No products found</h2>
        </div>

        <div v-else>
          <div class="flex justify-between items-center mb-7">
            <p>Showing {{ allProducts.length }} items</p>
            <button class="flex gap-3 place-items-center border py-2 px-4">
              Sort by: Newest First
            </button>
          </div>
          <div class="grid grid-cols-auto-fit gap-4">
            <ProductItem v-for="product in allProducts" :key="product.id" v-bind="product" />
          </div>
        </div>
      </div>
    </div>
  </template>
</template>
