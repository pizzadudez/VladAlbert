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
  </section>
</template>

<script>
import NavButton from "../NavButton";
export default {
  components: { NavButton }
};
</script>

<style scoped lang="scss">
section {
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
</style>
