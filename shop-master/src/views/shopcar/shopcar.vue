<template>
  <div id="shopcar">
    <nav-bar class="shopcar-nav">
      <div slot="center">购物车</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'

export default {
  name: "shopcar",
  components:{
    NavBar
  }
};
</script>

<style scope>
.shopcar-nav {
  background-color: var(--color-tint);
  color: white;
}
</style>