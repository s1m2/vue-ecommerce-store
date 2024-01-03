<script setup lang="ts">
import IconStar from '@/components/icons/IconStar.vue'
import AppLoader from '@/components/AppLoader.vue'
import { useProductStore } from '@/stores/product'
import { storeToRefs } from 'pinia'

const productStore = useProductStore()
const { getProductItem, addToCart } = productStore
const { product, isLoading } = storeToRefs(productStore)
const route = useRoute()

const currentImage = ref(0)

const changeImage = (id: number) => (currentImage.value = id)

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
    


    <div class="products">
      <div class="product__images">
        <div class="list">
          <img
            v-for="(image, index) in product?.images"
            :src="image"
            :alt="product?.title"
            :key="index"
            class="product__image__list"
            @click="changeImage(index)"
          />
        </div>
        <img :src="product?.images[currentImage]" :alt="product?.title" class="featured" />
      </div>
      <div class="product-description">
        <h1>{{ product?.title }}</h1>
        <p>{{ product?.brand }}</p>
        <p>{{ product?.description }}</p>
        <p v-if="product?.rating" class="rating">
          <IconStar v-for="rating in Math.floor(product?.rating)" :key="rating" />
          <span>{{ product?.rating }}</span>
        </p>
        <p>{{ product?.category }}</p>
        <h3>£ {{ product?.price }}</h3>
        <button @click="addToCart(product)">Add to cart</button>
      </div>
    </div>
  </div>
</template>