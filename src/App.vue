<template>
  <div id="app">
    <modal v-show="modalOpen" :file="modalFile"></modal>
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
import SideMenu from '@/components/SideMenu.vue';
import Navbar from '@/components/Navbar.vue';
import Modal from '@/components/Modal.vue';

export default {
  components: { SideMenu, Navbar, Modal },
  data() {
    return {
      modalOpen: false,
      modalFile: null,
    };
  },
  created() {
    this.$root.$on('OPEN_MODAL', file => {
      this.modalOpen = true;
      this.modalFile = file;
    });
    this.$root.$on('CLOSE_MODAL', () => {
      this.modalOpen = false;
      this.modalFile = null;
    });
  },
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
