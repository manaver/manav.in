import { createWebHistory, createRouter } from "vue-router";
import HomeView from "../components/home/Home.vue";
import AboutView from "../components/about/About.vue";
import BlogView from "../components/blog/Blog.vue";
import ContactView from "../components/contact/Contact.vue";

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
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  export default router;