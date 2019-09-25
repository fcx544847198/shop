<template>
  <div id="detail">
    <detailnavbar class="detail-nav" />
    <scroll class="content" ref="scroll">
      <detailswiper :top-images="topImages" />
      <detailbaseinfo :GoodsInfo="GoodsInfo" />
      <detailshopinfo :shop="shop" />
      <detailgoodinfo :detail-info="detailInfo" @imageLoad="load" />
      <detailparaminfo :param-info="paramInfo" />
      <detailcommentinfo :commentInfo="commentInfo"/>
    </scroll>
  </div>
</template>

<script>
import detailnavbar from "./childcomps/detailnavbar";
import detailbaseinfo from "./childcomps/DetailBaseInfo";
import detailswiper from "./childcomps/detailswiper";
import detailshopinfo from "./childcomps/DetailShopInfo";
import detailgoodinfo from "./childcomps/DetailGoodsInfo";
import detailparaminfo from "./childcomps/DetailParamInfo";
import detailcommentinfo from './childcomps/DetailcommentInfo'

import Scroll from "../../components/common/scroll/scroll";

import {
  getdataildata,
  GoodsInfo,
  shop,
  GoodsParam
} from "../../network/detail";

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
      commentInfo:{}
    };
  },
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
        this.commentInfo = data.rate.list[0]
      }
    });
  },
  methods: {
    load() {
      this.$refs.scroll.refresh();
    }
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
}
.content {
  height: calc(100% - 44px);
  overflow: hidden;
}
</style>