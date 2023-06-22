import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home'

import daybookRouter from '@/modules/daybook/router'


const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ('../views/About')
    },
    {
        path: '/daybook',
        ...daybookRouter
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


export default router