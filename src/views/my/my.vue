<template>
  <div class="my">
    <!-- <nav-bar class="my-nav">
      <div slot="center">我的</div>
    </nav-bar>-->
    <ul class="content">
      <button @click="btnClick()">按钮</button>
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
      <li>20</li>
      <li>20</li>
      <li>20</li>
      <li>20</li>
      <li>20</li>
      <li>20</li>
      <li>20</li>
      <li>20</li>
      <li>20</li>
      <li>20</li>
      <li>20</li>
      <li>20</li>
      <li>20</li>
      <li>20</li>
      <li>20</li>
      <li>20</li>
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
      <li>20</li>
      <li>20</li>
      <li>20</li>
      <li>20</li>
      <li>20</li>
      <li>20</li>
      <li>20</li>
      <li>20</li>
      <li>20</li>
      <li>20</li>
      <li>20</li>
      <li>20</li>
      <li>20</li>
      <li>20</li>
      <li>20</li>
      <li>20</li>
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
    </ul>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import BS from "better-scroll";

export default {
  name: "my",
  components: {
    NavBar
  },
  data() {
    return {
      Scroll: null
    };
  },
  mounted() {
    this.Scroll = new BS(".my", {
      probeType: 3,
      pullUpLoad: true
    });

    this.Scroll.on("scroll", (position) => {
      // console.log(position);
    });

    this.Scroll.on("pullingUp", () => {
      console.log('上拉加载更多');
    });
  },
  methods: {
    btnClick(){
      console.log('btnClick');
      
    }
  },
};
</script>

<style scope>
.my-nav {
  background-color: var(--color-tint);
  color: white;
}
.my {
  height: 150px;
  background-color: red;
  overflow: hidden;
  /* overflow-y: scroll; */
}
</style>