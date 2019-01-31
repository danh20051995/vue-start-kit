# vue-start-kit

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader)

## Work space

``` bash
└── src
    ├── main.js     # main app
    ├── App.vue     # main app component
    ├── assets      # static content
    ├── layouts     # app layout components
    ├── middleware  # vue-router a simple middleware
    ├── modules     # vue-router a simple middleware
    |   ├── core    # core module, where setting up vue-router, vuex
    |   |   ├── components  # app simple component (home, 404, 403)
    |   |   ├── store       # register vuex - store
    |   |   ├── router.js   # register vue-router
    |   |   └── service.js  # abstractions for making API requests
    |   |
    |   ├── todo    # todo module [demo]
    |   |   ├── components  # module components
    |   |   ├── store       # module store
    |   |   ├── router.js   # module router
    |   |   └── service.js  # module service
    |   |
    |   └── ...
    |
    ├── plugins     # vue plugins install location
    ├── styles      # global - helper style
    └── utils       # utility functions
```

## Installed plugins, package

### Core plugins
|     Plugin          |     Installed location  |
|     ------------    |     -----------         |
| [vuex](https://github.com/vuejs/vuex) | [./src/modules/core/store/index.js](https://github.com/danh20051995/vue-start-kit/blob/master/src/modules/core/store/index.js) |
| [vue-router](https://github.com/vuejs/vue-router) | [./src/modules/core/router.js](https://github.com/danh20051995/vue-start-kit/blob/master/src/modules/core/router.js) |
| [vuex-router-sync](https://github.com/vuejs/vuex-router-sync) | [./src/main.js](https://github.com/danh20051995/vue-start-kit/blob/master/src/main.js) |
| [vee-validate](https://github.com/baianat/vee-validate) | [./src/plugins/index.js](https://github.com/danh20051995/vue-start-kit/blob/master/src/plugins/index.js) |
| [vue-cookie](https://github.com/alfhen/vue-cookie) | [./src/plugins/index.js](https://github.com/danh20051995/vue-start-kit/blob/master/src/plugins/index.js) |
| [vue-localstorage](https://github.com/pinguinjkeke/vue-local-storage) | [./src/plugins/index.js](https://github.com/danh20051995/vue-start-kit/blob/master/src/plugins/index.js) |


### Notify and notify template
|     Plugin          |     Installed location  |
|     ------------    |     -----------         |
| [vue-notifications](https://github.com/se-panfilov/vue-notifications) | [./src/plugins/index.js](https://github.com/danh20051995/vue-start-kit/blob/master/src/plugins/index.js) |
| [izitoast](https://github.com/marcelodolza/iziToast) | [./src/plugins/index.js](https://github.com/danh20051995/vue-start-kit/blob/master/src/plugins/index.js) |


### Editor component
|     Plugin          |     Installed location  |
|     ------------    |     -----------         |
| [vue-quill-editor](https://github.com/surmon-china/vue-quill-editor) | [./src/plugins/index.js](https://github.com/danh20051995/vue-start-kit/blob/master/src/plugins/index.js) |


### Util plugins:
|     Plugin          |     Installed location  |
|     ------------    |     -----------         |
| HTTP client | [axios](https://github.com/axios/axios) |
| custom | [./src/plugins/index.js](https://github.com/danh20051995/vue-start-kit/blob/master/src/plugins/index.js) |

<!-- Todo
### Commands (run with node)

`vue-start-kit` responds to the following commands:

Example: `node commander addModule --name="todo"`
|     Command          |     Description  |
|     ------------     |     -----------  |
|     ------------     |     -----------  |
|     ------------     |     -----------  | -->
