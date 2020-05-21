<script>
import NavButton from "../NavButton";
import ScrollArrows from "../ScrollArrows";
import { links } from "@/config";
import { vue, attributes } from "@/content/hero.md";

export default {
  components: { NavButton, ScrollArrows },
  data() {
    return {
      data: attributes,
      description: vue.component,
      links,
      showScrollArrows: true
    };
  },
  methods: {
    hideScrollArrows: function() {
      this.showScrollArrows = false;
      window.removeEventListener("scroll", this.hideScrollArrows);
    },
    openSideMenu: function() {
      this.$root.$emit("OPEN_SIDE_MENU");
    }
  },
  created() {
    window.addEventListener("scroll", this.hideScrollArrows);
  }
};
</script>

<template>
  <section id="hero">
    <h1>
      {{data.title}}
      <span>{{data.name}}</span>
      .
    </h1>
    <h2>{{data.subtitle}}</h2>
    <component class="description" :is="description"></component>
    <div class="nav">
      <nav-button v-scroll-to="'#about'">About</nav-button>
      <nav-button v-scroll-to="'#projects'">Projects</nav-button>
      <nav-button @click.native="openSideMenu()">Contact</nav-button>
      <a :href="links.resume" target="_blank" rel="nofollow noopener noreferrer">
        <nav-button>Resume</nav-button>
      </a>
    </div>
    <transition name="fade">
      <scroll-arrows v-if="showScrollArrows" v-scroll-to="'#about'"></scroll-arrows>
    </transition>
  </section>
</template>

<style scoped lang="scss">
#hero >>> .description >>> p {
  background: pink;
}
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
  ::v-deep .description p {
    margin-top: 1.8rem;
    max-width: 600px;
    font-size: 1.5rem;
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
