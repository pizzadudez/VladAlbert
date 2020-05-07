<script>
export default {};
</script>

<template>
  <a>
    <span></span>
    <span></span>
    <span></span>
    <p>scroll down</p>
  </a>
</template>

<style scoped lang="scss">
a {
  position: absolute;
  bottom: 5rem;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 3rem;
  cursor: pointer;
  p {
    color: $text-gray;
    margin-top: 4em;
    font-size: 0.4em;
    opacity: 0.5;
  }
}
span {
  display: block;
  width: 1em;
  height: 1em;
  border-bottom: 0.08em solid $text-gray;
  border-right: 0.08em solid $text-gray;
  transform: rotate(45deg);
  margin-bottom: -0.4em;
  opacity: 0;
  animation: scroll 2s infinite;
}
span:nth-of-type(2) {
  animation-delay: -0.1s;
}
span:nth-of-type(3) {
  animation-delay: -0.2s;
}
@keyframes scroll {
  0% {
    opacity: 0;
    transform: rotate(45deg) translate(-0.7em, -0.7em);
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(45deg) translate(0.7em, 0.7em);
  }
}
</style>