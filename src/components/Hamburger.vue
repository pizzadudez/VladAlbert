<script>
export default {};
</script>

<template>
  <div class="hamburger">
    <div class="hamburger__inner"></div>
  </div>
</template>

<style scoped lang="scss">
.hamburger {
  position: relative;
  width: 40px;
  height: 24px;
  &__inner,
  &__inner:before,
  &__inner:after {
    position: absolute;
    width: 40px;
    height: 4px;
    border-radius: 4px;
    background-color: $text-lightGray;
  }
  &__inner {
    transition-delay: 0.22s;
    transition: background-color 0s linear 0.13s;

    &:before,
    &:after {
      content: "";
      display: block;
    }
    &:before {
      top: 10px;
      transition: top 0.1s cubic-bezier(0.33333, 0.66667, 0.66667, 1) 0.2s,
        transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    &:after {
      top: 20px;
      transition: top 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1) 0.2s,
        transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
  }
}
.open {
  .hamburger {
    &__inner {
      background: transparent;
    }
    &__inner:before {
      top: 0;
      transform: translateY(10px) rotate(45deg);

      transition: top 0.1s cubic-bezier(0.33333, 0, 0.66667, 0.33333) 0.15s,
        transform 0.13s cubic-bezier(0.215, 0.61, 0.355, 1) 0.22s;
    }
    &__inner:after {
      top: 0;
      transform: translateY(10px) rotate(-45deg);

      transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
        transform 0.13s cubic-bezier(0.215, 0.61, 0.355, 1) 0.22s;
    }
  }
}
</style>