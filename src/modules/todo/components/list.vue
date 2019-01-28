<template>
  <div class="todo-list">
    {{ list }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'todo-list',

  notifyTitle: 'Todo',

  computed: {
    ...mapGetters({
      list: 'todo/list'
    })
  }
}
</script>

<style lang="scss" scoped>
  .todo-list {}
</style>
