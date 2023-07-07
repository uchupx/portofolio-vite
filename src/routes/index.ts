// You can pass in additional options here, but let's
// keep it simple for now.
import { createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import Home from '../components/HelloWorld.vue'
import Works from '../pages/Works.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/work",
    name: "work",
    component: Works
  },
]
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes` 
})



export default router