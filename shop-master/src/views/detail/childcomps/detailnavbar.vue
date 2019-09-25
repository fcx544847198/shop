<template>
  <div>
    <navbar>
      <div slot="left" class="title-img" @click="backClick()">
        <img src="../../../assets/img/common/back.svg" alt />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item,index) in item"
          class="title-item"
          :class="{active: index === currentIndex}"
          @click="titleaClick(index)"
        >{{item}}</div>
      </div>
    </navbar>
  </div>
</template>

<script>
import Navbar from "../../../components/common/navbar/NavBar";

export default {
  name: "detailnavbar",
  components: {
    Navbar
  },
  data() {
    return {
      item: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    titleaClick(index) {
      this.currentIndex = index;
    },
    backClick(){
      //第一种返回方法
      // this.$router.back()
      //第二种返回方法
      this.$router.go(-1)
    }
  }
};
</script>

<style scoped>
.title {
  display: flex;
}
.title-item {
  flex: 1;
  font-size: 13px;
}
.title-img {
  margin-top: 5px;
}
.active {
  color: var(--color-high-text);
}
</style>