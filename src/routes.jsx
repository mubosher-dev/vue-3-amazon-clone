import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Basket from "./pages/Basket.vue"

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/basket",
    component: Basket,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router