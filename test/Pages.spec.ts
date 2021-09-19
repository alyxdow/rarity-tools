import { describe, test, expect } from '@jest/globals'
import { mount } from '@vue/test-utils'
import Home from '~/pages/Home/index.vue'

describe('Home Page', () => {
  test.skip('Home Page Initialized', () => {
    const instance = mount(Home)
    expect(instance.vm).toBeTruthy()
  })
})
