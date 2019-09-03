<template>
  <div>
    <swiper>
      <swiper-item v-for="(item,index) in banners" :key="item[index]">
        <a :href="item.link">
          <img :src="item.image" />
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
  props:{
      banners:{
          type:Array,
          default(){
              return [];
          }
      }
  }
};
</script>

<style scope></style>