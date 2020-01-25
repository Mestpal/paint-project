import { mapActions, mapGetters } from 'vuex'
import colorActions from '@/mixins/colorActions'
import redoUndoActions from '@/mixins/redoUndoActions'

export default {
  mixins: [
    colorActions,
    redoUndoActions
  ],
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
      this.saveDrawHistoy()
    }
  },
  mounted () {
    this.setCanvasProject()
  }
}
