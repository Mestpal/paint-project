import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'

import lineWeightSelector from '@/components/lineWeightSelector'
import { getters } from '@/mixins/drawModules/lineWeightActions'

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
      localVue
    })
  })

  it('reders the line weight selector component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  // it('method updateLineWeight', () => {
  //   wrapper = mount(lineWeightSelector, {
  //     store,
  //     methods: {
  //       updateLineWeight () { return jest.fn() }
  //     },
  //     localVue
  //   })
  //   const event = jest.fn()
  //   wrapper.vm.$on('lineEvent', event)

  //   // const lineOptionComponent = wrapper.find(lineOption)
  //   // console.log(lineOptionComponent.selector.methods)
  //   // lineOptionComponent.trigger('lineEvent')

  //   expect(wrapper.vm.updateLineWeight).toHaveBeenCalledTimes(1)
  // })
})
