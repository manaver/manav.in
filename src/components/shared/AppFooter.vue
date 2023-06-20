<template>
  <div
    class="allCenter flex-col space-y-4 relative h-32 p-4"
    :class="getThemeClass(isDarkMode)"
  >
    <div v-if="$route.path != '/'">
      <Social_icons />
    </div>
    <p>
      © 2023 Manav Verma.
      <a
        href="https://github.com/manaver/manav.in.git"
        class="underline underline-offset-2 italic"
        target="_gh"
        >This website is open source.</a
      >
    </p>
  </div>
</template>

<script>
import Social_icons from "../reusable/SocialIcons.vue";
import { getThemeClass } from "../../theme/theme.js";

export default {
  name: "AppFooterView",
  props: {
    isDarkMode: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    Social_icons,
  },
  methods: {
    getThemeClass,
  },
};
</script>

<style>
</style>