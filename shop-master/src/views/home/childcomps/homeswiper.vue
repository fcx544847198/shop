<template>
  <div>
    <swiper>
      <swiper-item v-for="(item,index) in banners">
        <a :href="item.link">
          <img :src="item.image" @load="imageload" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "../../../components/common/swiper";

export default {
  name: "homeswiper",
  components: {
    Swiper,
    SwiperItem
  },
  data() {
    return {
      isload:false
    }
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    imageload() {
      if (!this.isload) {
        this.$emit('swiperimageload')
        this.isload = true
      }
    }
  },
};
</script>

<style scoped>
</style>