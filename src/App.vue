<template>
  <div id="app">
    <SideMenu></SideMenu>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view />
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu.vue";
export default {
  components: { SideMenu }
};
</script>

<style lang="scss">
#app {
  position: relative;
  min-height: 100%;
  padding: 1rem;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
