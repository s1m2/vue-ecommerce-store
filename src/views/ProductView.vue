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
  getProductItem(route.params.id)
})
</script>

<template>
  <div class="container" v-if="isLoading">
    <AppLoader />
  </div>

  <div class="container" v-else>
    <div class="link">
      <RouterLink to="/" class="link">&lt; Back to products</RouterLink>
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

<style scoped>
.link {
  margin-block-end: 2rem;
}
.rating {
  display: flex;
}
.rating span {
  margin-left: 0.5rem;
}
.products {
  display: grid;
  grid-gap: 4rem;
}
.products p {
  margin-block-end: 1rem;
}
.product__images {
  display: grid;
}

.list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.featured {
  width: 100%;
  aspect-ratio: 2 / 1;
  object-fit: contain;
  margin-bottom: 2rem;
}

.product__image__list {
  width: 5rem;
  aspect-ratio: 2 / 1;
  object-fit: contain;
  margin-bottom: 2rem;
}

.products button {
  margin-block-start: 2rem;
  width: 100%;
}

h1 {
  font-size: clamp(1.5rem, 5vw, 4rem);
}

@media (min-width: 48rem) {
  .products {
    grid-template-columns: 1fr 1fr;
  }

  .product__images {
    grid-template-columns: auto 1fr;
  }

  .list {
    display: grid;
  }
}
</style>
