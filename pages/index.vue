<template>
  <v-layout justify-center align-center>
    <v-container fluid>
      <v-row dense>
        <customCanvas :circleDiameter="200" />
        <v-col
          :cols="4"
        >
          <redoUndone />
          <colorSelector />
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
import customCanvas from '@/components/customCanvas'
import colorSelector from '@/components/colorSelector'
import redoUndone from '@/components/redoUndone'

export default {
  components: {
    customCanvas,
    redoUndone,
    colorSelector
  }
}
</script>
