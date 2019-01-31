<template>
  <header class="app-header flex-0-0">
    <router-link :to="{ name: 'home' }" class="home-link">
      <span class="site-name">vue-start-kit</span>
    </router-link>
  </header>
</template>

<script>
export default {
  name: 'app-header',
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
  .app-header {
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    position: fixed;
    background: white;
    background-color: #fff;
    box-sizing: border-box;
    border-bottom: 1px solid #eaecef;
    display: flex;
    align-items: center;
    padding-left: 24px;
    padding-right: 24px;

    .home-link {
      display: inline-block;
      text-decoration: none;
    }

    .site-name {
      color: #2c3e50;
      position: relative;
      font-size: 1.3rem;
      font-weight: 600;
    }
  }
</style>
