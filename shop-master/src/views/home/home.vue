<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">首页</div>
    </nav-bar>
    <tab-control
      :titles="['流行','新款','精选']"
      @tabclick="tabclick"
      ref="tabcontrol1"
      class="tabcontrol"
      v-show="istabfixed"
    />
    <scroll
      class="content"
      ref="scroll"
      :probeType="3"
      @scroll="contentscroll"
      :pull-up-load="true"
      @pullingUp="loadmore"
    >
      <homeswiper :banners="banners" @swiperimageload="swiperimageload" />
      <recommends-view :recommends="recommends" />
      <feature-view />
      <tab-control :titles="['流行','新款','精选']" @tabclick="tabclick" ref="tabcontrol" />
      <goodslist :goods="goods[currentType].list" />
    </scroll>
    <backtop @click.native="backClick()" v-show="isShowBackTop" />
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

import { debounce } from "../../common/until";
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
      result: {},
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
      isShowBackTop: false,
      SaveY: 0,
      taboffsetTop: 0,
      istabfixed: false
    };
  },
  created() {
    //1.请求多个数据
    this.gethomemultidata();

    //2.请求商品信息
    this.gethomedata("pop");
    this.gethomedata("new");
    this.gethomedata("sell");
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    //3.监听item中图片加载完成
    this.$bus.$on("itemimgload", () => {
      refresh();
    });
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.SaveY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.SaveY = this.$refs.scroll.Scroll.y;
  },
  methods: {
    gethomemultidata() {
      gethomemultidata().then(res => {
        // this.result = res;
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    gethomedata(type) {
      let page = this.goods[type].page + 1;
      gethomedata(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        //完成上拉加载更多
        this.$refs.scroll.finishPullUp();
      });
    },
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
      this.$refs.tabcontrol1.currentIndex = index;
      this.$refs.tabcontrol.currentIndex = index;
    },
    backClick() {
      // console.log("111");
      // this.$refs.scroll.Scroll.scrollTo(0,0,500)
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    contentscroll(position) {
      // console.log(position);
      //1.决定BackTop是否显示
      this.isShowBackTop = -position.y > 1000;

      //2.决定tabcontrol是否吸顶(position:fixed)
      this.istabfixed = -position.y > this.taboffsetTop;
    },
    loadmore() {
      this.gethomedata(this.currentType);
    },
    swiperimageload() {
      this.taboffsetTop = this.$refs.tabcontrol.$el.offsetTop;
    }
  }
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 15; */
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
.tabcontrol{
  position: relative;
  z-index: 9;
  background-color: white;
}
.fixed {
  position: fixed;
  right: 0;
  left: 0;
  top: 44px;
}
/* .content{
  overflow: hidden;
  height: calc(100% - 93px);
  margin-top: 44px;  
} */
</style>