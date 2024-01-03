import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useProductStore } from '@/stores/product'

describe('Product Store', () => {
  beforeEach(() => {
    vi.resetAllMocks()
    setActivePinia(createPinia())
  })

  describe('getAllProducts', () => {
    it('should return all the products', async () => {
      vi.mock('@/lib/api', () => ({
        getProducts: async () => ({
          json: async () => ({
            products: [
              { id: 1, name: 'Product 1', price: 10 },
              { id: 2, name: 'Product 2', price: 20 }
            ]
          })
        })
      }))

      const product = useProductStore()
      await product.getAllProducts()
      expect(product.products).toStrictEqual([
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 }
      ]),
        expect(product.isLoading).toStrictEqual(false)
    })
  })
})
