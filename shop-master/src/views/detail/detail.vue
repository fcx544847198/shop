<template>
  <div id="detail">
    <detailnavbar class="detail-nav" @titleclick="titleclick" />
    <scroll class="content" ref="scroll" @scroll="contentscroll" :probeType="3">
      <detailswiper :top-images="topImages" />
      <detailbaseinfo :GoodsInfo="GoodsInfo" />
      <detailshopinfo :shop="shop" />
      <detailgoodinfo :detail-info="detailInfo" @imageLoad="load" />
      <detailparaminfo ref="params" :param-info="paramInfo" />
      <detailcommentinfo ref="comment" :commentInfo="commentInfo" />
    </scroll>
    <detailbottombar />
    <backtop @click.native="backClick()" v-show="isShowBackTop" />
  </div>
</template>

<script>
import detailnavbar from "./childcomps/detailnavbar";
import detailbaseinfo from "./childcomps/DetailBaseInfo";
import detailswiper from "./childcomps/detailswiper";
import detailshopinfo from "./childcomps/DetailShopInfo";
import detailgoodinfo from "./childcomps/DetailGoodsInfo";
import detailparaminfo from "./childcomps/DetailParamInfo";
import detailcommentinfo from "./childcomps/DetailcommentInfo";
import detailbottombar from "./childcomps/detailbottombar";

import Scroll from "../../components/common/scroll/scroll";

import {
  getdataildata,
  GoodsInfo,
  shop,
  GoodsParam,
  getrecommend
} from "../../network/detail";

import { backtopmixin } from "../../common/mixin";

export default {
  name: "detail",
  components: {
    detailnavbar,
    detailswiper,
    detailbaseinfo,
    detailshopinfo,
    detailgoodinfo,
    detailparaminfo,
    detailcommentinfo,
    detailbottombar,
    Scroll
  },
  data() {
    return {
      iid: null,
      topImages: [],
      GoodsInfo: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themetopys: []
    };
  },
  mixins: [backtopmixin],
  created() {
    //1.保存传入的iid
    this.iid = this.$route.params.iid;
    //2.根据iid进行网络请求
    getdataildata(this.iid).then(res => {
      const data = res.result;
      console.log(res);
      //1.获取轮播图数据
      this.topImages = data.itemInfo.topImages;
      //2.获取商品信息
      this.GoodsInfo = new GoodsInfo(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //3.创建店铺信息
      this.shop = new shop(data.shopInfo);
      //4.获取商品详情信息
      this.detailInfo = data.detailInfo;
      //5.获取商品参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      //6.取出商品评价信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
    // 3.请求推荐数据
    getrecommend().then(res => {
      this.recommend = res.data.list;
      console.log(res);
    });
  },
  mounted() {
    if (location.href.indexOf("#reloaded") == -1) {
      location.href = location.href + "#reloaded";
      location.reload();
    }
  },

  methods: {
    load() {
      this.$refs.scroll.refresh();
      this.themetopys = [];
      this.themetopys.push(0);
      this.themetopys.push(this.$refs.params.$el.offsetTop);
      this.themetopys.push(this.$refs.comment.$el.offsetTop);
    },
    titleclick(index) {
      // console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themetopys[index], 300);
    },
    contentscroll(position) {
      //1.获取y值
      const positionY = -position.y;
      this.listenbacktopshow(position);
    }
    // contentscroll(position) {
    //   // console.log(position);
    //   //1.获取y值
    //   const positionY = -position.y;
    //   //2.positionY和主题中的值进行对比
    //   for (let i in this.themetopys) {
    //     i = i * 1;
    //     if (
    //       positionY > this.themetopys[i] &&
    //       positionY < this.themetopys[i + 1]
    //     ) {

    //     }
    //   }
    // }
  }
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  height: calc(100% - 44px - 49px);
}
</style>