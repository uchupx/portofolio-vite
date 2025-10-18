// You can pass in additional options here, but let's
// keep it simple for now.
import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Home from '../pages/HomeNew.vue'
import Login from '../pages/Login.vue'
import Skills from "../pages/admin/Skills.vue";
import Dashboard from "../pages/admin/Dashboard.vue";


const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: Home,
        meta: {
            requiresAuth: false,
            adminOnly: false
        }
    },
    {
        path: "/login",
        name: "login",
        component: Login,
        meta: {
            requiresAuth: false,
            adminOnly: false
        }
    },

    {
        path: "/admin",
        name: "admin_home",
        component: Dashboard,
        meta: {
            requiresAuth: true,
            adminOnly: true
        }
    },

    {
        path: "/admin/skills",
        name: "admin_skills",
        component: Skills,
        meta: {
            requiresAuth: true,
            adminOnly: true
        }
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router