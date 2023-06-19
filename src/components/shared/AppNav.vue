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
    <div class="navLinks">
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
    <ion-icon
      @click="toggleMode(!isDarkMode)"
      class="text-2xl border border-[#B8D9BB] p-1 rounded-full cursor-pointer"
      name="moon-outline"
    ></ion-icon>
  </div>
</template>

<script>
export default {
  name: "AppNavView",
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
  @apply font-julius h-[90px] m-0 py-3 px-10 flex flex-row justify-between items-center;
}
.navLogo {
  @apply w-[70px] h-[70px] rounded-full;
}
.navLinks {
  @apply flex flex-row justify-center items-center;
}
.navItem {
  @apply relative mx-4 w-[80px] text-center hover:font-bold;
}
.active {
  @apply font-bold;
}
</style>
