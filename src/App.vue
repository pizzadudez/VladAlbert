<template>
  <div id="app">
    <navbar></navbar>
    <side-menu></side-menu>
    <router-view></router-view>
    <footer>
      <div>&copy; 2020 Vlad Albert. All Rights Reserved.</div>
      <div>
        <a href="mailto:itsvladalbert@gmail.com">itsvladalbert@gmail.com</a>
      </div>
    </footer>
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
  min-height: 80px;
  background-color: $bg-color-footer;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    color: $text-gray;
    margin-right: 40px;
    a {
      color: $text-white;
      &:hover {
        color: lighten($text-white, 30%);
      }
    }
  }
}
</style>
