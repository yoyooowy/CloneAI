import { createRouter, createWebHashHistory } from "vue-router";

import Layout from "@/layout/mainLayout.vue";
import Home from "@/pages/home/index.vue";
const routes = [
  { path:"/", 
    component: Layout,
    children:[
      {
        path:"",
        redirect:"/home"
      },
      {
        path:"home",
        component: Home
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;