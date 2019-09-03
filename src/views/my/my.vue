<template>
  <div id="my">
    <nav-bar class="my-nav">
      <div slot="center">我的</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'

export default {
  name: "my",
  components:{
    NavBar
  }
};
</script>

<style scope>
.my-nav {
  background-color: var(--color-tint);
  color: white;
}
</style>