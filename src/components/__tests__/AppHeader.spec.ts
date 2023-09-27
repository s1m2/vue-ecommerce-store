import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AppHeader from '@/components/AppBanner.vue'

describe('AppBanner', () => {
  it('renders properly', () => {
    const wrapper = mount(AppHeader)
  })
})
