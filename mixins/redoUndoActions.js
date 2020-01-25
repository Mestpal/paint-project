import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('drawHistoryManager', [
      'undoLastDrawStep',
      'redoLastDrawStep',
      'saveDrawStepsHistory'
    ]),
    undoDrawStepAction () {
      this.undoLastDrawStep()
    },
    redoDrawStepAction () {
      this.redoLastDrawStep()
    },
    saveDrawHistoy () {
      this.saveDrawStepsHistory()
    }
  }
}
