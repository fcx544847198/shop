<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activecolor="blue">
        <img slot="item-icon" src='../../../assets/img/tabbar/home.svg' />
        <img slot="item-icon-active" src="../../../assets/img/tabbar/home_active.svg" />
        <div slot="item-name">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/fenlei" activecolor="blue">
        <img slot="item-icon" src="../../../assets/img/tabbar/category.svg" />
        <img slot="item-icon-active" src="../../../assets/img/tabbar/category_active.svg" />
        <div slot="item-name">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcar" activecolor="blue">
        <img slot="item-icon" src="../../../assets/img/tabbar/shopcart.svg" />
        <img slot="item-icon-active" src="../../../assets/img/tabbar/shopcart_active.svg" />
        <div slot="item-name">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/my" activecolor="blue">
        <img slot="item-icon" src="../../../assets/img/tabbar/profile.svg" />
        <img slot="item-icon-active" src="../../../assets/img/tabbar/profile_active.svg" />
        <div slot="item-name">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from '../../common/tabbar/tabbar';
import TabBarItem from "../../common/tabbar/tabbaritem";

export default {
    name:'maintabbar',
    components:{
        TabBar,
        TabBarItem
    }
}
</script>

<style>
</style>