<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">首页</div>
    </nav-bar>
    <homeswiper :banners='banners'></homeswiper>
    <recommends-view :recommends="recommends"></recommends-view>
    <feature-view></feature-view>

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
    </ul>
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
#home{
 padding-top: 44px; 
}
.home-nav {
  background-color:var(--color-tint);
  color:white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
</style>