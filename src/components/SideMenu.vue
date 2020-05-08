<template>
  <div class="side">
    <ul>
      <li>
        <a href="https://www.vladalbert.com/" target="_blank">
          <span>Github</span>
          <dynamic-icon name="github"></dynamic-icon>
        </a>
      </li>
      <li>
        <a href="https://www.vladalbert.com/" target="_blank">
          <span>Linkedin</span>
          <dynamic-icon name="linkedin"></dynamic-icon>
        </a>
      </li>
      <li>
        <a href="https://www.vladalbert.com/" target="_blank">
          <span>E-mail</span>
          <dynamic-icon name="mail"></dynamic-icon>
        </a>
      </li>
      <li>
        <a href="https://www.vladalbert.com/" target="_blank">
          <span>Resume</span>
          <dynamic-icon name="resume"></dynamic-icon>
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
  position: fixed;
  top: 65%;
  left: -98px;
  transform: translateY(-50%);

  ul {
    list-style: none;
    a {
      box-shadow: $box-shadow;
      display: flex;
      align-items: center;
      background-color: $bg-color-secondary;
      text-decoration: none;
      color: white;
      padding: 8px;
      transition: all 0.5s $transition-bounce;
      &:hover,
      &:focus,
      &:active {
        transform: translateX(90px);
      }

      span {
        display: inline-block;
        width: 90px;
        margin-right: 8px;
        text-align: right;
        font-size: 1.4rem;
      }
      svg {
        width: 34px;
        height: 34px;
      }
    }
  }
}
</style>