<template>
  <div id="app">
    <router-view />
    <main-tab-bar class="tab-bar"></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "@/components/content/mainTabbar/MainTabBar.vue";
export default {
  name: "App",
  components: {
    MainTabBar
  },
};
</script>

<style>
@import "./assets/css/base.css";
.tab-bar{
  z-index: 10;
}
</style>
