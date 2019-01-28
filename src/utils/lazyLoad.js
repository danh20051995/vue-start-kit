// lazy loading Components
// https://github.com/vuejs/vue-router/blob/dev/examples/lazy-loading/app.js#L8
export default name => () => {
  try {
    return import(`@/modules/${name}.vue`)
  } catch (error) {
    return import(`@/modules/${name}/index.vue`)
  }
}
