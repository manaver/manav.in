<template>
  <div
    class="hero allCenter"
    :class="getThemeClass(isDarkMode)"
  >
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
      <div class="connectIcons">
        <ion-icon
          class="cursor-pointer hover:text-blue-600"
          name="logo-twitter"
        ></ion-icon>
        <ion-icon
          class="cursor-pointer hover:text-gray-600"
          name="logo-github"
        ></ion-icon>
        <ion-icon
          class="cursor-pointer hover:text-purple-600"
          name="logo-discord"
        ></ion-icon>
        <ion-icon
          class="cursor-pointer hover:text-blue-700"
          name="logo-linkedin"
        ></ion-icon>
        <ion-icon
          class="cursor-pointer hover:text-green-600"
          name="logo-whatsapp"
        ></ion-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { getThemeClass, getThemeTextColor } from "../../theme/theme.js";

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
    getThemeTextColor,
  },
};
</script>

<style>
.connectIcons {
  @apply px-10 md:px-24 flex flex-row space-x-4 text-2xl;
}
</style>