<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">首页</div>
    </nav-bar>
    <scroll class="content" ref="scroll" :probeType="3" @scroll="contentscroll" :pull-up-load="true"
    @pullingup="loadmore">
      <homeswiper :banners="banners" />
      <recommends-view :recommends="recommends" />
      <feature-view />
      <tab-control class="tabcontrol" :titles="['流行','新款','精选']" @tabclick="tabclick" />
      <goodslist :goods="goods[currentType].list" />
    </scroll>
    <backtop @click.native="backClick()" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";

import homeswiper from "./childcomps/homeswiper";
import RecommendsView from "./childcomps/RecommendsView";
import FeatureView from "./childcomps/FeatureView";
import TabControl from "../../components/content/tabcontrol/tabcontrol";
import goodslist from "../../components/content/goods/goodslist";
import scroll from "../../components/common/scroll/scroll";
import backtop from "../../components/content/backtop/backtop";

import { gethomemultidata } from "../../network/home";
import { gethomedata } from "../../network/home";

export default {
  name: "home",
  components: {
    NavBar,
    homeswiper,
    RecommendsView,
    FeatureView,
    TabControl,
    goodslist,
    scroll,
    backtop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: {
          page: 0,
          list: []
        },
        new: {
          page: 0,
          list: []
        },
        sell: {
          page: 0,
          list: []
        }
      },
      currentType: "pop",
      isShowBackTop:false
    };
  },
  created() {
    //1.请求多个数据
    gethomemultidata().then(res => {
      // console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    }),
      // gethomedata("pop");

      gethomedata("pop", 1).then(res => {
        // console.log(res);
        // this.goods.pop.list = res.data.list;
        this.goods["pop"].list.push(...res.data.list);
        // console.log(this.goods.pop.list);
      }),
      gethomedata("new", 1).then(res => {
        // console.log(res);
        // this.goods.new.list = res.data.list;
        this.goods["new"].list.push(...res.data.list);
        // console.log(this.goods.new.list);
      }),
      gethomedata("sell", 1).then(res => {
        // console.log(res);
        // this.goods.sell.list = res.data.list;
        this.goods["sell"].list.push(...res.data.list);
        // console.log(this.goods.sell.list);
      });
  },
  methods: {
    tabclick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
      }
    },
    backClick() {
      // console.log("111");
      // this.$refs.scroll.Scroll.scrollTo(0,0,500)
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    contentscroll(position) {
      // console.log(position);
      this.isShowBackTop = -position.y > 1000
    },
    loadmore(){
      console.log('上拉加载更多');
      // this.gethomedata(this.currentType)
    }
  }
};
</script>

<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 15;
}
.tabcontrol {
  position: sticky;
  top: 44px;
  background-color: white;
  z-index: 9;
}
.content {
  /* height: 300px; */
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

/* .content{
  overflow: hidden;
  height: calc(100% - 93px);
  margin-top: 44px;  
} */
</style>