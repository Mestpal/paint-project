import { mapActions, mapGetters } from 'vuex'
import colorActions from '@/mixins/drawModules/colorActions'
import redoUndoActions from '@/mixins/drawModules/redoUndoActions'
import lineWeightActions from '@/mixins/drawModules/lineWeightActions'

export default {
  mixins: [
    colorActions,
    redoUndoActions,
    lineWeightActions
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
      newPointEvent.selectedLineWeight = this.selectedLineWeight
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
