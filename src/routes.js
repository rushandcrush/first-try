import Home from './components/Home.vue'
import Services from './components/Services.vue'
import Portfolio from './components/Portfolio.vue'
import Testimonial from './components/Testimonial.vue'
import Blog from './components/Blog.vue'
import Contact from './components/Contact.vue'

export const routes = [
    {path: '',component: Home, name: 'home'},
    {path: '/serv',component: Services, name: 'serv'},
    {path: '/portfolio',component: Portfolio, name: 'portfolio'},
    {path: '/test',component: Testimonial, name: 'test'},
    {path: '/blog',component: Blog, name: 'blog'},
    {path: '/contact',component: Contact, name: 'contact'},
    {path: '*', redirect: '/'}
]
