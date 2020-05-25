<script>
import NavButton from "../NavButton";
import { email } from "@/config";
import { vue, attributes } from "@/content/contact.md";
import sr from "@/utils/sr";

export default {
  components: { NavButton },
  data() {
    return {
      email,
      content: vue.component,
      buttonText: attributes.button
    };
  },
  mounted() {
    sr.reveal(this.$refs.title, sr.options.grow());
    sr.reveal(this.$refs.content, sr.options.fadeUp(500));
  }
};
</script>

<template>
  <section id="contact">
    <h1 class="left-right" ref="title">Contact</h1>
    <div class="contact__content" ref="content">
      <component :is="content"></component>
      <a :href="`mailto:${email}`">
        <nav-button class="contact__button">{{buttonText}}</nav-button>
      </a>
    </div>
  </section>
</template>

<style scoped lang="scss">
.contact {
  &__content {
    max-width: 520px;
    margin: auto;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  &__button {
    margin-top: 40px;
  }
}
</style>