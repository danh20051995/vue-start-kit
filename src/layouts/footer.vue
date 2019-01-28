<template>
  <footer class="app-footer">
    &copy; {{ new Date().getFullYear() }}
    <a href="https://github.com/danh20051995/vue-start-kit" rel="noopener noreferrer" target="_blank">
      danh.danh20051995@gmail.com
    </a>
  </footer>
</template>

<script>
export default {
  name: 'app-footer',
  components: {},
  props: {},
  filters: {},
  computed: {},
  data: () => ({}),
  watch: {},
  methods: {},
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {},
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {}
}
</script>

<style lang="scss" scoped>
  .app-footer {
    flex: 0 0 auto;
    padding: 15px;
    text-align: center;
    box-shadow: inset 0 1px 0 0 #e6e6e6;
  }
</style>
