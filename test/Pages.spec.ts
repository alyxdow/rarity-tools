import { describe, test, expect } from '@jest/globals'
import { mount } from '@vue/test-utils'
import Home from '~/pages/index.vue'

describe('Home Page', () => {
  test('Home Page Initialized', () => {
    const instance = mount(Home)
    expect(instance.vm).toBeTruthy()
  })
})
