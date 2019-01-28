/**
* File name: c:\Training\vue-start-kit\src\utils\helpers.js
* Created by Visual studio code
* User: Danh Le / danh.danh20051995@gmail.com
* Date: 2019-01-28 11:19:22
*/
import moment from 'moment'
require('moment-precise-range-plugin')

const tempDay = () => moment().format('MMM-DD-YYYY')
const sleep = time => new Promise(resolve => setTimeout(resolve, time))
const isArray = arr => Array.isArray(arr)
const isObject = obj => obj instanceof Object && !Array.isArray(obj)
const ensureArray = (arr, defaultValue) => isArray(arr) ? arr : isArray(defaultValue) ? defaultValue : []
const ensureObject = (obj, defaultValue) => isObject(obj) ? obj : isObject(defaultValue) ? defaultValue : {}
const timeZone = () => new Date().getTimezoneOffset() / -60
const uppercase = string => String(string).toUpperCase()
const lowercase = string => String(string).toLowerCase()

/* vuex store and notify */
let globalCommit
let globalState

const getState = () => {
  if (globalState) {
    return globalState
  }
  let { state } = require('@/modules/core/store').default
  globalState = state
  return state
}

const getCommit = () => {
  if (globalCommit) {
    return globalCommit
  }
  let {commit} = require('@/modules/core/store').default
  globalCommit = commit
  return commit
}

const errorNotify = notify => {
  let commit = getCommit()
  commit('NOTIFY', Object.assign(notify, { type: 'error' }), {
    root: true
  })
}

const successNotify = notify => {
  let commit = getCommit()
  commit('NOTIFY', Object.assign(notify, { type: 'success' }), {
    root: true
  })
}

const warnNotify = notify => {
  let commit = getCommit()
  commit('NOTIFY', Object.assign(notify, { type: 'warn' }), {
    root: true
  })
}

const infoNotify = notify => {
  let commit = getCommit()
  commit('NOTIFY', Object.assign(notify, { type: 'info' }), {
    root: true
  })
}

// Commit to core module
const rootCommit = (action = '', data) => {
  let commit = getCommit()
  return commit(action, data, { root: true })
}

const apiErrorMessage = response => {
  try {
    if (response && typeof response === 'object') {
      return (response.data && (response.data.message || response.data.error || JSON.stringify(response.data, null, 2))) || response.data || response.message || response
    }

    return typeof response === 'string' ? response : JSON.stringify(response, null, 2)
  } catch (error) {
    return String(response)
  }
}
/* vuex store and notify */

export {
  tempDay,
  sleep,
  isArray,
  isObject,
  ensureArray,
  ensureObject,
  timeZone,
  uppercase,
  lowercase,
  getState,
  getCommit,
  errorNotify,
  successNotify,
  warnNotify,
  infoNotify,
  rootCommit,
  apiErrorMessage
}

export default {
  tempDay,
  sleep,
  isArray,
  isObject,
  ensureArray,
  ensureObject,
  timeZone,
  uppercase,
  lowercase,
  getState,
  getCommit,
  errorNotify,
  successNotify,
  warnNotify,
  infoNotify,
  rootCommit,
  apiErrorMessage
}
