<script>
import AppHeader from './components/AppHeader.vue';
import { RouterLink } from 'vue-router';
import AppFooter from "./components/AppFooter.vue";

export default {
  name: 'App',

  components: {
    AppHeader,
    AppFooter,
  }

}


</script>

<template>

  <AppHeader />

  <router-view></router-view>

  <AppFooter />


</template>

<style scoped></style>
