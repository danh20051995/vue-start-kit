<template>
  <div id="app" class="d-flex flex-column">
    <Header/>
    <div class="flex-1-1-auto">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '@/layouts/header'
import Footer from '@/layouts/footer'

export default {
  name: 'App',

  components: {
    Header,
    Footer
  },

  // Notify config
  notifications: {
    showSuccessMsg: {
      type: 'success'
    },
    showInfoMsg: {
      type: 'info'
    },
    showWarnMsg: {
      type: 'warn'
    },
    showErrorMsg: {
      type: 'error'
    }
  },

  computed: {
    ...mapGetters({
      'notify': 'notify'
    })
  },

  watch: {
    // Push notify
    notify (notify) {
      this[notify.action](notify)
    }
  }
}
</script>

<style lang="scss">
  @import "./styles/app";
  @import "./styles/helper";
</style>
