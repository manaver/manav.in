<template>
  <div class="pageHeading">
    {{ Heading }}
    <div
      class="absolute left-1/2 transform -translate-x-1/2 -bottom-3 w-[70%] h-[2px]"
      :class="getThemeClass(!isDarkMode)"
    ></div>
  </div>
</template>

<script>
import { getThemeClass } from "../../theme/theme.js";

export default {
  name: "page_heading",
  props: {
    isDarkMode: {
      type: Boolean,
      required: true,
    },
    Heading: {
      type: String,
      required: true,
    },
  },
  methods: {
    getThemeClass,
  },
};
</script>

<style scoped>
.pageHeading {
  @apply relative text-5xl w-fit mb-14 mx-auto font-extralight text-center;
}
</style>