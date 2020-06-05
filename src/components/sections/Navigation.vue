<template>
  <div :class="{ hidden: hidden }" class="nav">
    <nav class="navbar">
      <ul class="navbar__links">
        <li>
          <a href v-scroll-to="'#hero'">Home</a>
        </li>
        <li>
          <a href v-scroll-to="'#about'">About</a>
        </li>
        <li>
          <a href v-scroll-to="'#projects'">Projects</a>
        </li>
        <li>
          <a href v-scroll-to="'#contact'">Contact</a>
        </li>
      </ul>
      <div class="navbar__hamburger" @click="toggleMenu">
        <hamburger :class="{ open: menuOpen}"></hamburger>
      </div>
    </nav>
    <nav-menu :class="{ open: menuOpen }" v-on:scroll-to="toggleMenu"></nav-menu>
  </div>
</template>

<script>
import throttle from "lodash.throttle";
import Hamburger from "../Hamburger";
import NavMenu from "../NavMenu";

// const revealHeight = 100; // Show navbar only when hero is not visible

export default {
  components: { NavMenu, Hamburger },
  data() {
    return {
      hidden: true,
      lastScrollY: 0,
      scrollDirectionTop: false,
      menuOpen: false
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
    },
    toggleMenu: function() {
      this.menuOpen = !this.menuOpen;
      // Body scrolling
      document.body.classList[this.menuOpen ? "add" : "remove"]("modal-open");
    }
  },
  created() {
    window.addEventListener("scroll", throttle(this.handleScroll, 100));
    this.$on("SCROLL_TO", () => {
      this.menuOpen = false;
    });
  }
};
</script>

<style scoped lang="scss">
.nav {
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
  background-color: $bg-color-primary;
  box-shadow: $box-shadow;
  height: 60px;
  transition: transform 0.2s cubic-bezier(0.645, 0.045, 0.355, 1),
    box-shadow 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  z-index: 100;
  &.hidden {
    transform: translateY(-100%);
    box-shadow: none;
  }
}
.navbar {
  display: flex;
  width: 100%;
  justify-content: center;
  &__links {
    display: flex;
    align-items: center;
    list-style: none;
    @include media-tablet {
      display: none;
    }
    li {
      margin: 0 20px;
      font-size: 1.8rem;
    }
  }
  &__hamburger {
    display: none;
    margin-left: auto;
    padding: 20px;
    z-index: 101;
    height: 100%;
    align-items: center;
    @include media-tablet {
      display: flex;
    }
  }
}
</style>
