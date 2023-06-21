<template>
  <div class="connectIcons">
    <a href="https://twitter.com/Manav1924" target="_contact">
      <ion-icon
        class="cursor-pointer hover:text-blue-600"
        name="logo-twitter"
      ></ion-icon>
    </a>
    <a href="https://github.com/manaver" target="_contact">
      <ion-icon
        class="cursor-pointer hover:text-gray-600"
        name="logo-github"
      ></ion-icon>
    </a>
    <a
      href="https://www.linkedin.com/in/manav-verma-590a92204/"
      target="_contact"
    >
      <ion-icon
        class="cursor-pointer hover:text-blue-700"
        name="logo-linkedin"
      ></ion-icon>
    </a>
    <a href="https://api.whatsapp.com/send?phone=916006572059" target="_contact">
      <ion-icon
        class="cursor-pointer hover:text-green-600"
        name="logo-whatsapp"
      ></ion-icon>
    </a>
  </div>
</template>

<script>
export default {
  name: "Social_Icons",
};
</script>

<style>
.connectIcons {
  @apply flex flex-row space-x-4 text-2xl;
}
</style>