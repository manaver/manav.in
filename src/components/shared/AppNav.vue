<template>
  <div class="navbar" :class="{ bgDark: isDarkMode, bgLight: !isDarkMode }">
    <div class="navLogo mx-7">
      <router-link to="/">
        <img
          class="navLogo"
          src="https://pbs.twimg.com/profile_images/1632349501351661569/8FPON-tB_400x400.jpg"
          alt=""
        />
      </router-link>
    </div>
    <div
      :class="{
        'absolute flex': isSideBarOpen,
        hidden: !isSideBarOpen,
        bgDark: isDarkMode,
        bgLight: !isDarkMode,
      }"
      class="navLinks"
    >
      <router-link
        to="/"
        class="navItem"
        :class="{ active: $route.path === '/' }"
        >Home</router-link
      >
      <router-link
        to="/about"
        class="navItem"
        :class="{ active: $route.path === '/about' }"
        >About</router-link
      >
      <router-link
        to="/blogs"
        class="navItem"
        :class="{ active: $route.path === '/blogs' }"
        >Blogs</router-link
      >
      <router-link
        to="/contact"
        class="navItem"
        :class="{ active: $route.path === '/contact' }"
        >Contact</router-link
      >
    </div>

    <!-- Theme Btn -->
    <div class="navIcons">
      <!-- Theme Icon starts -->
      <ion-icon
        v-if="isDarkMode"
        @click="toggleMode(!isDarkMode)"
        class="themeIcon"
        :class="getThemeBorderColor(isDarkMode)"
        name="moon-outline"
      ></ion-icon>
      <ion-icon
        v-else
        @click="toggleMode(!isDarkMode)"
        class="themeIcon"
        :class="getThemeBorderColor(isDarkMode)"
        name="sunny-outline"
      ></ion-icon>
      <!-- Theme icon ends -->

      <!-- Cat menu icon starts -->
      <ion-icon
        v-if="!isSideBarOpen"
        @click="toggleSidebar"
        size="large"
        class="md:hidden cursor-pointer"
        name="menu-outline"
      ></ion-icon>

      <ion-icon
        v-else
        @click="toggleSidebar"
        size="large"
        class="cursor-pointer"
        name="close-outline"
      ></ion-icon>
      <!-- Cat Menu icon ends -->
    </div>
  </div>
</template>

<script>
import { getThemeBorderColor } from "../../theme/theme.js";

export default {
  name: "AppNavView",
  data() {
    return {
      isSideBarOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSideBarOpen = !this.isSideBarOpen;
    },
    getThemeBorderColor,
  },
  props: {
    toggleMode: {
      type: Function,
      required: true,
    },
    isDarkMode: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
.navbar {
  @apply absolute font-julius h-[90px] w-screen  m-0 py-3 px-1 sm:px-10 flex flex-row flex-wrap justify-between items-center z-20;
}
.navLogo {
  @apply w-[50px] h-[50px] bg-[#5f6161] rounded-full;
}
.navLinks {
  @apply z-20 w-full md:w-fit left-0 top-[90px] md:top-0 h-[calc(100vh-90px)] md:h-full pt-5 md:pt-0 space-y-4 md:space-y-0 flex-col items-end text-2xl md:text-xl md:flex md:flex-row md:justify-center md:items-center;
}
.navItem {
  @apply relative mx-4 w-full text-end md:w-[100px] md:text-center hover:font-bold;
}
.active {
  @apply font-bold;
}
.navIcons {
  @apply space-x-5;
}
.themeIcon {
  @apply text-2xl border p-1 rounded-full cursor-pointer;
}
</style>
