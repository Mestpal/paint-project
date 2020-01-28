
import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'

import lineOption from '@/components/atomics/lineOption'

Vue.use(Vuetify)
Vue.use(Vuex)
const localVue = createLocalVue()

describe('lineOption.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(lineOption, {
      localVue,
      propsData: {
        weight: 128
      }
    })
  })

  it('reders the lineOption component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should emit an event when the line option is clicked', () => {
    const event = jest.fn()
    const lineOptionDiv = wrapper.find('div')

    wrapper.vm.$on('lineEvent', event)

    expect(event).toHaveBeenCalledTimes(0)

    // Simulate a click on the color
    lineOptionDiv.trigger('click')

    // Ensure that our mock event was called
    expect(event).toHaveBeenCalledTimes(1)
  })
})
