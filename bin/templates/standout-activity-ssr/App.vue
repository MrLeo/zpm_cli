<template lang="pug">
.{{APP_NAME}}#root
  p 主页
  //- router-link(:to="{ name: 'hello' }") Hello页面
  //- router-link(:to="{ name: 'world' }") world页面
  //- router-view
  Hello
  World
</template>

<script>
import Hello from './components/Hello'
import World from './components/World'

export default {
  components: { Hello, World },
  data() {
    return {
      title: '',
      content: ''
    }
  },
  created() {
    /* eslint no-underscore-dangle:0 */
    if (typeof __INITIAL_STATE__ !== 'undefined') {
      Object.assign(this.$store.state, window.__INITIAL_STATE__)
      this.loaded = true
    }
  },
  async mounted() {
    if (!this.loaded) await this.prepare()
  },
  methods: {
    // 服务端渲染约定方法
    async prepare(options) {
      return this.$store.state
    }
  }
}
</script>

<style lang='postcss'>
/* @define app */
.{{APP_NAME}} {
  color: #187ce0;
  margin-top: 60px;
  text-align: center;
}
</style>
