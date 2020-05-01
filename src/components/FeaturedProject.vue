<template>
  <div class="featured">
    <div class="featured__info-container">
      <h2>{{project.name}}</h2>
      <div class="featured__description">{{project.description}}</div>
      <ul>
        <li v-for="(tech, idx) in project.tech" :key="idx">{{tech}}</li>
      </ul>
    </div>
    <a class="featured__cover">
      <div>
        <img :src="require('@/content/projects/' + project.cover)" />
      </div>
    </a>
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
.featured {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  gap: 6px;
  &__cover {
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -15px;
    z-index: 1;

    /* min-height: 100%; */
    height: 100%;

    div {
      width: auto;
      height: 100%;
      object-fit: cover;

      /* width: 100%;
      height: 100%; */
      img {
        display: block;
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center center;
        /* position: absolute;
        top: 0;
        left: 0; */
      }
    }
  }
  &__info-container {
    grid-column: 1 / 7;
    grid-row: 1 / -1;
    z-index: 2;
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
  &__description {
    @include PaperContainer;
  }
}
</style>