/**
* File name: vue-start-kit\src\modules\todo\store\state.js
* Created by Visual studio code
* User: Danh Le / danh.danh20051995@gmail.com
* Date: 2019-01-28 11:14:56
*/
import helpers from '@/utils/helpers'

export default {
  list: Array.from(new Array(10), () => ({
    _id: helpers.lowercase(helpers.randomString(24)),
    name: 'name: ' + helpers.lowercase(helpers.randomString(50)),
    description: 'description: ' + helpers.lowercase(helpers.randomString(150))
  }))
}
