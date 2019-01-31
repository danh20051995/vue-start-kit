<template>
  <div class="todo-detail">
    <form @submit.prevent="save" autocomplete="off" class="col-6 offset-3 pt-4">
      <div class="form-group">
        <input v-model="formData.name" type="text" class="form-control" placeholder="Enter task name..." v-validate="'required'" data-vv-name="name">
        <small v-if="errors.has('name')" class="form-text text-danger">{{ errors.first('name') }}</small>
      </div>

      <div class="form-group">
        <textarea v-model="formData.description" cols="30" rows="10" class="form-control" placeholder="Enter task description..." v-validate="'required'" data-vv-name="description"></textarea>
        <small v-if="errors.has('description')" class="form-text text-danger">{{ errors.first('description') }}</small>
      </div>

      <div class="input-row">
        <button type="submit" class="btn btn-small btn-success">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import _ from 'lodash'
import { mapGetters } from 'vuex'
import helpers from '@/utils/helpers'

export default {
  name: 'todo-detail',

  notifyTitle: 'Todo',

  computed: {
    ...mapGetters({
      list: 'todo/list'
    }),
    /**
     * Return current task default if editing
     * @return {Object}
     */
    task () {
      if (this.$route.params.id) {
        return this.list.find(t => t._id === this.$route.params.id) || {}
      }

      return {}
    }
  },

  data: () => ({
    formData: {
      _id: helpers.randomString(24).toLowerCase()
    }
  }),

  methods: {
    /**
     * Save task detail, redirect to todos list
     */
    async save () {
      // Validate form
      let ok = this.$validator.validateAll()
      if (ok) {
        // Update todos list in store
        if (this.$route.name === 'edit_todo') {
          this.$store.commit('todo/LIST', this.list.map(t => {
            if (t._id === this.formData._id) {
              return this.formData
            }
            return t
          }))
        } else {
          this.$store.commit('todo/LIST', [ ...this.list, this.formData ])
        }

        // notify
        this.successHandle('Save task successfully.')

        // redirect to list
        this.$router.push({ name: 'todo_list' })
      }
    }
  },

  // Hook event → update formData → edit
  // Redirect notfount if task detail !exists
  created () {
    if (this.$route.name === 'edit_todo') {
      if (!this.task._id) {
        return this.$router.push({ name: 'error_404' })
      }

      this.formData = _.cloneDeep(this.task)
    }
  }
}
</script>

<style lang="scss" scoped>
  .todo-detail {
    padding: 2px 4px;
  }
</style>
