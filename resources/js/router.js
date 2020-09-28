import Vue from 'vue'
// router global regostration
import Router from 'vue-router'
Vue.use(Router)

import firstPage from './components/pages/myFirstVuePage'
import newRoutePage from './components/pages/newRoutePage'
import hooks from './components/pages/basic/hooks'
import methods from './components/pages/basic/methods'

// admin panel
import home from './components/pages/home'
import tags from './components/pages/tags'

const routes = [
    { path: '/my-new-vue-route',component: firstPage },
    { path: '/new-route',component: newRoutePage },    
    // hooks
    { path: '/hooks',component: hooks },
    { path: '/methods',component: methods },
    // admin panel
    { path: '/home', component: home },
    { path: '/tags', component: tags },
]

export default new Router({
    mode: 'history',
    routes
})
