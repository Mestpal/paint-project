<template>
  <v-card>
    <v-card-title> Line Weight </v-card-title>
    <v-card-text>
      <lineOption
        v-for="(lineOption, index) in lineWeightsOptions"
        v-bind:key="index"
        :weight="lineOption"
        @lineEvent="updateLineWeight($event)"
      />
    </v-card-text>
  </v-card>
</template>

<script>
import lineWeightActions from '@/mixins/drawModules/lineWeightActions'
import lineOption from '@/components/atomics/lineOption'

export default {
  components: {
    lineOption
  },
  mixins: [lineWeightActions],
  methods: {
    updateLineWeight (lineEvent) {
      console.log(`Update the line weight to ${lineEvent.weight}`)
      this.updateLineWeightAction(lineEvent)
    }
  }
}
</script>
