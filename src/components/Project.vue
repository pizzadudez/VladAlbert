<template>
  <div class="project">
    <header>
      <h2>{{project.name}}</h2>
      <div class="project__description">
        <p>{{project.description}}</p>
      </div>
    </header>
    <footer>
      <ul>
        <li v-for="(tech, idx) in project.tech" :key="idx">{{tech}}</li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    project: Object
  }
};
</script>

<style scoped lang="scss">
.project {
  @include PaperContainer;
  background-color: $bg-color-secondary;
  padding: 1.1rem;
  &__description {
    margin-bottom: 10px;
  }
  ul {
    list-style: none;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    gap: 8px;
    li {
      color: $text-gray;
      /* border: 1px solid black;
      border-radius: 6px; */
      padding: 0 4px;
    }
  }
}
</style>