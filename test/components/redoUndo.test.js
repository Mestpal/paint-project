
import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'

import redoUndo from '@/components/redoUndone'
import { getters } from '@/mixins/drawModules/redoUndoActions'

Vue.use(Vuetify)
Vue.use(Vuex)
const localVue = createLocalVue()

describe('redoUndo.vue', () => {
  let store
  let wrapper

  beforeEach(() => {
    store = new Vuex.Store({
      getters
    })
    wrapper = shallowMount(redoUndo, {
      store,
      localVue
    })
  })

  it('redoUndo component renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
