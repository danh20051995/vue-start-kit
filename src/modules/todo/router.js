/**
* File name: vue-start-kit\src\modules\todo\router.js
* Created by Visual studio code
* User: Danh Le / danh.danh20051995@gmail.com
* Date: 2019-01-28 11:12:15
*/
import lazyLoad from '@/utils/lazyLoad'

export default {
  name: 'Todo demo',
  meta: {
    title: 'Todo'
  },
  children: [
    {
      name: 'todo_list',
      path: '/todos',
      component: lazyLoad('todo/components/list'),
      meta: {
        title: 'List todos'
      }
    }, {
      name: 'new_todo',
      path: '/todos/create',
      component: lazyLoad('todo/components/detail'),
      meta: {
        title: 'New todo'
      }
    }, {
      name: 'edit_todo',
      path: '/todos/:id',
      component: lazyLoad('todo/components/detail'),
      meta: {
        title: 'New todo'
      }
    }
  ]
}
