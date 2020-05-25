<script>
import SideMenu from "@/components/SideMenu.vue";
import Navbar from "@/components/Navbar.vue";
import Modal from "@/components/Modal.vue";

import Hero from "@/components/sections/Hero.vue";
import Projects from "@/components/sections/Projects.vue";
import About from "@/components/sections/About.vue";
import Contact from "@/components/sections/Contact.vue";
import { email } from "@/config";

export default {
  components: { SideMenu, Navbar, Modal, Hero, Projects, About, Contact },
  data() {
    return {
      email,
      modalOpen: false,
      projectName: null
    };
  },
  created() {
    this.$root.$on("OPEN_MODAL", projectName => {
      this.modalOpen = true;
      this.projectName = projectName;
      document.body.classList.add("modal-open");
    });
    this.$root.$on("CLOSE_MODAL", () => {
      this.modalOpen = false;
      document.body.classList.remove("modal-open");
    });
  }
};
</script>

<template>
  <div id="app">
    <modal v-show="modalOpen" :projectName="projectName"></modal>
    <navbar></navbar>
    <side-menu></side-menu>
    <main>
      <div id="content">
        <hero></hero>
        <about></about>
        <projects></projects>
        <contact></contact>
      </div>
    </main>
    <footer>
      <div>&copy; 2020 Vlad Albert. All Rights Reserved.</div>
      <div>
        <a :href="`mailto:${email}`">{{ email }}</a>
      </div>
    </footer>
  </div>
</template>

<style scoped lang="scss">
main {
  min-height: 100vh;
  #content {
    padding: 0 200px;
    section {
      max-width: 1000px;
      padding: 150px 0;
      margin: 0px auto;
    }
    section:first-of-type {
      min-height: 100vh;
    }
  }
}
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
