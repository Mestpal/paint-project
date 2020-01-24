<template>
  <v-col :cols="4">
    <v-card>
      <v-card-text>
          ColorSelector
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
import drawActions from '../mixins/drawActions'

export default {
  mixins: [drawActions],
  methods: {
    test (text) {
      console.log(text)
    }
  }
}
</script>
