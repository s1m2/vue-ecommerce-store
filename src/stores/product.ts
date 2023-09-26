import { defineStore } from 'pinia'
import { getProducts, getProduct } from '@/lib/api'
import type { Product } from '@/model/productModel'

export const useProductStore = defineStore('product', () => {
  const products = ref<Product[] | []>([])
  const cartItems = ref<Product[] | []>([])
  const product = ref<Product | null>(null)

  const getAllProducts = async () => {
    try {
      const data = await getProducts()
      const response = await data.json()
      products.value = response.products
    } catch (error) {
      console.error(error)
    }
  }

  const getProductItem = async (id: number) => {
    try {
      const data = await getProduct(id)
      product.value = await data.json()
    } catch (error) {
      console.error(error)
    }
  }

  const addToCart = (product: Product) => {
    const item = cartItems.value.find((item: Product) => item.id === product.id)
    if (item) {
      item.quantity++
      return
    }
    cartItems.value.push({...product, quantity: 1})
  }

  return { products, getAllProducts, addToCart, cartItems, getProductItem, product }
})
