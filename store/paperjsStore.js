import { paper } from 'paper'

export const state = () => ({
  drawHistory: [],
  drawProject: {}
})

export const getters = {
  drawHistory: () => { return state.drawHistory }
}

export const actions = {
  setCanvasProject () {
    paper.setup(document.getElementById('paint_project_canvan'))
  },
  initPath ({ dispatch }, newPointEvent) {
    const path = new paper.Path()
    path.strokeColor = newPointEvent.selectedColor
    dispatch('setNewPathPoint', newPointEvent)
  },
  updatePath ({ dispatch }, newPointEvent) {
    dispatch('setNewPathPoint', newPointEvent)
  },
  setNewPathPoint ({ commit }, newPointEvent) {
    const boundaries = newPointEvent.target.getBoundingClientRect()
    const x = newPointEvent.clientX - boundaries.left
    const y = newPointEvent.clientY - boundaries.top
    const point = new paper.Point([x, y])
    const path = paper.project.activeLayer.lastChild
    path.add(point)
  }
}
