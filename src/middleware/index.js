/**
* File name: c:\Training\vue-start-kit\src\middleware\index.js
* Created by Visual studio code
* User: Danh Le / danh.danh20051995@gmail.com
* Date: 2019-01-28 09:51:31
*/
// import store from '@/modules/core/store'

export default (router) => {
  router.beforeEach((to, from, next) => {
    try {
      console.log('Valid middleware')
      if (Math.random()) {
        return next()
      }

      return next({ name: 'error_403' })
    } catch (error) {
      // Not login
      console.log(error, 'error')
      return next({ name: 'error_403' })
    }
  })
}
