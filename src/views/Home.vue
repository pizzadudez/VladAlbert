<template>
  <div id="content">
    <main>
      <hero></hero>
      <about></about>
      <projects></projects>
    </main>
  </div>
</template>

<script>
import Hero from "@/components/sections/Hero.vue";
import Projects from "@/components/sections/Projects.vue";
import About from "@/components/sections/About.vue";

export default {
  components: { Hero, Projects, About }
};
</script>

<style scoped lang="scss">
#content {
  min-height: 100vh;
  main {
    padding: 0 200px;
    section {
      max-width: 1000px;
      padding: 150px 0;
      margin: 0px auto;
    }
    section:first-of-type {
      min-height: 100vh;
    }
  }
}
</style>
