import { defineStore } from 'pinia';
import type { Product, ProductWithQuantity } from '@/model/productModel'

export const useCartStore = defineStore('cart', () => {
  const cartItems = ref<ProductWithQuantity[]>(JSON.parse(localStorage.getItem('cartItems')) || []);

  const getCartTotal = computed(() => {
    return cartItems.value.reduce(
      (acc: number, item: ProductWithQuantity) => acc + item.price * item.quantity,
      0
    )
  });

  function checkIfCartIsEmpty() {
    return cartItems.value.length === 0;
  }

  function clearCart() {
    cartItems.value = [];
    localStorage.removeItem('cartItems');
  }

  const checkIfProductExistsInCart = (product: Product) => {
    return cartItems.value.find((item: Product) => item.id === product.id)
  };

  const addToCart = (product: Product) => {
    const item: ProductWithQuantity | undefined = checkIfProductExistsInCart(product) as ProductWithQuantity | undefined;

    if (item) {
      item.quantity++
      return
    }
    
    cartItems.value.push({ ...product, quantity: 1 });
    localStorage.setItem('cartItems', JSON.stringify(cartItems.value));
  };

  const removeFromCart = (product: Product) => {
    const item = checkIfProductExistsInCart(product);
    if (item) cartItems.value = cartItems.value.filter((item: Product) => item.id !== product.id);
    if (checkIfCartIsEmpty()) localStorage.removeItem('cartItems');
  };

  const updateProductQuantity = (product: Product, action: string) => {
    const item = checkIfProductExistsInCart(product);
    if (item) {
      if (action === 'increase') return item.quantity++
      if (action === 'decrease' && item.quantity > 1) return item.quantity--
      removeFromCart(product)
    }
  }

  return { cartItems, getCartTotal, addToCart, removeFromCart, updateProductQuantity, clearCart }
});