import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('colorManager', [
      'selectedColor',
      'swatcherColors'
    ])
  },
  methods: {
    ...mapActions('colorManager', [
      'updateSelectedColor'
    ]),
    updateColorAction (colorEvent) {
      this.updateSelectedColor(colorEvent)
    }
  }
}
