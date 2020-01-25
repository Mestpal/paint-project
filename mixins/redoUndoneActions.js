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
      'undoLastDrawStep'
    ]),
    undoDrawStepAction () {
      console.log('undoDrawStepAction')
      this.undoLastDrawStep()
    },
    redoDrawStepAction () {
      console.log('redoDrawStepAction')
    }
  }
}
