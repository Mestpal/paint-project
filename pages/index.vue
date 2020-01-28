<template>
  <v-layout justify-center align-center>
    <v-container fluid>
      <v-row dense>
        <customCanvas />
        <v-col
          :cols="4"
        >
          <redoUndone />
          <colorSelector />
          <lineWeightSelector />
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
import customCanvas from '@/components/customCanvas'
import colorSelector from '@/components/colorSelector'
import redoUndone from '@/components/redoUndone'
import lineWeightSelector from '@/components/lineWeightSelector'

export default {
  components: {
    customCanvas,
    redoUndone,
    colorSelector,
    lineWeightSelector
  }
}
</script>
