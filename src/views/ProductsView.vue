<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import Hero from '@/components/AppHero.vue'
import Product from '@/components/Product.vue'
import AppLoader from '@/components/AppLoader.vue'
import IconClose from '@/components/icons/IconClose.vue'
import type { Product as ProductModel } from '@/model/productModel'

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
    <div class="max-w-screen-lg mx-auto px-6">
      <h2 class="text-xl my-8">Showing {{ allProducts.length }} items</h2>
      <div class="grid lg:grid-cols-[1fr_4fr] gap-10">
        <ul>
          <h3 class="text-xl mb-6">Shop By Categories</h3>
          <li
            v-for="(category, index) in categories"
            :key="index"
            class="text-lg p-2 cursor-pointer hover:text-green-600 hover:bg-gray-100"
            @click="selectCategory(category)"
          >
            {{ category }}
          </li>
        </ul>

        <div v-if="allProducts.length === 0">
          <h2>No products found</h2>
        </div>

        <div v-else>
          <div class="flex justify-between">
            <button
              class="flex gap-3 place-items-center mb-6 border py-2 px-4 rounded-3xl"
              v-if="selectedCategory"
            >
              {{ selectedCategory }}
              <IconClose class="pointer" height="18" width="18" @click="resetCategory()" />
            </button>
            <button class="flex gap-3 place-items-center mb-6 border py-2 px-4 rounded-3xl">
              Sort by: Highest Price
            </button>
          </div>
          <div class="grid grid-cols-auto-fit gap-4">
            <Product v-for="product in allProducts" :key="product.id" v-bind="product" />
          </div>
        </div>
      </div>
    </div>
  </template>
</template>
