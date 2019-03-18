import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// import App from '../App.vue'
import Home from '../pages/Home.vue'
import Tap from '../pages/Tap.vue'
import Find from '../pages/Find.vue'
import Cart from '../pages/Cart.vue'
import Mine from '../pages/Mine.vue'
<<<<<<< HEAD
import Login from '../pages/Login.vue'
import List from '../pages/List.vue'
=======
import List from '../pages/List.vue'
import Sousuo from '../pages/Sousuo.vue'

>>>>>>> a0d871f94e2df1eee7767e7216c28eafcd762700
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
            meta:{
                showFoot: true
            }
        },
        {
            path: '/tap',
            name: 'Tap',
            component: Tap,
            meta:{
                showFoot: true
            }
        },
        {
            path: '/find',
            name: 'Find',
            component: Find,
            meta:{
                showFoot: true
            }
        },
        {
            path: '/cart',
            name: 'Cart',
            component: Cart,
            meta:{
                showFoot: true
            }
        },
        {
            path: '/mine',
            name: 'Mine',
<<<<<<< HEAD
            component: Mine
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path:'/list',
            name:'List',
            component:List
=======
            component: Mine,
            meta:{
                showFoot: true
            }
        },
        {
            path: '/list',
            name: 'List',
            component: List,
            meta:{
                showFoot: false
            }
        },
        {
            path: '/sousuo',
            name: 'Sousuo',
            component: Sousuo,
            meta:{
                showFoot: false
            }
>>>>>>> a0d871f94e2df1eee7767e7216c28eafcd762700
        }
    ]
})

export default router