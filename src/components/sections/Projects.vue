<template>
  <section id="projects">
    <template v-for="(project, idx) in projects">
      <project :project="project" :key="idx"></project>
    </template>
  </section>
</template>

<script>
import data from "../../content/projects.json";
import Project from "../Project";

export default {
  components: { Project },
  data() {
    return {
      projects: data.projects
    };
  }
};
</script>

<style scoped lang="scss">
section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 16px;
}
</style>
