
import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'

import colorSelector from '@/components/colorSelector'
import { getters } from '@/store/colorManager'

Vue.use(Vuetify)
Vue.use(Vuex)
const localVue = createLocalVue()

describe('colorSelector.vue', () => {
  let store
  let state
  let wrapper

  beforeEach(() => {
    state = { swatcherColors: [] }
    store = new Vuex.Store({
      state,
      getters
    })
    wrapper = shallowMount(colorSelector, {
      store,
      localVue
    })
  })

  it('reders the color selector component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  // it('should emit an event when a color ir selected', () => {
  //   const event = jest.fn()
  //   const color = wrapper.find('v-color-picker-stub')

  //   wrapper.vm.$on('update:color', event)

  //   expect(event).toHaveBeenCalledTimes(0)

  //   // Simulate a click on the color
  //   color.trigger('input')
  //   // wrapper.vm.$nextTick()

  //   // Ensure that our mock event was called
  //   expect(event).toHaveBeenCalledTimes(1)
  // })
})
