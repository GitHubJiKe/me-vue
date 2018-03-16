import { mount } from '@vue/test-utils'
import Test from '@/components/Test'

describe('Component', () => {
  test('是一个 Vue 实例', () => {
    const wrapper = mount(Test)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
