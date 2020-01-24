export const state = () => ({
  drawStatus: false
})

export const getters = {
  drawStatus: (state) => { return state.drawStatus }
}

export const mutations = {
  CHANGE_DRAW_STATUS (state, drawStatus) {
    state.drawStatus = drawStatus
  }
}

export const actions = {
  updateDrawStatus ({ commit }, status = false) {
    commit('CHANGE_DRAW_STATUS', status)
  }
}
