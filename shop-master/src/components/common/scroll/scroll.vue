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
  props: {
    probeType: {
      type: Number,
      default: 0
    },
  },
  data() {
    return {
      Scroll: null
    };
  },
  mounted() {
    this.Scroll = new BS(".wrapper", {
      // probeType: 3,
      // pullUpLoad: true
      click: true,
      probeType: this.probeType
    });

    this.Scroll.on("scroll", position => {
      // console.log(position);
      this.$emit("scroll", position);
    });

    this.Scroll.refresh()
  },
  methods: {
    scrollTo(x, y, time) {
      this.Scroll.scrollTo(x, y, time);
    },
    refresh(){
      this.Scroll && this.Scroll.refresh()
    },
    finishPullUp(){
      this.Scroll.finishPullUp();
    }
  }
};
</script>

<style>
</style>