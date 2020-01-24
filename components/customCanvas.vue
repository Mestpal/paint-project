<template>
  <v-col :cols="8">
    <v-card>
      <v-card-text>
        <canvas
          id="paint_project_canvan"
          @mousedown="createDrawPathAction($event)"
          @mousemove="updateDrawPathAction($event)"
          @mouseup="closeDrawPathAction($event)"
          style = "height: 600px; width: 100%; background-color: white"
        >
          {{ circleDiameter }}
        </canvas>
      </v-card-text>
    </v-card>
  </v-col>
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
