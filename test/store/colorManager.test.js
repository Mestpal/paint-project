import { mutations, getters, actions } from '@/store/colorManager'

describe('colorManager.js', () => {
  const state = {
    selectedColor: '#111111',
    swatcherColors: [['#111111', '#111222']]
  }
  const colorEvent = { hex: '#FFFFFF' }

  it('returs selectedColor', () => {
    const actualSelectedColor = getters.selectedColor(state)
    expect(actualSelectedColor).toEqual(state.selectedColor)
  })

  it('returs swatcherColors', () => {
    const actualSwatcherColors = getters.swatcherColors(state)
    expect(actualSwatcherColors).toEqual(state.swatcherColors)
  })

  it('UPDATE_SELECTED_COLOR updates correctly the selected color', () => {
    mutations.UPDATE_SELECTED_COLOR(state, colorEvent)

    expect(state).toEqual({
      selectedColor: '#FFFFFF',
      swatcherColors: [['#111111', '#111222']]
    })
  })

  it('updateSelectedColor action', () => {
    const commit = jest.fn()
    actions.updateSelectedColor({ commit }, colorEvent)
    expect(commit).toHaveBeenCalledWith('UPDATE_SELECTED_COLOR', colorEvent)
  })
})
