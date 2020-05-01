<template>
  <section id="projects">
    <div class="featured">
      <template v-for="(project, idx) in featured">
        <featured-project :project="project" :key="idx"></featured-project>
      </template>
    </div>
    <div class="projects">
      <template v-for="(project, idx) in projects">
        <project :project="project" :key="idx"></project>
      </template>
    </div>
  </section>
</template>

<script>
import { projects, featured } from "../../content";
import FeaturedProject from "../FeaturedProject";
import Project from "../Project";

export default {
  components: { Project, FeaturedProject },
  data() {
    return {
      projects,
      featured
    };
  }
};
</script>

<style scoped lang="scss">
.featured {
  margin-bottom: 150px;
}
.projects {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 16px;
}
</style>
