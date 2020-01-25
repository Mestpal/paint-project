import { mapActions } from 'vuex'

export default {
  computed: {
    // ...mapGetters('colorManager', [
    //   'selectedColor',
    //   'swatcherColors'
    // ])
  },
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
      console.log('redoDrawStepAction')
    },
    saveDrawHistoy () {
      this.saveDrawStepsHistory()
    }
  }
}
