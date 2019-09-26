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
    //1.创建Better-scroll对象
    this.Scroll = new BS(".wrapper", {
      // probeType: 3,
      pullUpLoad: this.pullUpLoad,
      click: true,
      probeType: this.probeType
    });
    //2.监听滚动位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.Scroll.on("scroll", position => {
        // console.log(position);
        this.$emit("scroll", position);
      });
    }
    //3.监听scroll滚到底部
    if (this.pullUpLoad) {
      this.Scroll.on("pullingUp", () => {
        this.$emit('pullingUp')
      });
    }
  },
  methods: {
    scrollTo(x, y, time) {
      this.Scroll && this.Scroll.scrollTo(x, y, time);
    },
    refresh() {
      // console.log("111");

      this.Scroll && this.Scroll.refresh();
    },
    finishPullUp() {
      this.Scroll && this.Scroll.finishPullUp();
    }
  }
};
</script>

<style>
</style>