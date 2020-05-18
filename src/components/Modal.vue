<script>
export default {
  props: {
    file: String,
  },
  methods: {
    closeModal: function() {
      this.$root.$emit('CLOSE_MODAL');
    },
  },
  computed: {
    markdownFile() {
      if (this.file) {
        return () => import(`@/content/projects/readme/${this.file}`);
      }
      return null;
    },
  },
};
</script>

<template>
  <div>
    <button @click="closeModal">CLOSE ME</button>
    <component v-if="file" :is="markdownFile"></component>
  </div>
</template>

<style scoped lang="scss">
div {
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 500px;
  width: 500px;
  background-color: white;
}
</style>
