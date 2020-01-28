import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'

import lineWeightSelector from '@/components/lineWeightSelector'
import lineWeightSelectorActions, { getters } from '@/mixins/drawModules/lineWeightActions'

Vue.use(Vuetify)
Vue.use(Vuex)
const localVue = createLocalVue()

describe('lineWeightSelector.vue', () => {
  let store
  let wrapper

  beforeEach(() => {
    store = new Vuex.Store({
      getters
    })
    wrapper = shallowMount(lineWeightSelector, {
      store,
      localVue,
      mixins: [lineWeightSelectorActions]
    })
  })

  it('reders the line weight selector component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('updateLineWeight method', () => {
    wrapper.vm.updateLineSelectedWeight = jest.fn()
      .mockImplementation(() => 16)

    wrapper.vm.updateLineWeightAction(16)
    expect(wrapper.vm.updateLineSelectedWeight).toHaveBeenCalledTimes(1)
  })
})
