<template>
  <div class="side">
    <ul class="side__list">
      <li class="side__item">test</li>
      <li class="side__item">test</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.side {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  &__list {
    list-style: none;
  }
  &__item {
    background-color: $color-test-1;
    color: white;
    width: 300px;
    height: 50px;
  }
}
</style>