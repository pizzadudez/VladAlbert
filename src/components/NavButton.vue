<script>
export default {};
</script>

<template>
  <button>
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<style scoped lang="scss">
button {
  background: transparent;
  border-color: rgba(darken($text-color, 30%), 0.4);
  border-style: solid;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  span {
    font-family: $font-primary;
    font-size: 1.65rem;
    display: block;
    color: $text-color;
    padding: 12px 16px;
  }
  &:hover,
  &:active,
  &:focus {
    background: rgba($text-color, 0.07);
    border-color: darken($text-color, 30%);
    outline: none;
  }
}
</style>