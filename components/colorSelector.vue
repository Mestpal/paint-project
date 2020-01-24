<template>
  <v-card>
    <v-card-title> Color Tools </v-card-title>
    <v-card-text>
      <v-color-picker
        :swatches="swatcherColors"
        @input="updateSelectedColor($event)"
        show-swatches
      />
    </v-card-text>
  </v-card>
</template>

<script>
import colorActions from '../mixins/colorActions'

export default {
  mixins: [colorActions]
}
</script>
