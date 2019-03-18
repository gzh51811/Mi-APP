import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// import App from '../App.vue'
import Home from '../pages/Home.vue'
import Tap from '../pages/Tap.vue'
import Find from '../pages/Find.vue'
import Cart from '../pages/Cart.vue'
import Mine from '../pages/Mine.vue'
import Details from '../pages/Details.vue';
import Login from '../pages/Login.vue';
import Sousuo from '../pages/Sousuo.vue';
import List from '../pages/List.vue';

let router = new VueRouter({
    routes:[
        {
            path: '/',
            redirect: 'home'
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
            meta: {
                showFoot: true
            }
        },
        {
            path: '/list',
            name: 'List',
            component: List,
            meta: {
                showFoot: false
            }
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
            meta: {
                showFoot: false
            }
        },
        {
            path: '/sousuo',
            name: 'Sousuo',
            component: Sousuo,
            meta: {
                showFoot: false
            }
        },
        {
            path: '/tap',
            name: 'Tap',
            component: Tap,
            meta: {
                showFoot: true
            }
        },
        {
            path: '/find',
            name: 'Find',
            component: Find,
            meta: {
                showFoot: true
            }
        },
        {
            path: '/cart',
            name: 'Cart',
            component: Cart,
            meta: {
                showFoot: false
            }
        },
        {
            path: '/mine',
            name: 'Mine',
            component: Mine,
            meta: {
                showFoot: true
            }
        },
        {
            path: '/details',
            name: 'Details',
            component: Details,
            meta: {
                showFoot: false
            }
        }
    ]
})

export default router