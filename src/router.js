import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import Forfan from './components/Forfan.vue'
import Portfolio from './components/Portfolio.vue'
import Testimonial from './components/Testimonial.vue'
import Blog from './components/Blog.vue'
import Contact from './components/Contact.vue'

Vue.use(VueRouter)

const routes = [
    {path: '/', component: Portfolio, name: 'home'},
    {path: '/fun', component: Forfan, name: 'fun'},
    {path: '/home', component: Home, name: 'portfolio'},
    {path: '/test', component: Testimonial, name: 'test'},
    {path: '/blog', component: Blog, name: 'blog'},
    {path: '/contact', component: Contact, name: 'contact'},
    {path: '*', redirect: '/'}
]

export default new VueRouter({mode: 'history', routes})
