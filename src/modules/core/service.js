/**
* File name: vue-start-kit\src\modules\core\service.js
* Created by Visual studio code
* User: Danh Le / danh.danh20051995@gmail.com
* Date: 2019-01-28 11:05:31
*/
// import Axios from 'axios'

const fakeGet = formData => new Promise(resolve => setTimeout(() => resolve(formData), 1000))
const fakePut = formData => new Promise(resolve => setTimeout(() => resolve(formData), 1000))
const fakePost = formData => new Promise(resolve => setTimeout(() => resolve(formData), 1000))
const fakePatch = formData => new Promise(resolve => setTimeout(() => resolve(formData), 1000))
const fakeDelete = formData => new Promise(resolve => setTimeout(() => resolve(formData), 1000))

export default {
  fakeGet,
  fakePut,
  fakePost,
  fakePatch,
  fakeDelete
}
