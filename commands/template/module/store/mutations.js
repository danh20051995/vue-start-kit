/**
* File name: vue-start-kit\src\modules\<moduleName>\store\mutations.js
* Created by Visual studio code
* User: Danh Le / danh.danh20051995@gmail.com
* Date: 2019-01-28 11:14:49
*/
import { ensureArray } from '@/utils/helpers'

export default {
  LIST: (state, list) => (state.list = ensureArray(list))
}
