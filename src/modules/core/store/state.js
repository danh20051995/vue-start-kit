/**
* File name: vue-start-kit\src\modules\core\store\state.js
* Created by Visual studio code
* User: Danh Le / danh.danh20051995@gmail.com
* Date: 2019-01-28 10:35:03
*/

export default {
  loading: false,
  progress: 0,
  notify: {
    type: 'success',
    action: 'showSuccessMsg',
    title: 'Example title',
    message: 'Example message!'
  },
  development: process && process.env && process.env.NODE_ENV === 'development'
}
