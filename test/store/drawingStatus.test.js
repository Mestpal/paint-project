import { mutations, getters, actions } from '@/store/drawingStatus'

describe('drawingStatus.js', () => {
  const state = {
    drawStatus: false
  }

  it('returs drawStatus', () => {
    const actualDrawStatus = getters.drawStatus(state)

    expect(actualDrawStatus).toEqual(state.drawStatus)
  })

  it('CHANGE_DRAW_STATUS updates correctly the drawing status', () => {
    mutations.CHANGE_DRAW_STATUS(state, true)

    expect(state).toEqual({
      drawStatus: true
    })
  })

  it('updateDrawStatus action', () => {
    const commit = jest.fn()
    actions.updateDrawStatus({ commit }, false)

    expect(commit).toHaveBeenCalledWith('CHANGE_DRAW_STATUS', false)
  })
})
