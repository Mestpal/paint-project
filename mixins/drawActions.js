// import paper from 'paper'
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('paperjsStore', [
      'updateDrawing'
    ]),
    updateDrawingAction (diameter) {
      this.updateDrawing(diameter)
    }
  }
}
