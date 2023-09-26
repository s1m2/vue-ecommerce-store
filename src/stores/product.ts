import { defineStore } from 'pinia'
import { getProducts, getProduct } from '@/lib/api'
import type { Product, ProductWithQuantity } from '@/model/productModel'

export const useProductStore = defineStore('product', () => {
  const products = ref<Product[] | []>([])
  const cartItems = ref<ProductWithQuantity[] | []>([])
  const product = ref<Product | null>(null)

  const isLoading = ref(false)
  const isError = ref(false)

  const getCartTotal = computed(() => {
    return cartItems.value.reduce((acc: number, item: ProductWithQuantity) => acc + item.price * item.quantity, 0)
  })

  const handleErrors = (error: any) => {
    isLoading.value = false
    isError.value = true
    console.error(error)
  }

  const getAllProducts = async () => {
    isLoading.value = true
    isError.value = false
    try {
      const data = await getProducts()
      const response = await data.json()
      products.value = response.products
      isLoading.value = false
    } catch (error) {
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

  const checkIfProductExistsInCart = (product: Product) => { 
    return cartItems.value.find((item: Product) => item.id === product.id)
  }

  const addToCart = (product: Product) => {
    const item = checkIfProductExistsInCart(product)
    
    if (item) {
      item.quantity++
      return
    }
    cartItems.value.push({...product, quantity: 1})
    localStorage.setItem('cart', JSON.stringify(cartItems.value))
  }

  const removeFromCart = (product: Product) => {
    const item = checkIfProductExistsInCart(product)
    if (item) cartItems.value = cartItems.value.filter((item: Product) => item.id !== product.id)
  }

  const updateProductQuantity = (product: Product, action: string) => {
    const item = checkIfProductExistsInCart(product)
    if (item) {
      if (action === 'increase') item.quantity++
      if (action === 'decrease' && item.quantity > 1) item.quantity--
      removeFromCart(product)
    }
  }

  return { products, getAllProducts, addToCart, cartItems, getProductItem, product, removeFromCart, getCartTotal, isLoading, isError, updateProductQuantity }
})
