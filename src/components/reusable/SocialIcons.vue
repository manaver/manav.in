<template>
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