<script>
export default {
  props: {
    projectName: String
  },
  data() {
    return {
      data: "nothing",
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
        this.data = "nothing";
        this.readme = null;
        return;
      }
      const {
        vue,
        attributes
      } = require(`@/content/projects/${this.projectName}/readme.md`);
      this.data = attributes.attr;
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
          <button @click="closeModal">CLOSE ME</button>
          <h2>{{ this.data }}</h2>
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
    max-width: 900px;
    display: flex;
    flex-direction: column;
    background: $bg-color-secondary;
    padding: 10px;
    margin: 18px;
  }
}
</style>
