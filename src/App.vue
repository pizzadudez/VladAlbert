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
  components: { SideMenu, Navbar, Modal, Hero, Contact },
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
    <div id="content">
      <main>
        <hero></hero>
        <!-- <about></about> -->
        <!-- <projects></projects> -->
        <contact></contact>
      </main>
      <footer>
        <div>&copy; 2020 Vlad Albert. All Rights Reserved.</div>
        <a :href="`mailto:${email}`">{{ email }}</a>
      </footer>
    </div>
  </div>
</template>

<style scoped lang="scss">
#content {
  main {
    min-height: 100vh;
    padding: 0 150px;
    @include media-desktop {
      padding: 0 100px;
    }
    @include media-tablet {
      padding: 0 40px;
    }
    @include media-phone {
      padding: 0 25px;
    }
    section {
      max-width: 1000px;
      margin: 0px auto;
      padding: 150px 0;
      @include media-tablet {
        padding: 80px 0;
      }
    }
    section:first-of-type {
      min-height: 100vh;
    }
  }
  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    min-height: 80px;
    padding: 12px;
    background-color: $bg-color-footer;
    > * {
      margin: 6px 12px;
    }
    div {
      color: $text-gray;
      text-align: center;
    }
    a {
      color: $text-white;
      &:hover {
        color: lighten($text-white, 30%);
      }
    }
  }
}
</style>
