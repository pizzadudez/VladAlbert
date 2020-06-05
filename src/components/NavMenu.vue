<script>
export default {
  methods: {
    scrollTo: function() {
      this.$emit("scroll-to");
    }
  }
};
</script>

<template>
  <div class="menu__container">
    <ul class="menu__navigation">
      <li>
        <a href @click="scrollTo" v-scroll-to="'#hero'">Home</a>
      </li>
      <li>
        <a href @click="scrollTo" v-scroll-to="'#about'">About</a>
      </li>
      <li>
        <a href @click="scrollTo" v-scroll-to="'#projects'">Projects</a>
      </li>
      <li>
        <a href @click="scrollTo" v-scroll-to="'#contact'">Contact</a>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.menu {
  &__container {
    position: fixed;
    display: none;
    flex-direction: column;
    width: 60vw;
    height: 100vh;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 4rem;
    background-color: $bg-color-secondary;
    transform: translateX(100vw);
    transition: transform 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    @include media-tablet {
      display: flex;
    }
    &.open {
      transform: translateX(0);
    }
  }
  &__navigation {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    list-style: none;
    li {
      margin: 16px 0;
      font-size: 3rem;
    }
  }
}
</style>