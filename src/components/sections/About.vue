<template>
  <section id="about">
    <div class="about">
      <h1 class="left">About me</h1>
      <p>I'm a full stack web developerI'm a full stack web developerI'm a full stack web developerI'm a full stack web developerI'm a full stack web developerI'm a full stack web developerI'm a full stack web developer</p>
      <p>I'm a full stack web developerI'm a full stack web developerI'm a full stack web developerI'm a full stack web developerI'm a full stack web developerI'm a full stack web developerI'm a full stack web developer</p>
    </div>
    <div class="stack">
      <h1 class="right">Tech stack</h1>
      <div>
        <dynamic-icon name="html5"></dynamic-icon>
        <dynamic-icon name="css3"></dynamic-icon>
        <dynamic-icon name="sass"></dynamic-icon>
        <dynamic-icon name="javascript"></dynamic-icon>
        <dynamic-icon name="react"></dynamic-icon>
        <dynamic-icon name="vue"></dynamic-icon>
        <dynamic-icon name="nodejs"></dynamic-icon>
        <dynamic-icon name="python"></dynamic-icon>
        <dynamic-icon name="django"></dynamic-icon>
        <dynamic-icon name="postgres"></dynamic-icon>
        <dynamic-icon name="mysql"></dynamic-icon>
      </div>
    </div>
  </section>
</template>

<script>
import { DynamicIcon } from "../icons";
export default {
  components: { DynamicIcon }
};
</script>

<style scoped lang="scss">
section {
  display: grid;
  grid-template-columns: minmax(400px, 650px) minmax(200px, 300px);
  column-gap: 50px;
}
.stack {
  margin-top: 80px;
  > div {
    display: flex;
    flex-wrap: wrap;
  }
  svg {
    min-width: 50px;
    min-height: 50px;
    max-width: 90px;
    max-height: 90px;
  }
}
</style>
