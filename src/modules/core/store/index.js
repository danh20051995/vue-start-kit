/**
* File name: c:\Training\vue-start-kit\src\modules\core\store\index.js
* Created by Visual studio code
* User: Danh Le / danh.danh20051995@gmail.com
* Date: 2019-01-28 09:54:26
*/
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

/* Register modules store */
import todo from '@/modules/todo/store'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true, // process.env.NODE_ENV !== 'production',
  state,
  actions,
  getters,
  mutations,
  modules: {
    todo
  }
})

export default store
