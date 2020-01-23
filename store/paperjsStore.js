import paper from 'paper'

export const actions = {
  updateDrawing ({ commit }, diameter) {
    paper.setup(document.getElementById('paint_project_canvan'))
    const point = new paper.Point(20, 20)
    const circle = new paper.Path.Circle(point, diameter / 2)
    circle.fillColor = 'red'
    circle.strokeColor = 'blue'
  }
}
