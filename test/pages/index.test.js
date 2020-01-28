
import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'

import index from '@/pages/index'

Vue.use(Vuetify)
Vue.use(Vuex)
const localVue = createLocalVue()

describe('index.vue page', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(index, {
      localVue
    })
  })

  it('reders the color selector component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
