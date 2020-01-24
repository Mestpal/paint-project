export const state = () => ({
  selectedColor: ''
})

export const getters = {
  selectedColor: (state) => { return state.selectedColor }
}

export const mutations = {
  UPDATE_SELECTED_COLOR (state, colorEvent) {
    state.selectedColor = colorEvent.hex
  }
}

export const actions = {
  updateSelectedColor ({ commit }, colorEvent) {
    commit('UPDATE_SELECTED_COLOR', colorEvent)
  }
}
