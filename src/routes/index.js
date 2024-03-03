import {createRouter, createWebHistory} from 'vue-router'

import Home from "../views/Home.vue"
import Profile from "../views/Profile.vue"
import Learn from "../views/Learn.vue"
import Employers from "../views/Search.vue"
import Jobs from "../views/Jobs.vue"


const routes = [
    {
        path: '/', component: Home
    },
    {
        path: '/jobs', component: Jobs
    },
    {
        path: '/profile', component: Profile
    },
    {
        path: '/learn', component: Learn
    },
    {
        path: '/search', component: Employers
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;