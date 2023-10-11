import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/aviso",
    name: "aviso",
    component: () => import("../views/AvisoView.vue"),
  },
  {
    path: "/contacto",
    name: "contacto",
    component: () => import("../views/ContactoView.vue"),
  },
  {
    path: "/pedidos",
    name: "pedidos",
    component: () => import("../views/PedidosView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
