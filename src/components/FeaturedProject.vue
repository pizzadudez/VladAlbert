<template>
  <div class="featured">
    <div class="featured__info-container">
      <div class="featured__header">
        <h2>{{project.name}}</h2>
        <div class="featured__links">
          <a v-if="project.github" :href="project.github" target="_blank">
            <dynamic-icon name="github"></dynamic-icon>
          </a>
          <a v-if="project.hosted" :href="project.hosted" target="_blank">
            <dynamic-icon name="hosted"></dynamic-icon>
          </a>
        </div>
      </div>
      <div class="featured__description">
        <p>{{project.description}}</p>
      </div>
      <ul>
        <li v-for="(tech, idx) in project.tech" :key="idx">{{tech}}</li>
      </ul>
    </div>
    <a class="featured__cover" :href="project.github" target="_blank">
      <div>
        <img :src="require('@/content/projects/' + project.cover)" />
      </div>
    </a>
  </div>
</template>

<script>
import { DynamicIcon } from "./icons";

export default {
  components: { DynamicIcon },
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
    position: relative;
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    /* position: relative; */
    overflow: hidden;
    border-radius: 4px;
    box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -15px;
    z-index: 1;

    /* min-height: 100%; */
    height: 100%;
    &:hover,
    &:focus {
      &:before {
        background: transparent;
      }
      img {
        filter: none;
        transform: scale(1.01);
      }
    }
    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      z-index: 1;
      background-color: rgba(221, 189, 100, 0.13);
      transition: background-color 0.4s;
    }

    div {
      z-index: 2;
      /* width: auto; */
      height: 100%;
      /* object-fit: cover; */

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
        filter: grayscale(70%) contrast(1) brightness(80%);
        transition: all 0.3s;
        z-index: 3;
        &:hover,
        &:focus {
          filter: none;
        }
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
    p {
      margin: 0;
      padding: 2px;
    }
  }
  &__header {
    display: flex;
    margin-bottom: 12px;
    text-align: center;
    align-items: center;
    h2 {
      margin: 0;
      font-size: 2.4rem;
    }
  }
  &__links {
    display: flex;
    margin: 0 20px;
    a {
      svg {
        width: 1.9rem;
        height: 1.9rem;
        margin: 0 6px;
        transition: all 0.2s ease-in-out;
      }
      &:hover,
      &:active,
      &:focus {
        svg {
          fill: $text-color;
        }
      }
    }
  }
}
.inverse {
  .featured {
    &__cover {
      grid-column: 1 / 8;
    }
    &__info-container {
      grid-column: 7 / -1;
      h2 {
        text-align: right;
      }
      ul {
        justify-content: flex-end;
      }
    }
    &__header {
      flex-direction: row-reverse;
    }
  }
}
</style>