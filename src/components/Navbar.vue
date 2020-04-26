<template>
  <div :class="{ hidden: hidden }" class="navbar">{{ lastScrollY }}</div>
</template>

<script>
import throttle from 'lodash.throttle';

const revealHeight = 100; // Show navbar only when hero is not visible

export default {
  data() {
    return {
      hidden: true,
      lastScrollY: 0,
      scrollDirectionTop: false,
    };
  },
  methods: {
    handleScroll: function() {
      const scrollY = window.scrollY;
      if (scrollY > this.lastScrollY) {
        this.scrollDirectionTop = false;
      } else {
        this.scrollDirectionTop = true;
      }
      if (scrollY > revealHeight && this.scrollDirectionTop) {
        this.hidden = false;
      } else {
        this.hidden = true;
      }
      this.lastScrollY = scrollY;
    },
  },
  created() {
    window.addEventListener('scroll', throttle(this.handleScroll, 100));
  },
};
</script>

<style scoped lang="scss">
.navbar {
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  background-color: $color-test-1;

  height: 60px;

  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
}
.navbar.hidden {
  transform: translateY(-100%);
}
</style>
