<template>
  <v-card>
    <v-card-title> Undo/Redo last action </v-card-title>
    <v-card-text>
      <v-row dense>
        <v-col
          :cols="3"
          v-for="(button, index) in buttonsConf"
          v-bind:key="index"
        >
          <v-btn
            :icon="true"
            @click="selectButtonAction(button.action)"
          >
            <v-icon
              large
            >
              {{ button.icon }}
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import redoUndoActions from '@/mixins/drawModules/redoUndoActions'
export default {
  mixins: [redoUndoActions],
  data () {
    return {
      buttonsConf: [
        {
          icon: 'mdi-undo',
          action: 'undo'
        },
        {
          icon: 'mdi-redo',
          action: 'redo'
        }
      ]
    }
  },
  methods: {
    selectButtonAction (action) {
      switch (action) {
        case 'undo':
          this.undoDrawStepAction()
          break

        case 'redo':
          this.redoDrawStepAction()
          break

        default:
          break
      }
    }
  }
}
</script>
