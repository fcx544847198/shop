<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BS from "better-scroll";

export default {
  name: "scroll",
  data() {
    return {
      Scroll: null
    };
  },
  mounted() {
    this.Scroll = new BS(".wrapper", {
      probeType: 3,
      pullUpLoad: true
    });
  }
};
</script>

<style>
</style>