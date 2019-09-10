<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">首页</div>
    </nav-bar>
    <homeswiper :banners="banners" />
    <recommends-view :recommends="recommends" />
    <feature-view />
    <tab-control class="tabcontrol" :titles="['流行','新款','精选']" @tabclick="tabclick" />
    <goodslist :goods="goods[currentType].list" />

    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>20</li>
      <li>20</li>
      <li>20</li>
      <li>20</li>
      <li>20</li>
      <li>20</li>
      <li>20</li>
      <li>20</li>
      <li>20</li>
      <li>20</li>
      <li>20</li>
      <li>20</li>
      <li>20</li>
      <li>20</li>
      <li>20</li>
      <li>20</li>
    </ul>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";

import homeswiper from "./childcomps/homeswiper";
import RecommendsView from "./childcomps/RecommendsView";
import FeatureView from "./childcomps/FeatureView";
import TabControl from "../../components/content/tabcontrol/tabcontrol";
import goodslist from "../../components/content/goods/goodslist";

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
    goodslist
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
      currentType: "pop"
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
        console.log(this.goods.pop.list);
      }),
      gethomedata("new", 1).then(res => {
        // console.log(res);
        // this.goods.new.list = res.data.list;
        this.goods["new"].list.push(...res.data.list);
        console.log(this.goods.new.list);
      }),
      gethomedata("sell", 1).then(res => {
        // console.log(res);
        // this.goods.sell.list = res.data.list;
        this.goods["sell"].list.push(...res.data.list);
        console.log(this.goods.sell.list);
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
    }
  }
};
</script>

<style scope>
#home {
  padding-top: 44px;
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
</style>