<script>
import { featuredProjects, projects } from '@/config';
import FeaturedProject from '../FeaturedProject';
import Project from '../Project';

export default {
  components: { Project, FeaturedProject },
  data() {
    return {
      featuredProjects,
      projects,
    };
  },
};
</script>

<template>
  <section id="projects">
    <h1 class="left-right">My projects</h1>
    <div class="featured">
      <template v-for="(project, idx) in featuredProjects">
        <featured-project
          :class="{ inverse: idx % 2 == 1 }"
          :project="project"
          :key="idx"
        ></featured-project>
      </template>
    </div>
    <h2>Other projects worth mentioning:</h2>
    <div class="projects">
      <template v-for="(project, idx) in projects">
        <project :project="project" :key="idx"></project>
      </template>
    </div>
  </section>
</template>

<style scoped lang="scss">
h1 {
  margin-bottom: 5rem;
}
h2 {
  font-size: 2.4rem;
  color: $text-gray;
  margin-bottom: 3rem;
}
.featured {
  margin-bottom: 150px;
}
.projects {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 16px;
}
</style>
