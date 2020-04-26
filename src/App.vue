<template>
  <div id="app">
    <navbar></navbar>
    <side-menu></side-menu>
    <div id="content">
      <main>
        <hero></hero>
        <hero></hero>
        <hero></hero>
      </main>
    </div>
    <footer>Footer</footer>

    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />-->
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu.vue";
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/sections/Hero.vue";

export default {
  components: { SideMenu, Navbar, Hero }
};
</script>

<style lang="scss">
#content {
  min-height: 100vh;

  // REMOVE: test
  color: black;
  main {
    padding: 0 200px;
    section {
      max-width: 1000px;
      padding: 150px 0;
      margin: 0px auto;
      min-height: 500px; //test
    }
    section:first-of-type {
      min-height: 100vh;
    }
  }
}
footer {
  min-height: 100px;
  background-color: $color-test-1;
}
</style>
