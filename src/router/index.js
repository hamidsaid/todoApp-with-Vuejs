import { createRouter, createWebHistory} from 'vue-router';

import Home from '../views/Home'
import About from '../views/About'

//all routes shoulb be registered in here e.g
//consists of the path,name and the view/page/component to render

const routes = [
    {
        path:'/',
        name:'Home',
        component:Home
    },
    {
        path:'/about',
        name:'About',
        component:About
    }
]

//define a router
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router;