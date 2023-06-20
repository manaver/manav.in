<template>
  <div class="relative h-full w-full flex flex-col">
    <AppNavView :toggleMode="toggleMode" :isDarkMode="isDarkMode" />
    <router-view :isDarkMode="isDarkMode" />
    <AppFooterView :isDarkMode="isDarkMode" />
  </div>
</template>
<script>
import AppNavView from "./components/shared/AppNav.vue";
import AppFooterView from "./components/shared/AppFooter.vue";

export default {
  name: "App",
  data() {
    return {
      isDarkMode: true,
    };
  },
  components: {
    AppNavView,
    AppFooterView,
  },
  methods: {
    toggleMode(isDarkMode) {
      this.isDarkMode = isDarkMode;
    },
  },
};
</script>
