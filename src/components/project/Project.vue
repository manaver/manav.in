<template>
  <div
    class="hero flex justify-center flex-col pt-10"
    :class="getThemeClass(isDarkMode)"
  >
    <page_heading
      Heading="The Inside Scoop on My Projects"
      :isDarkMode="isDarkMode"
    />

    <ProjectInfo
      v-for="data in projectData"
      :key="data.url"
      :projectData="data.url"
      :isDarkMode="isDarkMode"
    />
  </div>
</template>
    
    <script>
import { getThemeClass } from "../../theme/theme.js";
import ProjectInfo from "./components/ProjectInfoCard.vue";
import page_heading from "../reusable/PageHeading.vue";

export default {
  name: "ProjectView",
  props: {
    isDarkMode: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      projectData: [],
    };
  },
  components: {
    ProjectInfo,
    page_heading,
  },
  methods: {
    getThemeClass,
    fetchProject() {
      fetch(
        `https://api.github.com/repos/manaver/info-manav.in/git/trees/main?recursive=1`
      )
        .then((response) => response.json())
        .then((data) => {
          data = data.tree.filter((item) => item.path.includes("projects/"));
          this.projectData = data;
        });
    },
  },
  mounted() {
    this.fetchProject();
  },
};
</script>
    
    <style></style>