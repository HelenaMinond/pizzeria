import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Inventario from "../views/Inventario.vue";
import Carrito from "../views/Carrito.vue";
import Ventas from "../views/Ventas.vue";
import Crear from "../views/Crear.vue";
import Vista404 from "../views/Vista404.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/inventario",
    name: "Inventario",
    component: Inventario,
  },
  {
    path: "/carrito",
    name: "Carrito",
    component: Carrito,
  },
  {
    path: "/ventas",
    name: "Ventas",
    component: Ventas,
  },
  {
    path: "/crear",
    name: "Crear",
    component: Crear,
  },
  {
    path: "*",
    name: "Vista404",
    component: Vista404,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
