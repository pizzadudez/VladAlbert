<template>
  <component :is="name"></component>
</template>

<script>
import * as components from "./index";

export default {
  components: { ...components },
  props: ["name"]
};
</script>