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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.1rem;
  &__description {
    margin-bottom: 10px;
  }
  ul {
    margin-top: 10px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    li {
      color: $text-gray;
      font-size: 0.9rem;
      margin: 4px 12px 0 0;
      white-space: nowrap;
    }
  }
}
</style>