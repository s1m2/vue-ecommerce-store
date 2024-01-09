import { defineStore } from 'pinia'
import { getProducts, getProduct, searchProducts, getCategories } from '@/lib/api'
import type { Product } from '@/model/productModel'

export const useProductStore = defineStore('product', () => {
  const products = ref<Product[]>([])
  const searchResults = ref<Product[]>([])
  const product = ref<Product | null>(null)
  const categories = ref<string[]>([])

  const isLoading = ref(false)
  const isError = ref(false)
  const errorMessage = ref('')

  const handleErrors = (error: unknown) => {
    isLoading.value = false
    isError.value = true
    errorMessage.value = error as string
  }

  const getAllProducts = async () => {
    isLoading.value = true
    isError.value = false
    try {
      const data = await getProducts()
      const response = await data.json()
      products.value = response.products
      isLoading.value = false
    } catch (error: unknown) {
      handleErrors(error)
    }
  }

  const getProductItem = async (id: number) => {
    isLoading.value = true
    isError.value = false
    try {
      const data = await getProduct(id)
      product.value = await data.json()
      isLoading.value = false
    } catch (error) {
      handleErrors(error)
    }
  }

  const searchProduct = async (query: string) => {
    try {
      const data = await searchProducts(query)
      const response = await data.json()
      searchResults.value = response.products
    } catch (error) {
      handleErrors(error)
    }
  }

  const getAllCategories = async () => {
    try {
      const data = await getCategories()
      const response = await data.json()
      categories.value = response
    } catch (error) {
      handleErrors(error)
    }
  }

  return {
    categories,
    getAllCategories,
    searchResults,
    products,
    getAllProducts,
    getProductItem,
    searchProduct,
    product,
    isLoading,
    isError
  }
})
