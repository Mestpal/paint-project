<template>
  <v-col :cols="8">
    <v-card>
      <v-card-title> Canvas </v-card-title>
      <v-card-text>
        <canvas
          id="paint_project_canvan"
          @mousedown="createDrawPathAction($event)"
          @mousemove="updateDrawPathAction($event)"
          @mouseup="closeDrawPathAction($event)"
          style = "height: 600px; width: 100%; background-color: white"
        >
        </canvas>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
import drawActions from '../mixins/drawActions'

export default {
  mixins: [drawActions]
}
</script>
