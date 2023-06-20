<template>
  <div class="hero allCenter" :class="getThemeClass(isDarkMode)">
    <div class="md:w-[900px] space-y-8">
      <h1
        class="px-10 md:px-24 text-4xl w-full md:text-5xl font-bold"
        :class="getThemeTextColor(isDarkMode)"
      >
        Full-Stack Developer with a Passion for Laravel.
      </h1>
      <p class="px-10 md:px-24">
        Hi there! I'm Manav Verma, a passionate developer from J&K, India. I
        love diving into new challenges and constantly expanding my skills.
        Currently, I'm on an exciting journey of exploration, eager to discover
        and learn about innovative technologies.
      </p>
      <Social_Icons class="px-10 md:px-24" />
    </div>
  </div>
</template>

<script>
import { getThemeClass, getThemeTextColor } from "../../theme/theme.js";
import Social_Icons from "../reusable/SocialIcons.vue";

export default {
  name: "HomeView",
  props: {
    isDarkMode: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    Social_Icons,
  },
  methods: {
    getThemeClass,
    getThemeTextColor,
  },
};
</script>
