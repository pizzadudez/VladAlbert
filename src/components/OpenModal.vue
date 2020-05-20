<script>
export default {
  props: {
    project: String,
  },
  methods: {
    openModal: function() {
      this.$root.$emit('OPEN_MODAL', this.project);
    },
  },
};
</script>

<template>
  <button @click="openModal">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
button {
  background: transparent;
  border: none;
  cursor: pointer;
}
</style>
