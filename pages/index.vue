<template>
  <v-layout justify-center align-center>
    <v-flex xs12 sm12 md12>
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
