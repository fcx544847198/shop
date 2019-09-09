<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">首页</div>
    </nav-bar>
    <homeswiper :banners="banners"></homeswiper>
    <recommends-view :recommends="recommends"></recommends-view>
    <feature-view></feature-view>
    <tab-control class="tabcontrol" :titles="['流行','新款','精选']"></tab-control>

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

import { gethomemultidata } from "../../network/home";
import { gethomedata } from "../../network/home";
// import { log } from 'util';

export default {
  name: "home",
  components: {
    NavBar,
    homeswiper,
    RecommendsView,
    FeatureView,
    TabControl
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
        news: {
          page: 0,
          list: []
        },
        sell: {
          page: 0,
          list: []
        }
      }
    };
  },
  created() {
    //1.请求多个数据
    gethomemultidata().then(res => {
      // console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });

    // gethomedata("pop");

    gethomedata("pop",1).then(res =>{
      console.log(res);
    });
    gethomedata('new',1).then(res =>{
      console.log(res);
    })
    gethomedata('sell',1).then(res =>{
      console.log(res);

    })
  },
  // methods: {
  //   gethomedata(type,page) {
  //     // const page = this.goods[type].page + 1;
  //     gethomedata(type, page).then(res => {
  //       // this.goods[type].list.push(...res.data.list);
  //       this.goods[type].page += 1;
  //       console.log(res);
  //     });
  //   }
  // }
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
  z-index: 9;
}
.tabcontrol {
  position: sticky;
  top: 44px;
  background-color: white;
}
</style>