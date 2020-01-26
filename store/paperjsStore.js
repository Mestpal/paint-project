import { paper } from 'paper'

export const state = () => ({
  drawProject: {},
  defaults: {
    line: {
      weight: 1,
      color: '#FFFFFF'
    }
  }
})

export const actions = {
  setCanvasProject () {
    paper.setup(document.getElementById('paint_project_canvan'))
  },
  initPath ({ state, dispatch }, newPointEvent) {
    const path = new paper.Path()
    path.strokeColor = newPointEvent.selectedColor || state.defaults.line.color
    path.strokeWidth = newPointEvent.selectedLineWeight || state.defaults.line.weight
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
