import { paper } from 'paper'

export const state = () => ({
  drawHistory: []
})

export const getters = {
  drawHistory: () => { return state.drawHistory }
}

export const actions = {
  setCanvasProject () {
    paper.setup(document.getElementById('paint_project_canvan'))
  },
  undoLastDrawStep ({ dispatch }) {
    const drawStepsLenght = paper.project.activeLayer.children.length
    const lastDrawStepPosition = drawStepsLenght - 1
    paper.project.activeLayer.removeChildren(lastDrawStepPosition)
  }
}
