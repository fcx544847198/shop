<template>
  <div class="detaidswiper">
    <swiper class="swiper">
      <swiper-item v-for="item in topImages">
        <img :src="item" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "../../../components/common/swiper/index";

export default {
  name: "detailswiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.swiper{
  height: 300px;
  overflow: hidden;
}
</style>