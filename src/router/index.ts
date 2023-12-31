import { createRouter, createWebHistory } from 'vue-router'
import ProductsView from '@/views/ProductsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'products',
      component: ProductsView
    },
    {
      path: '/product/:id',
      name: 'product',
      // route level code-splitting
      component: () => import('@/views/ProductView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      // route level code-splitting
      component: () => import('@/views/CartView.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      // route level code-splitting
      component: () => import('@/views/CheckoutView.vue')
    },
    {
      path: '/success',
      name: 'success',
      // route level code-splitting
      component: () => import('@/views/SuccessPurchase.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

export default router
