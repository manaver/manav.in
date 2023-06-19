<template>
  <div class="navbar" :class="{ bgDark: isDarkMode, bgLight: !isDarkMode }">
    <div class="navLogo mx-7">
      <router-link to="/">
        <img
          class="navLogo"
          src="https://th.bing.com/th/id/OIP.1d7TQI67pwfr0F5jqTgD1AAAAA?pid=ImgDet&rs=1"
          alt="logo"
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
      <ion-icon
        @click="toggleMode(!isDarkMode)"
        class="text-2xl border border-[#B8D9BB] p-1 rounded-full cursor-pointer"
        name="moon-outline"
      ></ion-icon>

      <!-- Cat menu -->
      <ion-icon
        v-if="!isSideBarOpen"
        @click="toggleSidebar"
        size="large"
        class="cursor-pointer"
        name="menu-outline"
      ></ion-icon>

      <ion-icon
        v-else
        @click="toggleSidebar"
        size="large"
        class="cursor-pointer"
        name="close-outline"
      ></ion-icon>
    </div>
  </div>
</template>

<script>
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
  @apply font-julius h-[90px] m-0 py-3 px-10 flex flex-row flex-wrap justify-between items-center;
}
.navLogo {
  @apply w-[70px] h-[70px] rounded-full;
}
.navLinks {
  @apply z-20 w-full left-0 top-[90px] h-[calc(100vh-90px)] pt-5 space-y-4  flex-col items-end text-2xl md:flex-row md:justify-center md:items-center;
}
.navItem {
  @apply relative mx-4 w-full text-end md:w-[80px] md:text-center hover:font-bold;
}
.active {
  @apply font-bold;
}
.navIcons {
  @apply space-x-5;
}
</style>
