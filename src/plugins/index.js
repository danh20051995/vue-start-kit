/**
* File name: vue-start-kit\src\plugins\index.js
* Created by Visual studio code
* User: Danh Le / danh.danh20051995@gmail.com
* Date: 2019-01-28 09:54:43
*/
import Vue from 'vue'
import AppEditor from '@/plugins/components/app-editor.vue'
import * as Helpers from '@/utils/helpers'

import VeeValidate from 'vee-validate'
import VueCookie from 'vue-cookie'
import VueLocalStorage from 'vue-localstorage'

/* Register notify */
import VueNotifications from 'vue-notifications'
import iziToast from 'izitoast' // https://github.com/dolce/iziToast
import 'izitoast/dist/css/iziToast.min.css'
/* Register notify */

/* vue-quill-editor */
import VueQuillEditor from 'vue-quill-editor' // https://github.com/surmon-china/vue-quill-editor
/* Require styles */
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
/* vue-quill-editor */

/* Require bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueCookie)
Vue.use(VeeValidate, { fieldsBagName: 'formFields' })
Vue.use(VueQuillEditor)
Vue.use(VueLocalStorage)

/* App notify */
function toast ({ title, message, type, timeout, cb }) {
  if (type === VueNotifications.types.warn) type = 'warning'
  timeout = 5000
  return iziToast[type]({title, message, timeout})
}

const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
}

Vue.use(VueNotifications, options)
/* App notify */

export default {
  install (Vue, options) {
    /* Register prototype */
    Vue.prototype._helpers = Helpers

    /* Register Directives */
    Vue.directive('focus', {
      // When the bound element is inserted into the DOM...
      inserted (el) {
        // Focus the element
        el.focus()
      }
    })

    /* Register Filter */
    Vue.filter('uppercase', Helpers.uppercase)
    Vue.filter('lowercase', Helpers.lowercase)

    /* Register Component */
    Vue.component(AppEditor.name, AppEditor)

    let uuid = {}
    let appUnique = ''

    /* Mixins */
    // https://vuejs.org/v2/guide/mixins.html
    Vue.mixin({
      data: () => ({ appUnique }),

      methods: {
        nextTick () {
          return new Promise(resolve => this.$nextTick(resolve))
        },
        isPdf (fileName) {
          return typeof fileName === 'string' && fileName.match(/\.(pdf)$/gmi)
        },
        isPhoto (fileName) {
          return typeof fileName === 'string' && fileName.match(/\.(jpeg|jpg|png|gif|bmp)$/gmi)
        },
        isAudio (fileName) {
          return typeof fileName === 'string' && fileName.match(/\.(wav|mp3)$/gmi)
        },
        isVideo (fileName) {
          return typeof fileName === 'string' && fileName.match(/\.(avi|wmv|flv|mpg|mp4|webm|mkv|vob|ogv|ogg|drc|gifv|mng|mov|qt|yuv|rm|rmvb|asf|amv|m4p|m4v|mp2|mpeg|mpe|mpv|svi|3gp|3g2|mxf|roq|nsv|f4v|f4p|f4a|f4b)$/gmi)
        },
        download (url) {
          // window.open(url, 'Download')
          let link = document.createElement('a')
          link.href = url
          link.download = name
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        },
        copy (e) {
          let text = e
          if (e instanceof MouseEvent) {
            text = e.target.innerText
          } else {
            text = typeof e === 'string' ? e : JSON.stringify(e)
          }

          let el = document.createElement('textarea')
          el.value = text
          el.setAttribute('readonly', '')
          el.style.position = 'absolute'
          el.style.left = '-9999px'

          let selected = document.getSelection().rangeCount > 0 // Check if there is any content selected previously
            ? document.getSelection().getRangeAt(0) // Store selection if found
            : false

          document.body.appendChild(el)
          el.select()
          document.execCommand('copy')
          document.body.removeChild(el)

          if (selected) {
            document.getSelection().removeAllRanges() // Unselect everything on the HTML document
            document.getSelection().addRange(selected) // Restore the original selection
          }

          /* Alert the copied text */
          // this.successHandle('Successfully.', 'Copy')
        },
        /* App notify */
        errorHandle (error, title) {
          Helpers.errorNotify({
            title: title || this.$options.notifyTitle || 'Error',
            message: Helpers.apiErrorMessage(error.response || error)
          })
        },
        successHandle (message, title) {
          Helpers.successNotify({
            title: title || this.$options.notifyTitle || 'Success',
            message
          })
        },
        warnHandle (message, title) {
          Helpers.warnNotify({
            title: title || this.$options.notifyTitle || 'Warn',
            message
          })
        },
        infoHandle (message, title) {
          Helpers.infoNotify({
            title: title || this.$options.notifyTitle || 'Info',
            message
          })
        }
      },

      beforeCreate () {
        uuid[this.$options.name] = Number(uuid[this.$options.name]) || 0
        uuid[this.$options.name]++
        appUnique = this.$options.name + '-' + uuid[this.$options.name]
      }
    })
  }
}
