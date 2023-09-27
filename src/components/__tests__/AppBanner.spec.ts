import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AppBanner from '@/components/AppBanner.vue'

describe('AppBanner', () => {
  it('renders properly', () => {
    const wrapper = mount(AppBanner, { props: { text: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
