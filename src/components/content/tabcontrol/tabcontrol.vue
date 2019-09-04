<template>
  <div class="tabcontrol">
    <div
      v-for="(item,index) in titles"
      :key="index"
      class="tabcontrol-item"
      :class="{active :index === currentIndex}"
      @click="itemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabcontrol",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods:{
      itemClick(index){
          this.currentIndex = index;
      }
  }
};
</script>

<style scoped>
.tabcontrol {
  display: flex;
  text-align: center;
  line-height: 40px;
  height: 40px;
  font-size: 15px;
}
.tabcontrol-item {
  flex: 1;
}
.tabcontrol-item span {
  padding: 7px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-tint);
}
</style>