<script>
import { DynamicIcon } from "./icons";
import { links, email } from "@/config";

export default {
  components: { DynamicIcon },
  data() {
    return {
      links,
      email,
      emphasize: false
    };
  },
  created() {
    this.$root.$on("OPEN_SIDE_MENU", () => {
      this.emphasize = true;
      setTimeout(() => {
        this.emphasize = false;
      }, 5000);
    });
  }
};
</script>

<template>
  <div class="side">
    <ul :class="{emphasize: emphasize}">
      <li>
        <a :href="links.github" target="_blank" rel="nofollow noopener noreferrer">
          <span>Github</span>
          <dynamic-icon name="github"></dynamic-icon>
        </a>
      </li>
      <li>
        <a :href="links.linkedin" target="_blank" rel="nofollow noopener noreferrer">
          <span>Linkedin</span>
          <dynamic-icon name="linkedin"></dynamic-icon>
        </a>
      </li>
      <li>
        <a :href="`mailto:${email}`" target="_blank" rel="nofollow noopener noreferrer">
          <span>E-mail</span>
          <dynamic-icon name="mail"></dynamic-icon>
        </a>
      </li>
      <li>
        <a :href="links.resume" target="_blank" rel="nofollow noopener noreferrer">
          <span>Resume</span>
          <dynamic-icon name="resume"></dynamic-icon>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.side {
  position: fixed;
  top: 65%;
  left: -98px;
  transform: translateY(-50%);
  z-index: 999;
  @include media-tablet {
    display: none;
  }

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
    &.emphasize {
      a {
        &:hover,
        &:active,
        &:focus {
          transform: none;
        }
      }
      li {
        animation: open 4s;
      }
      li:nth-of-type(2) {
        animation-delay: 0.1s;
      }
      li:nth-of-type(3) {
        animation-delay: 0.2s;
      }
      li:nth-of-type(4) {
        animation-delay: 0.3s;
      }
    }
  }
}

@keyframes open {
  0% {
    transform: translateX(0);
  }
  5% {
    transform: translateX(90px);
  }
  95% {
    transform: translateX(90px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>