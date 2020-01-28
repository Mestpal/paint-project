import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'

import redoUndo from '@/components/redoUndone'
import redoUndoActions from '@/mixins/drawModules/redoUndoActions'

Vue.use(Vuetify)
Vue.use(Vuex)
const localVue = createLocalVue()

describe('redoUndo.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(redoUndo, {
      mixins: [redoUndoActions],
      localVue
    })
  })

  it('redoUndo component renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('selectButtonAction undo', () => {
    wrapper.vm.undoLastDrawStep = jest.fn()
      .mockImplementation(() => 1)

    wrapper.vm.selectButtonAction('undo')
    expect(wrapper.vm.undoLastDrawStep).toHaveBeenCalled()
  })

  it('selectButtonAction redo', () => {
    wrapper.vm.redoDrawStepAction = jest.fn()
      .mockImplementation(() => 1)

    wrapper.vm.selectButtonAction('redo')
    expect(wrapper.vm.redoDrawStepAction).toHaveBeenCalled()
  })

  it('selectButtonAction default', () => {
    wrapper.vm.redoDrawStepAction = jest.fn()
      .mockImplementation(() => 1)
    wrapper.vm.undoLastDrawStep = jest.fn()
      .mockImplementation(() => 1)

    wrapper.vm.selectButtonAction('default')
    expect(wrapper.vm.redoDrawStepAction).toHaveBeenCalledTimes(0)
    expect(wrapper.vm.undoLastDrawStep).toHaveBeenCalledTimes(0)
  })
})
