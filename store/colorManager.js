import swatcherConf from '@/config/colors/swatcher-colors'

export const state = () => ({
  selectedColor: '',
  swatcherColors: swatcherConf.colors
})

export const getters = {
  selectedColor: (state) => { return state.selectedColor },
  swatcherColors: (state) => { return state.swatcherColors }
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
