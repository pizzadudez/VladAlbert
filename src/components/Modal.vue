<script>
import { DynamicIcon } from "./icons";

export default {
  components: {
    DynamicIcon
  },
  props: {
    projectName: String
  },
  data() {
    return {
      data: "",
      readme: null
    };
  },
  methods: {
    closeModal: function() {
      this.$root.$emit("CLOSE_MODAL");
    }
  },
  watch: {
    projectName: function() {
      if (!this.projectName) {
        this.data = "";
        this.readme = null;
        return;
      }
      const {
        vue,
        attributes
      } = require(`@/content/projects/${this.projectName}/readme.md`);
      this.data = attributes;
      this.readme = vue.component;
    }
  }
};
</script>

<template>
  <transition name="fade">
    <div class="modal__root">
      <div class="modal__backdrop"></div>
      <div class="modal__container" @click.self="closeModal">
        <div class="modal__content">
          <header>
            <div class="modal__title">
              <dynamic-icon name="readme"></dynamic-icon>
              <h1>{{ this.data.name && 'Addons for World of Warcraft and a long title'}}</h1>
            </div>
            <dynamic-icon class="modal__close" name="cross" @click.native="closeModal"></dynamic-icon>
          </header>
          <component v-if="projectName" :is="readme" class="markdown"></component>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.modal {
  &__root {
    position: fixed;
    z-index: 800;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  &__backdrop {
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }
  &__container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__content {
    @include PaperContainer;
    max-height: calc(100vh - 10%);
    max-width: 800px;
    display: flex;
    flex-direction: column;
    background: $bg-color-secondary;
    padding: 0;
    margin: 18px;
  }
  &__title {
    display: flex;
    align-items: center;
    h1 {
      color: $text-gray;
      margin: 0 10px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    svg {
      flex-shrink: 0;
      height: 40px;
      width: 40px;
      fill: currentColor;
    }
  }
  &__close {
    fill: lightsalmon;
    height: 24px;
    width: 24px;
    flex-shrink: 0;
    cursor: pointer;
    transition: all 0.45s $transition-bounce;
    &:hover {
      transform: scale(1.15);
      fill: darken(lightsalmon, 10%);
    }
  }
}
header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
</style>
