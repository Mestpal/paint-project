// import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    // ...mapGetters('colorManager', [
    //   'selectedColor',
    //   'swatcherColors'
    // ])
  },
  methods: {
    // ...mapActions('colorManager', [
    //   'updateSelectedColor'
    // ]),
    undoDrawStepAction () {
      console.log('undoDrawStepAction')
    },
    redoDrawStepAction () {
      console.log('redoDrawStepAction')
    }
  }
}
