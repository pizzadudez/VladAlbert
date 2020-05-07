<template>
  <section id="about">
    <div class="about">
      <h1 class="left">About me</h1>
      <p>I'm a full stack web developerI'm a full stack web developerI'm a full stack web developerI'm a full stack web developerI'm a full stack web developerI'm a full stack web developerI'm a full stack web developer</p>
      <p>I'm a full stack web developerI'm a full stack web developerI'm a full stack web developerI'm a full stack web developerI'm a full stack web developerI'm a full stack web developerI'm a full stack web developer</p>
    </div>
    <div class="skills">
      <h1 class="right">Tech stack</h1>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
section {
  display: grid;
  grid-template-columns: minmax(400px, 650px) minmax(200px, 300px);
  column-gap: 50px;
}
.skills {
  margin-top: 80px;
  h1 {
    text-align: end;
  }
}
.about {
}
</style>
