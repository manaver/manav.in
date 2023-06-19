<template>
  <div
    class="min-h-[calc(100vh-90px)] min-w-full bgColor"
    :class="getThemeClass(isDarkMode)"
  >
    <h1>About</h1>
    <p>About page content goes here</p>
  </div>
</template>
  
  <script>
import { getThemeClass } from "../../theme/theme.js";

export default {
  name: "AboutView",
  props: {
    isDarkMode: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    getThemeClass,
  },
};
</script>
  
  <style></style>