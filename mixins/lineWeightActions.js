import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('LineWeightManager', [
      'selectedLineWeight',
      'lineWeightsOptions'
    ])
  },
  methods: {
    ...mapActions('LineWeightManager', [
      'updateLineSelectedWeight'
    ]),
    updateLineWeightAction (lineEvent) {
      this.updateLineSelectedWeight(lineEvent)
    }
  }
}
