<template>
  <v-card>
    <canvas
      id="paint_project_canvan"
      @click="updateDrawingAction(circleDiameter)"
      @mousedown="test('mouse pressed')"
      @mouseup="test('mouse released')"
      resize
    >
      {{ circleDiameter }}
    </canvas>
  </v-card>
</template>

<script>
import mousePaperActions from '../mixins/mousePaperActions'

export default {
  mixins: [mousePaperActions],
  props: {
    'circleDiameter': {
      type: Number,
      default: 10
    }
  },
  data: () => ({ x: 20, y: 20 }),
  mounted () {
    this.updateDrawingAction(this.circleDiameter)
  },
  methods: {
    test (text) {
      console.log(text)
    }
  }
}
</script>
