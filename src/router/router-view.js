import { createWebHistory, createRouter } from "vue-router";
import HomeView from "../components/home/Home.vue";
import AboutView from "../components/about/About.vue";
import BlogView from "../components/blog/Blog.vue";
import ProjectView from "../components/project/Project.vue";

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
      path: "/blogs",
      name: "blog",
      component: BlogView,
    },    
    {
      path: "/projects",
      name: "project",
      component: ProjectView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    mode: 'hash'
  });
  export default router;