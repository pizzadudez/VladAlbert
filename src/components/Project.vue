<template>
  <div class="project" ref="project">
    <div class="project__content">
      <div class="project__title">
        <dynamic-icon name="repo"></dynamic-icon>
        <h2>{{data.name}}</h2>
      </div>
      <ul class="project__tech-list">
        <li v-for="(tech, idx) in data.tech" :key="idx">{{tech}}</li>
      </ul>
      <div class="project__description">
        <component :is="description"></component>
      </div>
    </div>
    <div class="project__overlay">
      <h2>{{data.name}}</h2>
      <div class="project__links">
        <a
          v-if="data.github"
          :href="data.github"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <dynamic-icon name="github"></dynamic-icon>
        </a>
        <open-modal v-if="data.readme" :projectName="projectName">
          <dynamic-icon name="readme"></dynamic-icon>
        </open-modal>
        <a
          v-if="data.hosted"
          :href="data.hosted"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <dynamic-icon name="hosted"></dynamic-icon>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { DynamicIcon } from "./icons";
import OpenModal from "./OpenModal";
import sr from "@/utils/sr";

export default {
  components: { DynamicIcon, OpenModal },
  props: {
    projectName: String
  },
  data() {
    const {
      vue,
      attributes
    } = require(`@/content/projects/${this.projectName}/index.md`);
    return {
      data: attributes,
      description: vue.component
    };
  },
  mounted() {
    sr.reveal(this.$refs.project, sr.options.fadeRight(300));
  }
};
</script>

<style scoped lang="scss">
.project {
  @include paper-container;
  position: relative;
  padding: 1.1rem;
  overflow: hidden;
  min-height: 200px;

  &:hover &__overlay {
    opacity: 1;
  }
  &:hover &__content {
    filter: blur(3px);
  }
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.2s;
  }
  &__title {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    h2 {
      margin-bottom: 0;
    }
    svg {
      margin-right: 8px;
      fill: $text-color;
      height: 2.8rem;
      width: 2.8rem;
    }
  }
  &__tech-list {
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
  &__description {
    margin-top: 10px;
  }
  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: inherit;
    opacity: 0;
    transition: all 0.3s;
    background: rgba($bg-color-primary, 0.8);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    h2 {
      width: 100%;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 3rem;
      color: $text-color;
    }
  }
  &__links {
    display: flex;
    a,
    button {
      svg {
        margin: 0 10px;
        height: 3rem;
        width: 3rem;
      }
      &:hover {
        svg {
          fill: $text-color;
        }
      }
    }
  }
}
</style>