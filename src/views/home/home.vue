<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">首页</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";

export default {
  name: "home",
  components: {
    NavBar
  }
};
</script>

<style scope>
.home-nav {
  background-color:var(--color-tint);
  color:white;
}
</style>