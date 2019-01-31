<template>
  <div class="todo-list">
    <h2>Demo todo app. <router-link :to="{ name: 'new_todo' }">New task</router-link></h2>

    <table v-if="list.length">
      <thead>
        <tr>
          <th>_id</th>
          <th>Name</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(task, index) in list" :key="index">
          <td>{{ task._id }}</td>
          <td>{{ task.name }}</td>
          <td>{{ task.description }}</td>
          <td class="action">
            <span @click="edit(task)" class="edit">Edit</span>
            <span @click="remove(task)" class="delete">Delete</span>
          </td>
        </tr>
      </tbody>
    </table>

    <template v-else>List task empty</template>
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
  },

  methods: {
    /**
     * Redirect to edit task detail
     */
    edit (task) {
      this.$router.push({
        name: 'edit_todo',
        params: {
          id: task._id
        }
      })
    },
    /**
     * Confirm remove a task and update task list in store
     */
    remove (task) {
      let ok = window.confirm('Delete task ' + task.name + ' ?')
      if (ok) {
        this.$store.commit('todo/LIST', this.list.filter(t => t._id !== task._id))
        this.successHandle('Delete task successfully.')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .todo-list {
    padding: 2px 4px;

    th, td {
      border: 1px solid black;
      padding: 2px 4px;
    }

    td {
      word-break: break-all;
    }

    .action {
      font-size: 12px;
      word-break: unset;

      span {
        color:  white;
        margin: 2px 0;
        padding: 2px 4px;
        display: inline-block;
        font-weight: bold;
        border-radius: 4px;
        cursor: pointer;

        &.edit {
          background-color: #cec01b;
        }
        &.delete {
          background-color: #ff461b;
        }
      }
    }
  }
</style>
