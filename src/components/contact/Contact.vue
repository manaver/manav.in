<template>
  <div
    class="min-h-[calc(100vh-90px)] min-w-full bgColor"
    :class="getThemeClass(isDarkMode)"
  >
    <h1>Contact</h1>
    <p>Contact page content goes here</p>
  </div>
</template>
    
    <script>
import { getThemeClass } from "../../theme/theme.js";

export default {
  name: "ContactView",
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