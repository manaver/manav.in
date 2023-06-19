<template>
  <AppNavView :toggleMode="toggleMode" :isDarkMode="isDarkMode" />
  <router-view :isDarkMode="isDarkMode" />
</template>
<script>
import AppNavView from "./components/shared/AppNav.vue";

export default {
  name: "App",
  data() {
    return {
      isDarkMode: true,
    };
  },
  components: {
    AppNavView,
  },
  methods: {
    toggleMode(isDarkMode) {
      this.isDarkMode = isDarkMode;
    },
  },
};
</script>
