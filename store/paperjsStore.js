import { paper } from 'paper'

export const state = () => ({
  drawHistory: [],
  drawProject: {}
})

export const getters = {
  drawHistory: () => { return state.drawHistory }
}

export const actions = {
  setCanvasProject ({ commit }) {
    paper.setup(document.getElementById('paint_project_canvan'))
  },
  initPath ({ state, commit, dispatch }) {
    console.log('init path', paper)
    const path = new paper.Path()
    path.strokeColor = 'blue'
    console.log('path', path)
    console.log('created paths', paper.project.activeLayer.children)
  },
  updatePath ({ commit, dispatch }, newPointEvent) {
    const boundaries = newPointEvent.target.getBoundingClientRect()
    const x = newPointEvent.clientX - boundaries.left
    const y = newPointEvent.clientY - boundaries.top
    const point = new paper.Point([x, y])
    const path = paper.project.activeLayer.children[0]
    path.add(point)
    console.log('updatePATH store', newPointEvent, boundaries, point, path)
  }
}
