<template>
  <v-col :cols="4">
    <v-card>
      <v-card-text>
        <v-color-picker
          class="ma-2"
          show-swatches
          @input="updateSelectedColor($event)"
        />
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
import colorActions from '../mixins/colorActions'

export default {
  mixins: [colorActions]
}
</script>
