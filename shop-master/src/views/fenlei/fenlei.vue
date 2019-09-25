<template>
  <div id="fenlei">
    <nav-bar class="fenlei-nav">
      <div slot="center">商品分类</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'

export default {
  name: "fenlei",
  components:{
    NavBar
  }
};
</script>

<style scope>
.fenlei-nav {
  background-color:var(--color-tint);
  color:white;
}
</style>