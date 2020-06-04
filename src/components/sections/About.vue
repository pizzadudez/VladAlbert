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
      <h1 class="left" ref="titleAbout">About me</h1>
      <component class="about__content" :is="about"></component>
    </div>
    <div class="tech">
      <h1 class="right" ref="titleTech">Tech stack</h1>
      <div class="tech__grid">
        <div class="tech__icon" v-for="(tech, idx) in data.technologies" :key="idx" ref="tech">
          <dynamic-icon :name="tech"></dynamic-icon>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
#about {
  display: grid;
  grid-template-columns: minmax(300px, 7fr) minmax(230px, 5fr);
  column-gap: 30px;
  @include media-large {
    column-gap: 50px;
  }
  @include media-tablet {
    grid-template-columns: none;
    grid-auto-flow: row;
    row-gap: 70px;
  }
}
.about {
  margin-top: 70px;
}
.tech {
  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
    column-gap: 1.8rem;
    row-gap: 1.8rem;
    @include media-phone {
      grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
      column-gap: 1rem;
      row-gap: 1rem;
    }
    justify-content: center;
    justify-items: center;
  }
  &__icon {
    max-width: 95px;
    @include media-phone {
      max-width: 65px;
    }
    width: 100%;
    padding-top: 100%;
    position: relative;
    svg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: all 0.4s $transition-bounce;
      &:hover {
        transform: scale(1.25);
      }
    }
  }
}
</style>
