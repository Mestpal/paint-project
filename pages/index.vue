<template>
  <v-layout justify-center align-center>
    <v-container fluid>
      <v-row dense>
        <customCanvas :circleDiameter="200" />
        <colorSelector />
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
import customCanvas from '@/components/customCanvas'
import colorSelector from '@/components/colorSelector'

export default {
  components: {
    customCanvas,
    colorSelector
  }
}
</script>
