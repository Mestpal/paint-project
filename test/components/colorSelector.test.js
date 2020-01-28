
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
})
