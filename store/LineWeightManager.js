import weightsOptions from '@/config/lines/lines-weights'

export const state = () => ({
  selectedLineWeight: '',
  lineWeightsOptions: weightsOptions.weights
})

export const getters = {
  selectedLineWeight: (state) => { return state.selectedLineWeight },
  lineWeightsOptions: (state) => { return state.lineWeightsOptions }
}

export const mutations = {
  UPDATE_LINE_WEIGHT (state, weight) {
    state.selectedLineWeight = weight
  }
}

export const actions = {
  updateLineSelectedWeight ({ commit }, lineEvent) {
    commit('UPDATE_LINE_WEIGHT', lineEvent.weight)
  }
}
