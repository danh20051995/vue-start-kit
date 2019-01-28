// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import AppPlugins from '@/plugins'
import middleware from '@/middleware'
import store from '@/modules/core/store'
import router from '@/modules/core/router'

import { sync } from 'vuex-router-sync'
// import Axios from 'axios'

window.apiPrefix = '/api'
Vue.config.productionTip = false
Vue.use(AppPlugins)

init()

async function init () {
  try {
    /* Set x-csrf-token */
    // let { data } = await Axios.get(`${window.apiPrefix}/x-csrf-token`)
    // Axios.defaults.headers.common['X-CSRF-TOKEN'] = data.csrf
    // window._allowTypes = data._allowTypes
    // window._configPath = data._configPath

    /* Load vuex, middleware */
    sync(store, router)
    middleware(router)

    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      router,
      store,
      render: createElement => createElement(App),
      template: '<App/>'
    })
  } catch (error) {
    console.error(error)
  }
}

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
