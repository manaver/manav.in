<template>
  <AppNavView />
   <router-view></router-view>
</template>
<script>
import AppNavView from './components/shared/AppNav.vue';

export default {
  name: 'App',
  components: {
    AppNavView
  }
}

</script>
