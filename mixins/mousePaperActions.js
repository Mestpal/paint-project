import paper from 'paper'
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('mouseDrawing', [
      'updateDrawing'
    ]),
    updateDrawingAction (diameter) {
      this.updateDrawing({
        paper,
        diameter
      })
      // paper.setup(document.getElementById('paint_project_canvan'))
      // // Now, draw your things based on component state.
      // const point = new paper.Point(20, 20)
      // const circle = new paper.Path.Circle(point, this.circleDiameter / 2)
      // circle.fillColor = 'red'
      // circle.strokeColor = 'blue'
    }
  }
}
