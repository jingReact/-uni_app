<template>
  <div class="wd-container">
    <wordcloud
      :data="defaultWords"
      nameKey="name"
      valueKey="value"
      :color="myColors"
      :showTooltip="false"
      :wordClick="wordClickHandler"
    >
    </wordcloud>
  </div>
</template>
<script>
import wordcloud from 'vue-wordcloud'
export default {
  name: 'wdwh-dp-word-cloud',
  components: {
    wordcloud
  },
  props: {
    defaultWords: {
      type: 'Array',
      default: () => {
        return []
      }
    },
    myColors: {
      type: 'Array',
      default: () => {
        return []
      }
    }
  },
  methods: {
    wordClickHandler (name, value, vm) {}
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.wd-container {
  width: 100%;
  height: 400px;
  background: #333;
}
</style>
