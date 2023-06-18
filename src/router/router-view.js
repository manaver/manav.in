import { createWebHistory, createRouter } from "vue-router";
import HomeView from "../components/home/Home.vue";
import AboutView from "../components/about/About.vue";
import BlogView from "../components/blog/Blog.vue";

const routes = [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },    
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },    
    {
      path: "/blog",
      name: "blog",
      component: BlogView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  export default router;