<script>
import NavButton from "../NavButton";

export default {
  components: { NavButton }
};
</script>

<template>
  <section id="contact">
    <h1 class="left-right">Contact</h1>
    <div class="contact__content">
      <p>I'm always interested about cool stuff. Are you minding a project?</p>
      <p>Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
      <nav-button class="contact__button">Lets talk!</nav-button>
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