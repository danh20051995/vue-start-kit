<template>
  <div class="<moduleName>-list">
    <h2><ModuleName> module. <router-link :to="{ name: 'new_<moduleName>' }">New item</router-link></h2>

    <table v-if="list.length">
      <thead>
        <tr>
          <th>Detail</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(item, index) in list" :key="index">
          <td>{{ item }}</td>
          <td class="action">
            <span @click="edit(item)" class="edit">Edit</span>
            <span @click="remove(item)" class="delete">Delete</span>
          </td>
        </tr>
      </tbody>
    </table>

    <template v-else>List items empty</template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: '<moduleName>-list',

  notifyTitle: '<ModuleName>',

  computed: {
    ...mapGetters({
      list: '<moduleName>/list'
    })
  },

  methods: {
    /**
     * Redirect to edit item detail
     */
    edit (item) {
      this.$router.push({
        name: 'edit_<moduleName>',
        params: {
          id: item._id
        }
      })
    },
    /**
     * Confirm remove a item and update item list in store
     */
    remove (item) {
      alert('Delete successfully')
    }
  }
}
</script>

<style lang="scss" scoped>
  .<moduleName>-list {
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
