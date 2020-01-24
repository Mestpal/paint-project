import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('paperjsStore', [
      'setCanvasProject',
      'initPath',
      'updatePath'
    ]),
    createDrawPathAction () {
      this.initPath()
    },
    updateDrawPathAction (newPointEvent) {
      console.log('Add new point')
      this.updatePath(newPointEvent)
    }
  },
  mounted () {
    this.setCanvasProject()
    this.initPath()
  }
}
