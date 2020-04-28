<template>
  <div :class="{ hidden: hidden }" class="navbar">
    <ul>
      <li>
        <a href v-scroll-to="'#hero'">Hero</a>
      </li>
      <li>
        <a href v-scroll-to="'#skills'">Skills</a>
      </li>
      <li>
        <a href v-scroll-to="'#projects'">Projects</a>
      </li>
    </ul>
  </div>
</template>

<script>
import throttle from "lodash.throttle";

// const revealHeight = 100; // Show navbar only when hero is not visible

export default {
  data() {
    return {
      hidden: true,
      lastScrollY: 0,
      scrollDirectionTop: false
    };
  },
  methods: {
    handleScroll: function() {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      if (scrollY > this.lastScrollY) {
        this.scrollDirectionTop = false;
      } else {
        this.scrollDirectionTop = true;
      }
      if (scrollY > vh && this.scrollDirectionTop) {
        this.hidden = false;
      } else {
        this.hidden = true;
      }
      this.lastScrollY = scrollY;
    }
  },
  created() {
    window.addEventListener("scroll", throttle(this.handleScroll, 100));
  }
};
</script>

<style scoped lang="scss">
.navbar {
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  background-color: $bg-color-primary;
  box-shadow: $box-shadow;
  height: 60px;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    li {
      margin: 0 20px;
      font-size: 1.8rem;
      a {
        text-decoration: none;
      }
    }
  }
}
.navbar.hidden {
  transform: translateY(-100%);
  box-shadow: none;
}
</style>
