import { mutations, getters, actions } from '@/store/LineWeightManager'

describe('LineWeightManager.js', () => {
  const state = {
    selectedLineWeight: '',
    lineWeightsOptions: [1, 2, 4, 8, 16]
  }
  const lineEvent = {
    weight: 128
  }

  it('returs selectedColor', () => {
    const actualSelectedLineWeight = getters.selectedLineWeight(state)
    expect(actualSelectedLineWeight).toEqual(state.selectedLineWeight)
  })

  it('returs lineWeightsOptions', () => {
    const actualLineWeightsOptions = getters.lineWeightsOptions(state)
    expect(actualLineWeightsOptions).toEqual(state.lineWeightsOptions)
  })

  it('UPDATE_LINE_WEIGHT updates correctly the selected weight', () => {
    mutations.UPDATE_LINE_WEIGHT(state, lineEvent.weight)

    expect(state).toEqual({
      selectedLineWeight: 128,
      lineWeightsOptions: [1, 2, 4, 8, 16]
    })
  })

  it('updateSelectedColor action', () => {
    const commit = jest.fn()
    actions.updateLineSelectedWeight({ commit }, lineEvent)
    expect(commit).toHaveBeenCalledWith('UPDATE_LINE_WEIGHT', lineEvent.weight)
  })
})
