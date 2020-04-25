<template>
  <div class="side">
    <ul class="side__list">
      <li class="side__item">
        <a href="https://www.vladalbert.com/" target="_blank">
          <span>Github</span>
          <dynamic-icon name="github"></dynamic-icon>
        </a>
      </li>
      <li class="side__item">
        <a href="https://www.vladalbert.com/" target="_blank">
          <span>Linkedin</span>
          <dynamic-icon name="linkedin"></dynamic-icon>
        </a>
      </li>
      <li class="side__item">
        <a href="https://www.vladalbert.com/" target="_blank">
          <span>Github</span>
          <dynamic-icon name="github"></dynamic-icon>
        </a>
      </li>
      <li class="side__item">
        <a href="https://www.vladalbert.com/" target="_blank">
          <span>Linkedin</span>
          <dynamic-icon name="linkedin"></dynamic-icon>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { DynamicIcon } from "./icons";

export default {
  components: { DynamicIcon }
};
</script>

<style lang="scss" scoped>
.side {
  position: absolute;
  top: 50%;
  left: -88px;
  transform: translateY(-50%);

  &__list {
    list-style: none;
  }

  &__item {
    a {
      display: flex;
      background-color: $color-test-1;
      text-decoration: none;
      color: white;
      padding: 8px;
      transition: all 0.5s $transition-bounce;
      &:hover,
      &:focus,
      &:active {
        transform: translateX(80px);
      }

      span {
        display: inline-block;
        width: 80px;
        margin-right: 8px;
        text-align: right;
        font-size: 1.2rem;
      }
      svg {
        /* display: block; */
        width: 26px;
        height: 26px;
      }
    }
  }
}
</style>