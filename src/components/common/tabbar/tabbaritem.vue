<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isAtive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-name"></slot></div>
  </div>
</template>

<script>
export default {
  name: "tabbaritem",
  props:{
    path:String,
    activecolor:{
      type: String,
      default:'red'
    }
  },
  data() {
    return {
      // isAtive:false
    }
  },
  computed:{
    isAtive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isAtive ? {color:this.activecolor} : {}
    }
  },
  methods:{
    itemClick(){
      // console.log('1111');
      
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  height: 24px;
  width: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
/* .active{
  color: red;
} */
</style>