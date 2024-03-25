import { createRouter, createWebHashHistory } from "vue-router";

import Layout from "@/layout/mainLayout.vue";
import Home from "@/pages/home/index.vue";
const routes = [
  { path:"/", 
    redirect:"/home",
    component: Layout,
    children:[
      {
        path:"home",
        component:Home
      },
      {
        path:"digital_man",
        component: ()=> import('@/pages/digital_man/index.vue')
      },
      {
        path:"interact",
        component:()=> import('@/pages/interact/index.vue')
      },
      {
        path:"about",
        component:()=> import('@/pages/about/index.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;