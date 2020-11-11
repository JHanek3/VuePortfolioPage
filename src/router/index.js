import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Ostore from "../views/Ostore.vue"
import Oproduct from "../views/Oproduct.vue"
import Ocart from "../views/Ocart.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("../views/Projects.vue"),
  },
  {
    path: "/todo",
    name: "Todo",
    component: () => import("../views/Todo.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("../views/Signup.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue"),
  },
  {
    path: "/newsapp",
    name: "Newsapp",
    component: () => import("../views/Newsapp.vue"),
  },
  {
    path: "/jokes",
    name: "Jokes",
    component: () => import("../views/Jokes.vue")
  },
  {
    path: "/quickmap",
    name: "Quickmap",
    component: () => import("../views/Quickmap.vue"),
  },
  {
    path: "/breweries",
    name: "Breweries",
    component: () => import("../views/rBrew.vue"),
  },
  {
    path: '/heroes',
    name: "Heroes",
    component: () => import("../views/Heroes.vue")
  },
  {
    path: '/store',
    name: "Store",
    component: Ostore
  },
  {
    path: '/store/:id',
    name: 'Oproduct',
    component: Oproduct
  },
  {
    path: '/cart/',
    name: 'Cart',
    component: Ocart
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
