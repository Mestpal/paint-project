import { paper } from 'paper'

export const state = () => ({
  drawHistory: [],
  historyStepPointer: 0
})

export const getters = {
  drawHistory: () => { return state.drawHistory }
}

export const mutations = {
  SAVE_STEPS_HISTORY (state, history) {
    state.drawHistory = history
  },
  UPDATE_STEPS_POINTER (state, position) {
    state.historyStepPointer = position
  },
  REDUCE_STEPS_POINTER (state) {
    state.historyStepPointer -= 1
  }
}

export const actions = {
  setCanvasProject () {
    paper.setup(document.getElementById('paint_project_canvan'))
  },
  saveDrawStepsHistory ({ commit }) {
    const history = paper.project.activeLayer.children
    const drawHistory = []

    history.forEach((step, index) => {
      const segmentsHistory = []
      const stepColor = step.strokeColor.components
      const segments = step.segments

      segments.forEach((segment, idx) => {
        segmentsHistory[idx] = [
          segment.point.x,
          segment.point.y
        ]
      })

      drawHistory[index] = {
        segments: segmentsHistory,
        color: stepColor
      }
    })

    const newPointerLocation = drawHistory.length - 1

    commit('SAVE_STEPS_HISTORY', drawHistory)
    commit('UPDATE_STEPS_POINTER', newPointerLocation)
  },
  undoLastDrawStep ({ commit }) {
    const drawStepsLenght = paper.project.activeLayer.children.length
    const lastDrawStepPosition = drawStepsLenght - 1
    if (lastDrawStepPosition >= 0) {
      paper.project.activeLayer.removeChildren(lastDrawStepPosition)
      commit('REDUCE_STEPS_POINTER')
    }
  },
  redoLastDrawStep ({ state, commit }) {
    if (state.drawHistory[state.historyStepPointer + 1]) {
      const redoStep = state.drawHistory[state.historyStepPointer + 1]
      const path = new paper.Path()
      path.strokeColor = new paper.Color(redoStep.color)
      redoStep.segments.forEach((pointData) => {
        const point = new paper.Point(pointData)
        path.add(point)
      })
      commit('UPDATE_STEPS_POINTER', state.historyStepPointer + 1)
    }
  }
}
