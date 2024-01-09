<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import AppInput from '@/components/AppInput.vue'
import IconCart from '@/components/icons/IconCart.vue'

const SearchResults = defineAsyncComponent(() => import('@/components/SearchResults.vue'))

import { storeToRefs } from 'pinia'
import { useProductStore } from '@/stores/product'
import { useCartStore } from '@/stores/cart'

const productStore = useProductStore()
const { searchProduct } = productStore
const { cartItems } = storeToRefs(useCartStore())

const search = ref('')
const showSearchResultsOverlay = ref(false)

watch(search, (value: string) => {
  if (value !== '') {
    searchProduct(value)
    showSearchResultsOverlay.value = true
  } else {
    showSearchResultsOverlay.value = false
  }
})
</script>
<template>
  <header class="border-b py-6">
    <div class="mx-auto flex max-w-screen-lg justify-between gap-4">
      <RouterLink to="/"><h1 class="text-2xl">Digital Tech</h1></RouterLink>
      <div class="">
        <AppInput v-model="search" />
        <div v-if="showSearchResultsOverlay">
          <SearchResults
            v-for="(product, index) in productStore.searchResults"
            :product="product"
            :key="index"
            @close="showSearchResultsOverlay = false"
          />
        </div>
      </div>

      <RouterLink class="flex" to="/cart">
        <IconCart />
        <div
          class="flex place-items-center justify-center bg-red-500 text-white h-6 w-6 rounded-full"
          v-if="cartItems.length > 0"
        >
          <p>{{ cartItems.length }}</p>
        </div>
      </RouterLink>
    </div>
  </header>
</template>
