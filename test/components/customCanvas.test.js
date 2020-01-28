
import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'

import customCanvas from '@/components/customCanvas'
import drawActions, { getters } from '@/mixins/drawActions'

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
      mixins: [drawActions],
      store,
      localVue
    })
    wrapper.vm.initPath = jest.fn()
      .mockImplementation(() => {})
    wrapper.vm.updateDrawStatus = jest.fn()
      .mockImplementation(() => {})
    wrapper.vm.updatePath = jest.fn()
      .mockImplementation(() => {})
  })

  it('customCanvas component renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('createDrawPathAction action', () => {
    wrapper.vm.createDrawPathAction({
      selectedColor: '#FFFFFF',
      selectedLineWeight: 2
    })

    expect(wrapper.vm.initPath).toHaveBeenCalledTimes(1)
    expect(wrapper.vm.updateDrawStatus).toHaveBeenCalledTimes(1)
  })

  it('closeDrawPathAction action', () => {
    wrapper.vm.saveDrawHistoy = jest.fn()
      .mockImplementation(() => {})

    wrapper.vm.closeDrawPathAction({
      selectedColor: '#FFFFFF',
      selectedLineWeight: 2
    })

    expect(wrapper.vm.updatePath).toHaveBeenCalledTimes(1)
    expect(wrapper.vm.updateDrawStatus).toHaveBeenCalledTimes(1)
    expect(wrapper.vm.saveDrawHistoy).toHaveBeenCalledTimes(1)
  })

})
