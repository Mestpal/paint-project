<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <customCanvas :circleDiameter="200" />
    </v-flex>
  </v-layout>
</template>

<script>
import customCanvas from '../components/customCanvas'

export default {
  components: {
    customCanvas
  }
}
</script>
