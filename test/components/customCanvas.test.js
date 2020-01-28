
import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'

import customCanvas from '@/components/customCanvas'
import { getters } from '@/mixins/drawActions'

Vue.use(Vuetify)
Vue.use(Vuex)
const localVue = createLocalVue()

describe('customCanvas.vue', () => {
  let store
  let wrapper

  beforeEach(() => {
    store = new Vuex.Store({
      getters
    })
    wrapper = shallowMount(customCanvas, {
      store,
      localVue
    })
  })

  it('customCanvas component renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
