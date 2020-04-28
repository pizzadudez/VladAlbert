<template>
  <section id="hero">
    <h1>Vlad Albert</h1>
    <h2>webdev extraordinaire</h2>
    <span>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</span>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
  </section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
section {
  background-color: $bg-color-secondary;
  min-height: 100vh;
  text-align: center;
  h1 {
    font-size: 3.5rem;
    color: $text-color;
  }
  h2 {
    font-size: 2rem;
    color: $text-white;
  }
  span {
    font-size: 1.5rem;
    color: $text-lightGray;
  }
  p {
    color: $text-gray;
  }
}
</style>
