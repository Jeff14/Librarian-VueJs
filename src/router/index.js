import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/Login.vue";
import BooksView from "../views/Books.vue";
import BooksSearch from "@/views/Books search.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "books",
    component: BooksView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/:bs", // Define route parameter ':bs'
    name: "bsearch",
    component: BooksSearch,
    props: (route) => ({ s: route.params.bs }),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
