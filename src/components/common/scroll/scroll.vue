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
    pullUpLoad: {
      type: Boolean,
      default: false
    }
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
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });

    this.Scroll.on("scroll", position => {
      // console.log(position);
      this.$emit("scroll", position);
    });

    this.Scroll.on("pullingUp", () => {
      // console.log("上拉加载更多");
      this.$emit('pullingup')
    });
  },
  methods: {
    scrollTo(x, y, time) {
      this.Scroll.scrollTo(x, y, time);
    }
  }
};
</script>

<style>
</style>