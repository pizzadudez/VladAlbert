<script>
import { DynamicIcon } from "../icons";
import { vue, attributes } from "@/content/about.md";

export default {
  components: { DynamicIcon },
  data() {
    return {
      data: attributes,
      about: vue.component
    };
  }
};
</script>

<template>
  <section id="about">
    <div class="about">
      <h1 class="left">About me</h1>
      <component :is="about"></component>
    </div>
    <div class="stack">
      <h1 class="right">Tech stack</h1>
      <div>
        <dynamic-icon v-for="(tech, idx) in data.technologies" :name="tech" :key="idx"></dynamic-icon>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  display: grid;
  grid-template-columns: minmax(400px, 500px) minmax(200px, 400px);
  column-gap: 50px;
}
.about {
  margin-top: 70px;
}
.stack {
  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  svg {
    display: block;
    padding: 20px;
    width: 130px;
    height: 130px;
    transition: all 0.4s $transition-bounce;
    &:hover {
      padding: 0;
    }
  }
}
</style>
