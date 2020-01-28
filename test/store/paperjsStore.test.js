import 'jest-canvas-mock'
import paper from 'paper'

import { actions } from '@/store/paperjsStore'
import customCanvas from '@/components/customCanvas.vue'

const state = {
  defaults: {
    line: {
      weight: 1,
      color: '#FFFFFF'
    }
  }
}

const dispatch = jest.fn()
// const commit = jest.fn()
const newPointEvent = {
  clientX: 100,
  clientY: 70
}

describe('paperjsStore.js', () => {
  it('setCanvasProject action', () => {
    actions.setCanvasProject()
    expect(paper.project).not.toBeNull()
    expect(paper.project.index).toBeGreaterThanOrEqual(0)
  })

  it('initPath action', () => {
    actions.initPath({ state, dispatch }, newPointEvent)
    expect(dispatch).toHaveBeenCalledWith('setNewPathPoint', newPointEvent)
  })

  it('updatePath action', () => {
    actions.updatePath({ dispatch }, newPointEvent)
    expect(dispatch).toHaveBeenCalledWith('setNewPathPoint', newPointEvent)
  })

  // it('setNewPathPoint action', () => {
  //   console.log(newPointEvent.mock.instances)
  //   wrapper.find('canvas').simulate('mousedown')
  //   // actions.setNewPathPoint({ commit }, newPointEvent)
  //   // expect(paper.project.activeLayer.lastChild).toBeInstanceOf(paper.Path)
  // })
})
