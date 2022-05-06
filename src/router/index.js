import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
import {
    AlignTextLeft,
    MusicMenu
} from "@icon-park/vue-next";

import Layout from '@/Layout/index.jsx'

const routes = [{
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/home',
    children: [{
        path: 'home',
        name: 'Home',
        meta: {
            navBarLeftIcon: AlignTextLeft,
            navBarRightIcon: MusicMenu,
            navBarComponent: 'navBarCenter'
        },
        component: () =>
            import ('@/pages/home/home')
    }, {
        path: 'my',
        name: 'My',
        meta: {
            navBarLeftIcon: AlignTextLeft,
        },
        component: () =>
            import ('@/pages/my/my')
    }]
}, ]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router