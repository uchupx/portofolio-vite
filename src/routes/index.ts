// You can pass in additional options here, but let's
// keep it simple for now.
import { createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import Home from '../components/HelloWorld.vue'

const routes: Array<RouteRecordRaw> = [
    {
    path: "/",
    name: "Home",
    component: Home
  },
]
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes` 
})



export default router