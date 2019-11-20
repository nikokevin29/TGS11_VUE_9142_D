import Vue from 'vue'
import Router from 'vue-router'
const DashboardLayout = () => import('../components/dashboardLayout.vue')
const login = () => import('../components/login.vue') 

function loadView(view) {
    return () => import(`../components/dashboardContents/${view}.vue`)
}
const routes = [{ 
    path: '/',
    component: login,
    name: 'login',
    children: [{
        name: 'landing',
        path: '/landing',
        component: loadView('landing')
    },
    {
        name: 'UserController',
        path: 'user',
        component: loadView('userController')
    },
    {
        name: 'LayananController',
        path: 'layanan',
        component: loadView('layananController')
    }]
},
]
Vue.use(Router)
const router = new Router({
    mode: 'history',
    routes: routes
})
export default router