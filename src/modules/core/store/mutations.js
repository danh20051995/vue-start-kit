/**
* File name: c:\Training\vue-start-kit\src\modules\core\store\mutations.js
* Created by Visual studio code
* User: Danh Le / danh.danh20051995@gmail.com
* Date: 2019-01-28 10:34:58
*/

const LOADING = (state, val) => (state.loading = !!val)

const PROGRESS = (state, val) => (state.progress = val)

export default {
  LOADING,
  PROGRESS,
  NOTIFY (state, notify) {
    let { type } = notify
    if (type) {
      notify.action = `show${String(type).charAt(0).toUpperCase()}${type.slice(1)}Msg`
    }
    state.notify = notify
  }
}
