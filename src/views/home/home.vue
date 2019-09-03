<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">首页</div>
    </nav-bar>
    <homeswiper :banners='banners'></homeswiper>
    <recommends-view :recommends="recommends"></recommends-view>
    <feature-view></feature-view>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import { gethomemultidata } from "../../network/home";
import homeswiper from './childcomps/homeswiper'
import RecommendsView from './childcomps/RecommendsView'
import FeatureView from './childcomps/FeatureView'

export default {
  name: "home",
  components: {
    NavBar,
    homeswiper,
    RecommendsView,
    FeatureView
  },
  data() {
    return {
      banners:[],
      recommends:[]
    }
  },
  created(){
    //1.请求多个数据
    gethomemultidata().then(res =>{
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  }
};
</script>

<style scope>
.home-nav {
  background-color:var(--color-tint);
  color:white;
}
</style>