/**
* File name: vue-start-kit\src\modules\<moduleName>\router.js
* Created by Visual studio code
* User: Danh Le / danh.danh20051995@gmail.com
* Date: 2019-01-28 11:12:15
*/
import lazyLoad from '@/utils/lazyLoad'

export default {
  name: '<ModuleName> module',
  meta: {
    title: '<ModuleName>'
  },
  children: [
    {
      name: '<moduleName>_list',
      path: '/<moduleName>s',
      component: lazyLoad('<moduleName>/components/list'),
      meta: {
        title: 'List <moduleName>s'
      }
    }, {
      name: 'new_<moduleName>',
      path: '/<moduleName>s/create',
      component: lazyLoad('<moduleName>/components/detail'),
      meta: {
        title: 'New <moduleName>'
      }
    }, {
      name: 'edit_<moduleName>',
      path: '/<moduleName>s/:id',
      component: lazyLoad('<moduleName>/components/detail'),
      meta: {
        title: 'New <moduleName>'
      }
    }
  ]
}
