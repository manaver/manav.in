<template>
  <div
    class="min-h-[calc(100vh-90px)] min-w-full bgColor"
    :class="getThemeClass(isDarkMode)"
  >
    <page_heading Heading="The Inside Scoop on My Projects" :isDarkMode="isDarkMode" />

    <BlogInfo v-for="data in blogData" :key="data.url" :blogData="data.url" :isDarkMode="isDarkMode" />

  </div>
</template>
    
    <script>
import { getThemeClass } from "../../theme/theme.js";
import BlogInfo from "./components/BlogInfoCard.vue";
import page_heading from "../reusable/PageHeading.vue";

export default {
  name: "BlogView",
  props: {
    isDarkMode: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      blogData: [],
    };
  },
  components: {
    BlogInfo,
    page_heading,
  },
  methods: {
    getThemeClass,
    fetchBlogPosts() {
      fetch(
        `https://api.github.com/repos/manaver/blog-manav.in/git/trees/main?recursive=1`
      )
        .then((response) => response.json())
        .then((data) => {
          data = data.tree.filter((item) => item.path.includes("blogs/"));
          this.blogData = data;
        });
    },
  },
  mounted() {
    this.fetchBlogPosts();
  },
};
</script>
    
    <style></style>