<template>
  <div
    @click="lineWeightOptionSelected"
  >
    LINE {{ lineConf.weight }}
  </div>
</template>

<script>
export default {
  props: {
    weight: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      lineConf: {
        weight: this.weight
      }
    }
  },
  methods: {
    lineWeightOptionSelected () {
      console.log('Line weight selected')
      this.$emit('lineEvent', this.lineConf)
    }
  }
}
</script>
