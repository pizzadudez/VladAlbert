<script>
export default {
  props: {
    file: String,
  },
  data() {
    return {
      data: 'nothing',
      readme: null,
    };
  },
  methods: {
    closeModal: function() {
      this.$root.$emit('CLOSE_MODAL');
    },
  },
  watch: {
    file: function() {
      if (!this.file) {
        this.data = 'nothing';
        this.readme = null;
      }
      const {
        vue,
        attributes,
      } = require(`@/content/projects/readme/${this.file}`);
      this.data = attributes.attr;
      this.readme = vue.component;
    },
  },
};
</script>

<template>
  <div class="modal">
    <div class="container">
      <button @click="closeModal">CLOSE ME</button>
      <h2>{{ this.data }}</h2>
      <component v-if="file" :is="readme" class="markdown"></component>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal {
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 500px;
  width: 500px;
  background-color: white;
}
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: $bg-color-secondary;
}
</style>
