export const actions = {
  updateDrawing ({ commit }, data) {
    data.paper.setup(document.getElementById('paint_project_canvan'))
    // Now, draw your things based on component state.
    const point = new data.paper.Point(20, 20)
    const circle = new data.paper.Path.Circle(point, data.diameter / 2)
    circle.fillColor = 'red'
    circle.strokeColor = 'blue'
    console.log(data)
  }
}
