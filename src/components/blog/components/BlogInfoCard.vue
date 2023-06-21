<template>
  <div
    class="blogCard py-6 w-3/5 mx-auto space-y-2 border-b-2 border-gray-500 my-3"
  >
    <h5 class="text-2xl font-bold">
      {{ decodedContent.Heading }}
    </h5>
    <div class="authorInfo text-sm flex flex-row flex-wrap justify-between">
      <p class="author">Author: {{ decodedContent.Author }}</p>
      <p class="author">Published on: {{ decodedContent.Date }}</p>
    </div>
    <p class="subHeading">
      {{ decodedContent.Subheading }}
    </p>
    <div class="flex flex-row flex-wrap justify-between text-sm">
      <a href="" class="flex items-center space-x-1"
        ><span>Check Blog</span>
        <ion-icon name="arrow-forward-outline"></ion-icon
      ></a>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "BlogInfoCard",
  data() {
    return {
      decodedContent: "",
    };
  },
  props: {
    blogData: {
      type: String,
      required: true,
    },
    isDarkMode: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    async fetchBlogContent() {
      try {
        const response = await fetch(this.blogData);
        const data = await response.json();
        this.decodeContent(data.content);
      } catch (error) {
        console.error("Error fetching blog content:", error);
      }
    },
    decodeContent(content) {
      this.decodedContent = JSON.parse(atob(content));
    },
  },

  mounted() {
    this.fetchBlogContent();
  },
};
</script>
  
  <style scoped>
.blogCard {
  /* Add your desired styles here */
}
</style>
  