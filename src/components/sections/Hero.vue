<template>
  <section id="hero">
    <h1>
      Hello, I'm
      <span>Vlad Albert</span>
      .
    </h1>
    <h2>I'm a full stack web developer.</h2>
    <div class="description">
      <p>I'm a full stack web developerI'm a full stack web developerI'm a full stack web developerI'm a full stack web developerI'm a full stack web developerI'm a full stack web developerI'm a full stack web developer</p>
    </div>
    <div class="nav">
      <nav-button v-scroll-to="'#about'">About</nav-button>
      <nav-button v-scroll-to="'#projects'">Projects</nav-button>
      <nav-button>Contact</nav-button>
      <nav-button>Resume</nav-button>
    </div>
    <transition name="fade">
      <scroll-arrows v-if="showScrollArrows" v-scroll-to="'#about'"></scroll-arrows>
    </transition>
  </section>
</template>

<script>
import NavButton from "../NavButton";
import ScrollArrows from "../ScrollArrows";

export default {
  components: { NavButton, ScrollArrows },
  data() {
    return {
      showScrollArrows: true
    };
  },
  methods: {
    hideScrollArrows: function() {
      this.showScrollArrows = false;
      window.removeEventListener("scroll", this.hideScrollArrows);
    }
  },
  created() {
    window.addEventListener("scroll", this.hideScrollArrows);
  }
};
</script>

<style scoped lang="scss">
section {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  h1 {
    font-size: 4rem;
    color: $text-white;
    span {
      font-size: 5.5rem;
      color: $text-color;
    }
  }
  h2 {
    font-size: 4rem;
    color: $text-white;
  }
  .description {
    margin-top: 1.8rem;
    max-width: 600px;
    font-size: 1.5rem;
    color: $text-lightGray;
  }
  .nav {
    margin-top: 2rem;
    display: flex;
    button {
      margin-right: 18px;
    }
  }
}
.fade-leave-active {
  transition: opacity 1.5s;
}
.fade-leave-to {
  opacity: 0;
}
</style>
