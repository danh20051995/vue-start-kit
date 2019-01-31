/**
* File name: vue-start-kit\src\modules\core\router.js
* Created by Visual studio code
* User: Danh Le / danh.danh20051995@gmail.com
* Date: 2019-01-28 10:32:07
*/
import Vue from 'vue'
import Router from 'vue-router'
import lazyLoad from '@/utils/lazyLoad'

/* Register modules router */
import todo from '@/modules/todo/router'

const menus = [
  todo
]

Vue.use(Router)

function generateRoutesFromMenu (menu = [], routes = []) {
  for (let i = 0, l = menu.length; i < l; i++) {
    let item = menu[i]
    if (item.path) {
      routes.push(item)
    }
    if (item.children) {
      generateRoutesFromMenu(item.children, routes)
    }
  }
  return routes
}

export default new Router({
  mode: process && process.env && process.env.NODE_ENV === 'development' ? 'hash' : 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      component: lazyLoad('core/components/home'),
      meta: {
        title: 'Home',
        activeMenu: 'home'
      }
    },
    {
      name: 'error_404',
      path: '/404',
      component: lazyLoad('core/components/404'),
      meta: {
        auth: false,
        title: 'Not Found'
      }
    },
    {
      name: 'error_403',
      path: '/403',
      component: lazyLoad('core/components/403'),
      meta: {
        auth: false,
        title: 'Denied Permission'
      }
    },
    ...generateRoutesFromMenu(menus),
    {
      path: '*',
      redirect: {
        name: 'error_404' // getDefaultRoute(menus).name
      }
    }
  ]
})
