<template>
  <div class="<moduleName>-detail">
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
  name: '<moduleName>-detail',

  notifyTitle: '<ModuleName>',

  computed: {
    ...mapGetters({
      list: '<moduleName>/list'
    })
  },

  data: () => ({
    formData: {}
  }),

  methods: {
    /**
     * Save task detail, redirect to <moduleName>s list
     */
    async save () {
      // Validate form
      let ok = this.$validator.validateAll()
      if (ok) {
        // notify
        this.successHandle('Save <moduleName> successfully.')

        // redirect to list
        this.$router.push({ name: '<moduleName>_list' })
      }
    }
  },

  // Hook event → update formData → edit
  // Redirect notfount if item detail !exists
  created () {
    if (this.$route.name === 'edit_<moduleName>') {
      if (!this.$route.params.id) {
        return this.$router.push({ name: 'error_404' })
      }

      this.formData = _.cloneDeep({})
    }
  }
}
</script>

<style lang="scss" scoped>
  .<moduleName>-detail {
    padding: 2px 4px;
  }
</style>
