// You can pass in additional options here, but let's
// keep it simple for now.
import { createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Home from '../components/HelloWorld.vue'
import Works from '../pages/Works.vue'
import Blogs from '../pages/Blogs.vue'
import Experienece from '../pages/Experienece.vue'


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
  {
    path: "/blog",
    name: "blog",
    component: Blogs
  },
  {
    path: "/experience",
    name: "experience",
    component: Experienece
  }
]
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes` 
})



export default router