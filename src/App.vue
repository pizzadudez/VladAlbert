<template>
  <div id="app">
    <navbar></navbar>
    <side-menu></side-menu>
    <router-view></router-view>
    <footer></footer>
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  components: { SideMenu, Navbar }
};
</script>

<style scoped lang="scss">
footer {
  min-height: 100px;
  background-color: $bg-color-footer;
}
</style>
