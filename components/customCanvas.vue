<template>
  <v-card>
    <v-card-text>
      <canvas
        id="paint_project_canvan"
        @mousedown="updateDrawPathAction($event)"
        @mouseup="test('mouse released')"
        style = "height: 100%; width: 100%; background-color: white"
      >
        {{ circleDiameter }}
      </canvas>
    </v-card-text>
  </v-card>
</template>

<script>
import drawActions from '../mixins/drawActions'

export default {
  mixins: [drawActions],
  props: {
    'circleDiameter': {
      type: Number,
      default: 10
    }
  },
  data: () => ({ x: 20, y: 20 }),
  methods: {
    test (text) {
      console.log(text)
    }
  }
}
</script>
