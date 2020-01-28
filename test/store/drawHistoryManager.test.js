import 'jest-canvas-mock'
import paper from 'paper'
import { mutations, getters, actions } from '@/store/drawHistoryManager'

let state = {
  drawHistory: [],
  historyStepPointer: 0
}
const position = 1
const history = [
  {
    color: [1, 2, 3],
    segments: [[100, 100]],
    weight: 1
  }
]

// Mock paper history
paper.setup(document.getElementById('paint_project_canvan'))
const path = new paper.Path()
path.strokeColor = new paper.Color(history[0].color)
path.strokeWidth = history[0].weight
path.add(new paper.Point(history[0].segments[0]))

describe('drawHistoryManager.js', () => {
  it('returs drawHistory', () => {
    const actualDrawHistory = getters.drawHistory(state)

    expect(actualDrawHistory).toEqual(state.drawHistory)
  })

  it('UPDATE_STEPS_POINTER updates correctly the history pointer', () => {
    mutations.UPDATE_STEPS_POINTER(state, position)

    expect(state.historyStepPointer).toEqual(position)
  })

  it('SAVE_STEPS_HISTORY updates correctly the draw history', () => {
    mutations.SAVE_STEPS_HISTORY(state, history)

    expect(state.drawHistory).toEqual(history)
  })

  it('REDUCE_STEPS_POINTER decrements the pointer in 1', () => {
    const finalPointerPosition = state.historyStepPointer - 1
    mutations.REDUCE_STEPS_POINTER(state)

    expect(state.historyStepPointer).toEqual(finalPointerPosition)
  })

  it('undo the last draw step made with the undoLastDrawStep action', () => {
    const commit = jest.fn()
    const drawStepsLenght = paper.project.activeLayer.children.length
    const lastDrawStepPosition = drawStepsLenght - 1

    expect(lastDrawStepPosition).toBeGreaterThanOrEqual(0)
    actions.undoLastDrawStep({ commit })
    expect(commit).toHaveBeenCalledWith('REDUCE_STEPS_POINTER')
  })

  it('redo last draw step with redoLastDrawStep action', () => {
    const commit = jest.fn()
    const actualPaperChildrens = paper.project.activeLayer.children.length
    state = {
      drawHistory: history,
      historyStepPointer: 0
    }
    // The last draw history step was deleted so pointer is reduced
    mutations.REDUCE_STEPS_POINTER(state)

    actions.redoLastDrawStep({ state, commit })

    expect(commit).toHaveBeenCalledWith('UPDATE_STEPS_POINTER', state.historyStepPointer + 1)
    expect(paper.project.activeLayer.children.length).toBe(actualPaperChildrens + 1)
  })

  it('Save the new draw steps history', () => {
    const commit = jest.fn()
    state = {
      drawHistory: [],
      historyStepPointer: -1
    }

    actions.saveDrawStepsHistory({ commit })

    expect(commit).toHaveBeenCalledWith('SAVE_STEPS_HISTORY', history)
    expect(commit).toHaveBeenCalledWith('UPDATE_STEPS_POINTER', history.length - 1)
  })
})
