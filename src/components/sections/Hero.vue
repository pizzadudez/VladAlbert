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
      showScrollArrows: true,
      loading: true
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
    <transition name="fade-down" appear>
      <h1 style="transition-delay: 300ms">
        {{ data.title }}
        <span>{{ data.name }}</span>
        .
      </h1>
    </transition>
    <transition name="fade-down" appear>
      <h2 style="transition-delay: 450ms">{{ data.subtitle }}</h2>
    </transition>
    <transition name="fade-down" appear>
      <component class="description" :is="description" style="transition-delay: 600ms"></component>
    </transition>
    <!-- <transition name="fade-right" appear>
      <div class="nav" style="transition-delay: 800ms">
        <nav-button v-scroll-to="'#about'">About</nav-button>
        <nav-button v-scroll-to="'#projects'">Projects</nav-button>
        <nav-button @click.native="openSideMenu()">Contact</nav-button>
        <a :href="links.resume" target="_blank" rel="nofollow noopener noreferrer">
          <nav-button>Resume</nav-button>
        </a>
      </div>
    </transition>-->
    <transition name="fade" appear>
      <scroll-arrows
        v-show="showScrollArrows"
        style="transition-delay: 1000ms"
        v-scroll-to="'#about'"
      ></scroll-arrows>
    </transition>
  </section>
</template>

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
