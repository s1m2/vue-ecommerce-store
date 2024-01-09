<script setup lang="ts">
import IconStar from '@/components/icons/IconStar.vue'
import AppLoader from '@/components/AppLoader.vue'
import { useProductStore } from '@/stores/product'
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'

const productStore = useProductStore()
const cartStore = useCartStore()
const { addToCart } = cartStore
const { getProductItem } = productStore
const { product, isLoading } = storeToRefs(productStore)
const route = useRoute()

const currentImage = ref(0)

function changeImage(id: number) {
  currentImage.value = id
}

onMounted(() => {
  getProductItem(Number(route.params.id))
})
</script>

<template>
  <div class="max-w-screen-lg mx-auto" v-if="isLoading">
    <AppLoader />
  </div>

  <div class="max-w-screen-lg mx-auto" v-else>
    <div class="my-8">
      <RouterLink to="/" class="text-2xl hover:text-gray-800">&lt; Back to products</RouterLink>
    </div>

    <div class="grid lg:grid-cols-[1fr_1fr] gap-8">
      <div class="grid">
        <img
          :src="product?.images[currentImage]"
          :alt="product?.title"
          class="w-full aspect-auto object-contain"
        />
        <div class="flex">
          <img
            v-for="(image, index) in product?.images"
            :src="image"
            :alt="product?.title"
            :key="index"
            class="h-12 w-12 cursor-pointer"
            @click="changeImage(index)"
          />
        </div>
      </div>

      <div class="grid">
        <h1 class="text-4xl">{{ product?.title }}</h1>
        <p>{{ product?.brand }}</p>
        <p>{{ product?.description }}</p>
        <p v-if="product?.rating" class="flex">
          <IconStar v-for="rating in Math.floor(product?.rating)" :key="rating" />
          <span>{{ product?.rating }}</span>
        </p>
        <p>{{ product?.category }}</p>
        <h3 class="text-2xl font-semibold">£ {{ product?.price }}.00</h3>
        <button class="bg-black text-white" @click="addToCart(product)">Add to cart</button>
      </div>
    </div>
  </div>
</template>
