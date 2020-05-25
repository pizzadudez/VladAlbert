<script>
import FeaturedProject from "../FeaturedProject";
import Project from "../Project";
import { featuredProjects, projects } from "@/config";
import sr from "@/utils/sr";

export default {
  components: { Project, FeaturedProject },
  data() {
    return {
      featuredProjects,
      projects
    };
  },
  mounted() {
    sr.reveal(this.$refs.title, sr.options.grow());
    sr.reveal(this.$refs.subtitle, sr.options.fadeLeft());
  }
};
</script>

<template>
  <section id="projects">
    <h1 class="left-right" ref="title">My projects</h1>
    <div class="featured">
      <featured-project
        v-for="(projectName, idx) in featuredProjects"
        :projectName="projectName"
        :key="idx"
        :class="{ inverse: idx % 2 == 1 }"
      ></featured-project>
    </div>
    <h2 ref="subtitle">Other projects worth mentioning:</h2>
    <div class="projects">
      <project v-for="(projectName, idx) in projects" :projectName="projectName" :key="idx"></project>
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
