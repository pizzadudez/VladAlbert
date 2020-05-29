<script>
import { DynamicIcon } from "../icons";
import { vue, attributes } from "@/content/about.md";
import sr from "@/utils/sr";

export default {
  components: { DynamicIcon },
  data() {
    return {
      data: attributes,
      about: vue.component
    };
  },
  mounted() {
    sr.reveal(this.$refs.titleAbout, sr.options.fadeLeft());
    sr.reveal(".about__content", sr.options.fadeUp(300));
    sr.reveal(this.$refs.titleTech, sr.options.fadeRight());

    for (let i = 0; i < this.$refs.tech.length; i++) {
      sr.reveal(this.$refs.tech[i], sr.options.fadeLeft(200 + i * 50));
    }
  }
};
</script>

<template>
  <section id="about">
    <div class="about">
      <!-- <h1 class="left" ref="titleAbout">About me</h1> -->
      <component class="about__content" :is="about"></component>
    </div>
    <div class="tech">
      <!-- <h1 class="right" ref="titleTech">Tech stack</h1> -->
      <div>
        <div class="tech__icon" v-for="(tech, idx) in data.technologies" :key="idx" ref="tech">
          <dynamic-icon :name="tech"></dynamic-icon>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 50px;
}
.about {
  margin-top: 70px;
}
.tech {
  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  &__icon {
    margin: 10px;
    svg {
      display: block;
      width: 90px;
      height: 90px;
      transition: all 0.4s $transition-bounce;
      &:hover {
        transform: scale(1.3);
      }
    }
  }
}
</style>
