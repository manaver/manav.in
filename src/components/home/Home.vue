<template>
  <div
    class="min-h-[calc(100vh-90px)] min-w-full bgColor"
    :class="getThemeClass(isDarkMode)"
  >
    <h1>Home</h1>
    <p>Home page content goes here</p>
  </div>
</template>

<script>
import { getThemeClass } from "../../theme/theme.js";

export default {
  name: "HomeView",
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