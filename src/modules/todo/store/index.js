/**
* File name: vue-start-kit\src\modules\todo\store\index.js
* Created by Visual studio code
* User: Danh Le / danh.danh20051995@gmail.com
* Date: 2019-01-28 11:14:15
*/
import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
