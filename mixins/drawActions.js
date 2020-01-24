import { mapActions, mapGetters } from 'vuex'
import colorActions from '../mixins/colorActions'

export default {
  mixins: [colorActions],
  computed: {
    ...mapGetters('drawingStatus', [
      'drawStatus'
    ])
  },
  methods: {
    ...mapActions('drawingStatus', [
      'updateDrawStatus'
    ]),
    ...mapActions('paperjsStore', [
      'setCanvasProject',
      'initPath',
      'updatePath'
    ]),
    createDrawPathAction (newPointEvent) {
      newPointEvent.selectedColor = this.selectedColor
      this.initPath(newPointEvent)
      this.updateDrawStatus(true)
    },
    updateDrawPathAction (newPointEvent) {
      if (this.drawStatus) {
        this.updatePath(newPointEvent)
      }
    },
    closeDrawPathAction (newPointEvent) {
      this.updatePath(newPointEvent)
      this.updateDrawStatus()
    }
  },
  mounted () {
    this.setCanvasProject()
  }
}
