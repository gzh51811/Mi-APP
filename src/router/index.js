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

let router = new VueRouter({
    routes:[
        {
            path: '/',
            redirect: 'home'
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/tap',
            name: 'Tap',
            component: Tap
        },
        {
            path: '/find',
            name: 'Find',
            component: Find
        },
        {
            path: '/cart',
            name: 'Cart',
            component: Cart
        },
        {
            path: '/mine',
            name: 'Mine',
            component: Mine
        },
        {
            path: '/details',
            name: 'Details',
            component: Details
        }
    ]
})

export default router