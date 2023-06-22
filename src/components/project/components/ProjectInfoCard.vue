<template>
  <div class="projectCard">
    <h5 class="text-2xl font-bold">
      {{ decodedContent["Project Name"] }}
    </h5>
    <p class="subHeading">
      {{ decodedContent.Subheading }}
    </p>
    <!-- Url of Project -->
    <div v-if="decodedContent['ProjectUrl']['isPublic']" class="ProjectUrl">
      <a
        :href="decodedContent.ProjectUrl.url"
        target="_url"
        class="flex items-center space-x-1"
        ><span>Check Repository</span>
        <ion-icon name="arrow-forward-outline"></ion-icon
      ></a>
      <div>It's Open Source</div>
    </div>

    <div else-if="decodedContent['LiveUrl']['isLive']" class="LiveUrl">
      <a
        :href="decodedContent.LiveUrl.url"
        target="_url"
        class="flex items-center space-x-1"
        ><span>Check Live Project</span>
        <ion-icon name="arrow-forward-outline"></ion-icon
      ></a>
    </div>
  </div>
</template>
    
    <script>
export default {
  name: "ProjectInfoCard",
  data() {
    return {
      decodedContent: "",
    };
  },
  props: {
    projectData: {
      type: String,
      required: true,
    },
    isDarkMode: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    async fetchProjectContent() {
      try {
        const response = await fetch(this.projectData);
        const data = await response.json();
        this.decodeContent(data.content);
      } catch (error) {
        console.error("Error fetching project content:", error);
      }
    },
    decodeContent(content) {
      this.decodedContent = JSON.parse(atob(content));
    },
  },

  mounted() {
    this.fetchProjectContent();
  },
};
</script>
    
    <style scoped>
.projectCard {
  @apply py-6 w-3/5 mx-auto space-y-2 border-b-2 border-gray-500 my-3;
}
.authorInfo {
  @apply text-sm flex flex-row flex-wrap justify-between;
}
.ProjectUrl {
  @apply flex flex-row flex-wrap justify-between text-sm;
}
.LiveUrl {
  @apply flex flex-row flex-wrap justify-between text-sm;
}
</style>
    